import React, {useState} from 'react'
import Modal from "../../Commons/Modal";
import Modal2 from "../../Commons/Modal2";
import {faCheck, faTimes, faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


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
    title: 'Modal title',
    onOk: onCallback,
    onCancel: onCallback,
    onBackdrop: onCallback,
    onOther: onCallback,
    onClose: onCallback,
    textOk: 'Aceptar',
    textCancel: 'Salir',
    size: '', // sm (default), xl, lg
    btSize: 'sm', // sm, md (default), lg
    iconButton: true,
    iconOK: faCheck, // 'add', 'update', 'ok' or Object Font Awesome (ex: faCheck)
    colorOk: 'primary', // ('primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link')
    colorCancel: 'secondary',
    textOther:'back',
    colorOther:'info',
    iconOther: faAngleLeft,
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
        title:'Enter username',
        onOk: onCallback,
        onCancel: onCallback,
        onBackdrop: onCallback,
        onOther: onCallback,
        onClose: onCallback,
        textOk: 'Ok',
        textCancel: 'Cancelar',
        size: '', // sm, lg (size modal)
        btSize: 'sm', // sm, lg (size button OK, Cancel)
        iconButton: true,
        iconOK: faCheck, // 'add', 'update', 'ok' or Object Font Awesome (ex: faUsers) --> import {faCheck} from "@fortawesome/free-solid-svg-icons";
        iconCancel: faTimes,
        colorOk: 'primary', // ('primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link')
        colorCancel: 'secondary',
        textOther:'back',
        colorOther:'info',
        iconOther: faAngleLeft,
        footer: {
            textHtml: '* Required fields'
        }

    }


    return (
        <>
            <button className="btn btn-sm btn-primary" type="button" onClick={() => setShow(true)}>Show modal</button>
            {/*<button className="btn btn-sm btn-primary" type="button" onClick={() => setShow2a(true)}>Show modal 2a</button>
            <button className="btn btn-sm btn-primary" type="button" onClick={() => setShow2b(true)}>Show modal 2b</button>*/}
            <Modal
                loading={true}
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


            {/*<Modal2
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
            </Modal2>*/}


            <br/><br/>
            <figure>
                <pre>
                    <code>{code}</code>
                </pre>
            </figure>
        </>
    )

}