import React, {useState, useEffect} from 'react'
import Typeahead from "../Commons/Typeahead";

export default function TabTypeahead () {

    const [options, setOptions] = useState([])
    const [clear, setClear] = useState(false)
    const [flag, setFlag] = useState(true)
    const [count, setCount] = useState(0)

    useEffect(()=>{

        return ()=> {
            if (clear) setClear(false)
        }

    })


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
        size: 'sm',
    }

    let loading = false

    return (
        <>
        <Typeahead
            mounted={flag}
            defaultInputValue={count.toString()}
            isLoading={loading}
            config={config}
            options={options}
            onSearch={onSearch}
            onChange={onChange}
            onKeyDown={(e)=>{
                console.log(e.key)
            }}
            clear={clear}
        />

            <button onClick={()=>{
                setClear(true)
            }}>Clear</button>
            <button onClick={()=>setCount(count+1)}>Count</button>
            <button onClick={()=> {
                setFlag(!flag)
            }}>Show/Hide</button>
        </>

    )
}