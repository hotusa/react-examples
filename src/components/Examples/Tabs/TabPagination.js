import React, {useState} from 'react'
import Pagination from "../../Commons/Pagination";


export default function TabPagination () {

    const code =
`
const [pag, setPag] = useState(1)

const onPagination = (pag) => {
    setPag(pag)
}

return (
    <IGMPagination 
        total={100} 
        itemsPag={5} 
        pag={pag} 
        onPagination={onPagination}/>
)
`

    const [pag, setPag] = useState(1)

    const onPagination = (pag) => {
        setPag(pag)
    }

    return (
        <>
            <Pagination
                total={100}
                itemsPag={5}
                pag={pag}
                onPagination={onPagination}/>

            <br/><br/>
            <figure>
                <pre>
                    <code>{code}</code>
                </pre>
            </figure>
        </>
    )
}