import React, {useState} from 'react'
import Modal from "../Commons/Modal";


export default function TabModal() {

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
        textCancel: 'Cancel',
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
            <button className="btn btn-sm btn-primary" onClick={(e) => setShow(true)}>Show modal</button>
            <Modal
                disableConfirm={true}
                className="mi-modal"
                show={show}
                options={options}
                >
                    <form>
                        <label>Name*</label>
                        <input type="text" className="form-control"/>
                    </form>
            </Modal>
        </>
    )

}