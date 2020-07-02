import React, {useState} from 'react'
import Select from 'react-select'
import Loader from '../../Commons/Loader'

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

  const [isLoading, setIsLoding] = useState(false);

  return (
    <>

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

      <Loader isLoading={isLoading}>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum
        </p>
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