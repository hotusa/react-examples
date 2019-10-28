import React, {useEffect} from 'react'
import $ from 'jquery'

export default function Modal2 ({children, show, className, options, disableConfirm, id}) {

    /*const options = {
        title: 'Modal title',
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
    }*/



    useEffect(()=>{

        if (show && id) {
            $('#'+id).modal({
                show: true
            })
        } else {
            $('#'+id).modal('hide')
        }

    }, [show])



    return (
        <div className={`modal fade ${className || ''}`} id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{options && options.title || ''}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={()=>options.onCancel('CANCEL')}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={()=>options.onCancel('CANCEL')}>Close</button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            disabled={disableConfirm} onClick={()=>options.onOk('OK')}>Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}