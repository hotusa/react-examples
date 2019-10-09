import React from 'react'
import Select from 'react-select'
import './select.css'

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
        <Select
            className={dataConfig.className || 'react-igmweb-select'}
            classNamePrefix={dataConfig.classNamePrefix || 'xxx'}
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

    )
}