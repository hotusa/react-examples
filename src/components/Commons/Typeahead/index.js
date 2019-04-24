import React, {useState, useEffect} from 'react'
import {AsyncTypeahead, Highlighter} from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';


export default function Typeahead({isLoading, config, options, onSearch, onChange}) {

    const [dataConfig, setDataConfig] = useState({
        id: config && config.id ? config.id : 'id',
        promptText: config && config.promptText ? config.promptText : "No hay registro",
        searchText: config && config.searchText ? config.searchText : "Buscando...",
        labelKey: config && config.labelKey ? config.labelKey : 'text',
        filterBy: config && config.filterBy ? config.filterBy : ['text'],
        placeholder: config && config.placeholder ? config.placeholder : "Buscar...",
        minLength: config && config.minLength ? config.minLength : 3,
        size: config && config.size ? config.size : undefined, // "large", "lg", "small", "sm"
        defaultInputValue: config && config.defaultInputValue ? config.defaultInputValue : ''
    })

    return (
        <AsyncTypeahead
            bsSize={dataConfig.size}
            defaultInputValue={`${dataConfig.defaultInputValue}`}
            id={dataConfig.id}
            promptText={dataConfig.promptText}
            searchText={dataConfig.searchText}
            labelKey={dataConfig.labelKey}
            filterBy={dataConfig.filterBy}
            placeholder={dataConfig.placeholder}
            minLength={dataConfig.minLength}
            options={options}
            onSearch={onSearch}
            onChange={onChange}
            isLoading={isLoading || false}
            renderMenuItemChildren={(option, props, idx) => (
                <Highlighter search={props.text}>
                    {option.text}
                </Highlighter>
            )}
        />
    )

}