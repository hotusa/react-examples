import React, {useState} from 'react'
import Typeahead from "../Commons/Typeahead";

export default function TabTypeahead () {

    const [options, setOptions] = useState([])

    const onSearch = (text) => {
        console.log('onSearch', text)
        setOptions([
            {id: '1', text: 'opcion 1'},
            {id: '2', text: 'opcion 2'},
            {id: '3', text: 'opcion 3'}
        ])
    }

    const onChange = (search) => {
        console.log(search)
    }

    let config = {
        id: 'idsearch',
        promptText: 'No hay registro',
        searchText: 'Buscando...',
        labelKey: 'text',
        filterBy: ['text'],
        placeholder: 'Buscar...',
        minLength: 3
    }

    let loading = false

    return (
        <Typeahead
            isLoading={loading}
            config={config}
            options={options}
            onSearch={onSearch}
            onChange={onChange} />
    )
}