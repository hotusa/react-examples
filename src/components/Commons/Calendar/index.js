import React, {useState, useEffect} from 'react'
import DatePicker, {registerLocale, setDefaultLocale} from "react-datepicker";
import es from 'date-fns/locale/es';
import "react-datepicker/dist/react-datepicker.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarAlt} from "@fortawesome/free-solid-svg-icons";
import InputMask from 'react-input-mask';
import './calendar.css'

export default function _Calendar({className, startDate, callback,
                                      isInvalid = false, size = undefined, dateFormat = 'dd/MM/yyyy', locale = 'es',
                                      minDate = undefined, maxDate = undefined, disabled = false, readOnly = false,
                                      showMonthDropdown = true, showYearDropdown = false, showPopperArrow = true,
                                      popperPlacement='bottom-end', tabIndex=1, maskChar='_'}) {

    registerLocale('es', es)
    setDefaultLocale('es')

    const getSplitedDate = (date) => {
        let day = parseInt(date.getDate()) > 9 ? parseInt(date.getDate()) : "0" + parseInt(date.getDate())
        let month = parseInt(date.getMonth()) + 1 > 9 ? parseInt(date.getMonth()) + 1 : "0" + (parseInt(date.getMonth()) + 1)
        return {day: day, month: month, year: date.getFullYear()}
    }

    const getStringDate = (date, separator = '/') => {
        const temp = getSplitedDate(date)
        return temp.day + separator + temp.month + separator + temp.year
    }


    const [ejercicio, setEjercicio] = useState()
    const [text, setText] = useState('') // text input
    const [mask, setMask] = useState('99/99/9999')

    useEffect(() => {

        if (startDate) {
            setText(getStringDate(startDate, "/"))
            setEjercicio(startDate.getFullYear())
        } else {
            if (text.indexOf(maskChar) === -1) {
                setText('')
            }
        }

    }, [startDate])


    useEffect(() => {

        setMask(dateFormat.replace(/d/g, "9").replace(/M/g, "9").replace(/y/g, "9"))

    }, [dateFormat])

    const onChangeDatePicker = (date) => {
        setText(date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear())
        date.setHours(12,0,0)
        callback(date, false)
    }

    const beforeMaskedValueChange = (newState, oldState, userInput) => {
        var {value} = newState;
        var selection = newState.selection;
        var cursorPosition = selection ? selection.start : null;

        // keep minus if entered by user
        if (value.endsWith('-') && userInput !== '-' && !text.endsWith('-')) {
            if (cursorPosition === value.length) {
                cursorPosition--;
                selection = {start: cursorPosition, end: cursorPosition};
            }
            value = value.slice(0, -1);
        }


        if (newState.value.indexOf(maskChar) === -1 && userInput) {

            let pos = value.split('/')
            let date = new Date()
            date.setFullYear(dateFormat.indexOf('yyyy') === -1 ? ejercicio : parseInt(pos[2]), parseInt(pos[1]) - 1, parseInt(pos[0]))
            date.setHours(12,0,0)
            callback(date, false)

        } else {
            if (newState.value.indexOf(maskChar) > -1 && newState.value === oldState.value) {

                // Controlar si el input está vacío
                let count_separator = occurrences(dateFormat, '/');
                let count_maskChar = occurrences(value, maskChar);

                if (value.length === count_maskChar + count_separator) {
                    callback(undefined, true);
                } else {
                    callback(undefined, false);
                }


            }
        }

        return {
            value,
            selection
        };
    }


    const occurrences = (string, subString, allowOverlapping) => {

        string += "";
        subString += "";
        if (subString.length <= 0) return (string.length + 1);

        let n = 0,
          pos = 0,
          step = allowOverlapping ? 1 : subString.length;

        while (true) {
            pos = string.indexOf(subString, pos);
            if (pos >= 0) {
                ++n;
                pos += step;
            } else break;
        }
        return n;
    }


    return (
        <div
            className={`custom-calendar ${className ? className : ''} input-group ${size ? 'input-group-' + size : ''}`}>
            <InputMask
                mask={mask}
                maskChar={maskChar}
                value={text}
                onChange={(e) => setText(e.target.value)}
                beforeMaskedValueChange={beforeMaskedValueChange}
                readOnly={readOnly}
                disabled={disabled}
                className={`form-control ${size ? 'form-control-' + size : ''} ${isInvalid ? 'is-invalid' : ''}`}
                placeholder={dateFormat}
            >
            </InputMask>
            <div className="input-group-append">
                <DatePicker
                    tabIndex={tabIndex}
                    disabled={disabled}
                    maxDate={maxDate}
                    minDate={minDate}
                    showPopperArrow={showPopperArrow}
                    dateFormat={dateFormat}
                    selected={startDate}
                    locale={locale}
                    showMonthDropdown={showMonthDropdown}
                    showYearDropdown={showYearDropdown}
                    popperPlacement={popperPlacement}
                    onChange={onChangeDatePicker}
                    customInput={<button
                        className={`btn btn-${isInvalid ? 'danger' : 'ligth'} ${size ? 'btn-' + size : ''} icon`}
                        type="button">
                        <FontAwesomeIcon icon={faCalendarAlt}/></button>}
                />
            </div>
        </div>
    )
}