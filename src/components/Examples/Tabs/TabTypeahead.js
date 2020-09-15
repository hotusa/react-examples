import React, {useState, useEffect} from 'react'
import Typeahead from "../../Commons/Typeahead";

export default function TabTypeahead() {

    const [clear, setClear] = useState(false)
    const [isValid, setIsValid] = useState(null)

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
        //setIsValid(false)
    }

    const buttonValidation = (value) => {
        setIsValid(value)
    }

    let config = {
        id: 'idsearch',
        promptText: 'No hay registro',
        searchText: 'Buscando...',
        labelKey: 'text',
        filterBy: ['text'], // List searching
        placeholder: 'Buscar...',
        minLength: 0,
        size: '' // "large", "lg", "small", "sm"
    }

    return (
        <>
            <Typeahead
                onBlur={(e)=> console.log('activa', e)}
                isValid={isValid}
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
                onInputChange={(text) => {
                  console.log('onInputChange', text)
                }}
                clear={clear}
            />

            <br/>
            <button className="btn btn-sm btn-secondary mr-1" onClick={() => { setClear(true) }}>Clear</button>
            <button className="btn btn-sm btn-success mr-1" onClick={() => { buttonValidation(true) }}>Valid</button>
            <button className="btn btn-sm btn-danger mr-1" onClick={() => { buttonValidation(false) }}>No valid</button>
            <button className="btn btn-sm btn-dark mr-1" onClick={() => { buttonValidation(null) }}>Delete validation</button>
            <br/><br/>
            <figure>
                <pre>
                    <code>{code}</code>
                </pre>
            </figure>
        </>
    )
}