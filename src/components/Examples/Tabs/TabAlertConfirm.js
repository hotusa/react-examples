import React from 'react'
import AlertConfirm from "../../Commons/AlertConfirm";


export default function TabAlertConfirm () {

    const code =
`
const onClickConfirm = () => {
    IGMAlertConfirm({
        position: 'center',
        title: '¿Estás seguro?',
        text: 'El registro seleccionado no se podrá volver a recuperar',
        type: 'success',
        confirmButtonText:'Si, eliminar',
        cancelButtonText: 'No',
        onConfirm: () => {
            console.log('confirm')
        },
        onCancel: () => {
            console.log('cancel')
        }
    })
}

return (
    <button 
        className="btn btn-primary" 
        type="button" 
        onClick={onClickConfirm}>Click me
    </button>
)
`

    const onClickConfirm = () => {
        AlertConfirm({
            position: 'center',
            title: '¿Estás seguro?',
            text: 'El registro seleccionado no se podrá volver a recuperar',
            type: 'success',
            confirmButtonText:'Si, eliminar',
            cancelButtonText: 'No',
            onConfirm: () => {
                console.log('confirm')
            },
            onCancel: () => {
                console.log('cancel')
            }
        })
    }

    return (
        <>
            <button
                className="btn btn-primary"
                type="button"
                onClick={onClickConfirm}>Click me
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