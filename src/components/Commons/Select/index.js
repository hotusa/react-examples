import React from 'react'
import Select from 'react-select'

export default function _Select({options, config, value, onChange, isDisabled, isLoading}) {

    let dataConfig = {
        placeholder: config.placeholder ? config.placeholder : '',
        isClearable: config.isClearable ? config.isClearable : true,
        className: config.className ? config.className : '',
        classNamePrefix: config.classNamePrefix ? config.classNamePrefix : '',
        isDisabled: isDisabled ? isDisabled : false,
        isLoading: isLoading ? isLoading : false,
        isSearchable: config.isSearchable ? config.isSearchable : true,
        isMulti: config.isMulti ? config.isMulti : false,
        noOptionsMessage: config.noOptionsMessage ? config.noOptionsMessage : undefined,
        size: config.size ? config.size : ''

    }


    const getNumberSize = (size) => {

        switch (size) {
            case 'sm':
                return 2
            case 'lg':
                return 7
            default:
                return 4
        }

    }

    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            fontSize: dataConfig.size === 'sm' ? '.875rem' : (dataConfig.size === 'lg' ? '1.25rem' : '1rem'),
        }),
        singleValue: (provided, state) => ({
            ...provided,
            fontSize: dataConfig.size === 'sm' ? '.875rem' : (dataConfig.size === 'lg' ? '1.25rem' : '1rem'),
            color: '#495057'
        })
    }

    return (
        <div className="row">
            <div className="col-sm-3">
                <input type="text" className="form-control form-control-sm"/>
            </div>
            <div className="col-sm-3">
                <Select
                    noOptionsMessage={() => dataConfig.noOptionsMessage}
                    isSearchable={dataConfig.isSearchable}
                    isMulti={config.isMulti}
                    isLoading={dataConfig.isLoading}
                    isDisabled={dataConfig.isDisabled}
                    isClearable={dataConfig.isClearable}
                    placeholder={dataConfig.placeholder}
                    options={options}
                    value={value}
                    onChange={onChange}
                    theme={
                        {
                            spacing: {
                                baseUnit: getNumberSize(config.size)
                            }
                        }
                    }
                    styles={customStyles}
                />
            </div>
        </div>

    )
}