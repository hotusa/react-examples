import React from 'react'
import AlertConfirm from "../Commons/AlertConfirm";


export default function TabAlertConfirm () {


    const onClickConfirm = () => {
        AlertConfirm({
            title: '¿Estás seguro?',
            text: 'El registro seleccionado no se podrá volver a recuperar',
            type: 'warning',
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
            <button className="btn btn-primary" type="button" onClick={onClickConfirm}>Click me</button>

        </>
    )
}