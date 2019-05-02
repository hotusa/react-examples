import React from 'react'
import Modal from "react-bootstrap4-modal";


export default function _Modal({children, className, show, options}) {


    return (
        <Modal className={className} dialogClassName={options && options.size ? 'modal-' + options.size : ''}
               visible={show} onClickBackdrop={() => {
            if (options && options.onBackdrop) options.onBackdrop('OUT')
        }}>
            {options && options.title ? <div className="modal-header">
                <h5 className="modal-title">{options && options.title}</h5>
            </div> : null}
            <div className="modal-body">
                {children}
            </div>
            {options && (options.onOk || options.onCancel) ? <div className="modal-footer">
                {options && options.onOk ?
                    <button type="button" className={`btn btn-primary ${options && options.btSize ? 'btn-' + options.btSize : ''}`} onClick={() => options.onOk('OK')}>
                        {options && options.textOk ? options.textOk : 'Ok'}
                    </button> : null}
                {options && options.onCancel ?
                    <button type="button" className={`btn btn-secondary ${options && options.btSize ? 'btn-' + options.btSize : ''}`} onClick={() => options.onCancel('CANCEL')}>
                        {options && options.textOk ? options.textCancel : 'Cancel'}
                    </button> : null}
            </div> : null}
        </Modal>
    )

}