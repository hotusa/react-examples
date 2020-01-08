import React, {useRef, useState} from 'react'
import OnBeforeUnLoad from "../../Commons/OnBeforeUnLoad";

const TabOnBeforeUnload = () => {

    const initialize = {personal: {nombre: '', apellidos: ''}, cargo: ''}
    const [dataOld, setDataOld] = useState(initialize)
    const [dataNew, setDataNew] = useState(initialize)
    const isChange = useRef(false)

    return (
        <div>
            <br/>
            <OnBeforeUnLoad dataOld={dataOld} dataNew={dataNew} skipFields={['cargo', 'personal.nombre']}>
                <form>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Nombre"
                            name="name"
                            value={dataNew.personal.nombre}
                            onChange={(e) => {
                                setDataNew({...dataNew, personal: {...dataNew.personal, nombre: e.target.value}})
                                isChange.current = true
                            }}/>
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Apellidos"
                            name="lastname"
                            value={dataNew.personal.apellidos}
                            onChange={(e) => {
                                setDataNew({...dataNew, personal: {...dataNew.personal, apellidos: e.target.value}})
                                isChange.current = true
                            }}/>
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Cargo"
                            name="cargo"
                            value={dataNew.cargo}
                            onChange={(e) => {
                                setDataNew({...dataNew, cargo: e.target.value})
                                isChange.current = true
                            }}/>
                    </div>
                    <button type="button" className={`btn btn-${isChange.current ? 'primary' : 'secondary'}`}
                            onClick={() => {
                                setDataOld(dataNew)
                                isChange.current = false
                            }}>Guardar
                    </button>
                </form>
            </OnBeforeUnLoad>

            <br/>

            <figure>
            <pre>
                <code>
{`
<OnBeforeUnLoad dataOld={dataOld} dataNew={dataNew} skipFields={['cargo', 'personal.nombre']}>
    {children}
</OnBeforeUnLoad>
`}
                </code>
            </pre>
            </figure>


        </div>
    )
}

export default TabOnBeforeUnload