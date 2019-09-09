import React from 'react'
import Notification from "../Commons/Notification";

export default function TabNotification () {

    const onClickNotification = () => {
        Notification({
            classContainer: 'container-toast',
            text: 'Introduzca su e-mail',
            type: 'info',
            timer: 350000
        })
    }

    return (
        <button
            className="btn btn-primary"
            type="button" onClick={onClickNotification}>Click me
        </button>
    )
}