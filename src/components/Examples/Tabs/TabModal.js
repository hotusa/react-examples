import React, {useState} from 'react'
import Modal from "../../Commons/Modal";
import Modal2 from "../../Commons/Modal2";


export default function TabModal() {

    const [show, setShow] = useState(false)
    const [show2a, setShow2a] = useState(false)
    const [show2b, setShow2b] = useState(false)

    const code =
        `
const [show, setShow] = useState(false)

const onCallback = (action) => {
    console.log(action)
    setShow(false)
}
const options = {
    title:'Modal title',
    onOk: onCallback,
    onCancel: onCallback,
    onBackdrop: onCallback,
    textOk: 'Ok',
    textCancel: 'Cerrar',
    size: '', // sm, lg
    btSize: 'sm',
    iconButton: true,
    iconOK: '', // add, update, ok
    footer: {
        textHtml: '* Required fields'
    }
}
return (
    <>
        <button className="btn btn-sm btn-primary" type="button" onClick={() => setShow(true)}>Show modal</button>
        <IGMModal
            disableConfirm={false}
            className="mi-modal"
            show={show}
            options={options}
            >
                <form>
                    <label>Name*</label>
                    <input type="text" className="form-control"/>
                </form>
        </IGMModal>
    </>
)
`

    const onCallback = (action) => {
        console.log('action', action)
        setShow(false)
        setShow2a(false)
        setShow2b(false)
    }

    const options = {
        title: 'Modal title 2',
        onOk: onCallback,
        onCancel: onCallback,
        onBackdrop: true,
        textOk: 'Aceptar',
        textCancel: 'Salir',
        size: '', // sm (default), xl, lg
        btSize: 'sm', // sm, md (default), lg
        iconButton: true,
        iconOK: 'ok', // add, update, ok (default)
        footer: {
            textHtml: '* Required fields'
        },
        keyboard: true
    }


    return (
        <>
            <button className="btn btn-sm btn-primary" type="button" onClick={() => setShow(true)}>Show modal</button>
            <button className="btn btn-sm btn-primary" type="button" onClick={() => setShow2a(true)}>Show modal 2a</button>
            <button className="btn btn-sm btn-primary" type="button" onClick={() => setShow2b(true)}>Show modal 2b</button>
            <Modal
                disableConfirm={false}
                className="mi-modal"
                show={show}
                options={options}
                >
                    <form>
                        <label>Name*</label>
                        <input type="text" className="form-control"/>
                    </form>
            </Modal>


            <Modal2
                disableConfirm={false}
                show={show2a}
                options={options}>
                <form>
                    <label>Name*</label>
                    <input type="text" className="form-control"/>
                </form>
            </Modal2>

            <Modal2
                disableConfirm={false}
                show={show2b}
                options={options}>
                <form>
                    <label>Name2*</label>
                    <input type="text" className="form-control"/>
                </form>
            </Modal2>


            <br/><br/>
            <figure>
                <pre>
                    <code>{code}</code>
                </pre>
            </figure>
        </>
    )

}