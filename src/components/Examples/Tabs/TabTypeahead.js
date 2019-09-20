import React, {useState, useEffect} from 'react'
import Typeahead from "../../Commons/Typeahead";

export default function TabTypeahead() {

    const [options, setOptions] = useState([])
    const [clear, setClear] = useState(false)
    const [flag, setFlag] = useState(true)
    const [count, setCount] = useState(0)

    const code =
`
const onSearch = (text) => {
    console.log('onSearch', text)
}

const onChange = (search) => {
    console.log(search)
}

let config = {
    id: 'idsearch',
    promptText: 'No hay registro',
    searchText: 'Buscando...',
    labelKey: 'text',
    filterBy: ['text'], // List searching
    placeholder: 'Buscar...',
    minLength: 3,
    size: 'sm' // "large", "lg", "small", "sm"
}
return (
    <>
        <IGMTypeahead
            mounted={true}
            defaultInputValue={"opcion 1"}
            isLoading={false}
            config={config}
            options={[
                {id: '1', text: 'opcion 1'},
                {id: '2', text: 'opcion 2'},
                {id: '3', text: 'opcion 3'},
                {id: '3', text: 'sin opcion'},
            ]}
            onSearch={onSearch}
            onChange={onChange}
            onKeyDown={(e) => {
                console.log(e.key)
                console.log(e.target.value)
            }}
            clear={clear}
        />

        <button className="btn btn-sm btn-primary" onClick={() => { setClear(true) }}>Clear</button>

    </>
)
`

    useEffect(() => {

        return () => {
            if (clear) setClear(false)
        }

    })


    const onSearch = (text) => {
        console.log('onSearch', text)
    }

    const onChange = (search) => {
        console.log(search)
    }

    let config = {
        id: 'idsearch',
        promptText: 'No hay registro',
        searchText: 'Buscando...',
        labelKey: 'text',
        filterBy: ['text'], // List searching
        placeholder: 'Buscar...',
        minLength: 3,
        size: 'sm' // "large", "lg", "small", "sm"
    }

    return (
        <>
            <Typeahead
                mounted={true}
                defaultInputValue={"opcion 1"}
                isLoading={false}
                config={config}
                options={[
                    {id: '1', text: 'opcion 1'},
                    {id: '2', text: 'opcion 2'},
                    {id: '3', text: 'opcion 3'},
                    {id: '3', text: 'sin opcion'},
                ]}
                onSearch={onSearch}
                onChange={onChange}
                onKeyDown={(e) => {
                    console.log(e.key)
                    console.log(e.target.value)
                }}
                clear={clear}
            />

            <br/>
            <button className="btn btn-sm btn-primary" onClick={() => { setClear(true) }}>Clear</button>
            <br/><br/>
            <figure>
                <pre>
                    <code>{code}</code>
                </pre>
            </figure>
        </>
    )
}