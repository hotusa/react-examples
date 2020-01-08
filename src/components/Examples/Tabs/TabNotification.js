import React from 'react'
import Notification from "../../Commons/Notification";

export default function TabNotification() {

    const code =
        `
const onClickNotification = () => {
    IGMNotification({
        classContainer: 'container-toast',
        text: 'Introduzca su e-mail',
        type: 'info',
        timer: 3500
    })
}
    
return (
    <button
        className="btn btn-primary"
        type="button" 
        onClick={onClickNotification}>Click me
    </button>
)
`

    const onClickNotification = () => {
        Notification({
            classContainer: 'container-toast',
            text: 'Insertado correctamente!',
            type: 'success',
            timer: 5500
        })
    }
    const onClickNotificationHTML = () => {
        Notification({
            classContainer: 'container-toast',
            html: '<h1>Text h1</h1>',
            type: 'info',
            timer: 3500
        })
    }

    return (
        <>
            <button
                className="btn btn-primary mr-1"
                type="button" onClick={onClickNotification}>Click me (text)
            </button>
            <button
                className="btn btn-primary"
                type="button" onClick={onClickNotificationHTML}>Click me (HTML)
            </button>
            <br/><br/>
            <figure>
                <pre>
                    <code>{code}</code>
                </pre>
            </figure>
        </>
    )
}