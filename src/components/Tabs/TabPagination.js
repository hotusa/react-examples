import React, {useState} from 'react'
import Pagination from "../Commons/Pagination";


export default function TabPagination () {


    const [pag, setPag] = useState(1)

    const onPagination = (pag) => {
        setPag(pag)
    }

    return (
        <>
            <Pagination total={100} itemsPag={5} pag={pag} onPagination={onPagination}/>

            <pre>
            {`<Pagination total=100 itemsPag=5 pag=1 onPagination={onPagination}/>`}
            </pre>
        </>
    )
}