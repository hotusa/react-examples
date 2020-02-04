import React, {useState} from 'react'
import Select from 'react-select'
import Loader from  '../../Commons/Loader'

export default function TabLoader() {

    const code =

    `import {IGMLoader} from 'react-igmweb';

const [isLoading,setIsLoding] = useState(false);
    
    return (
        <IGMLoader
            isLoading={isLoading}>
            {...}
        </IGMLoader>
    )
    `

    const [isLoading,setIsLoding] = useState(false);

    return (
        <>
        <Loader isLoading={isLoading}>
        <div className="row">
            <div className="col">
                <button
                    onClick={(e) => {
                        e.preventDefault()
                        setIsLoding(true)
                        setTimeout(() => setIsLoding(false), 3000)
                    }} className="btn btn-primary mr-2">Click Me!
                </button>
            </div>
        </div>
        </Loader>
            <br/>
            <figure>
                <pre>
                    <code>{code}</code>
                </pre>
            </figure>
            </>
    )

}