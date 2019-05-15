import React from 'react'
import Modal from "react-bootstrap4-modal";
import {faTimes, faCheck, faPlus, faSave} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export default function _Modal({children, className, show, options}) {


    return (
        <Modal className={className} dialogClassName={options && options.size ? 'modal-' + options.size : ''}
               visible={show} onClickBackdrop={() => {
            if (options && options.onBackdrop) options.onBackdrop('OUT')
        }}>
            {options && options.title ? <div className="modal-header">
                <h5 className="modal-title">{options && options.title}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => options.onCancel('CANCEL')}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div> : null}
            <div className="modal-body">
                {children}
            </div>
            {options && (options.onOk || options.onCancel) ? <div className="modal-footer">
                {options && options.onCancel ?
                    <button type="button" className={`btn btn-secondary ${options && options.btSize ? 'btn-' + options.btSize : ''}`} onClick={() => options.onCancel('CANCEL')}>
                        {options && options.iconButton ?
                            <FontAwesomeIcon className={"mr-1"} icon={faTimes}/> : null} {options && options.textOk ? options.textCancel : 'Cancel'}
                    </button> : null}
                {options && options.onOk ?
                    <button type="button" className={`btn btn-primary ${options && options.btSize ? 'btn-' + options.btSize : ''}`} onClick={() => options.onOk('OK')}>
                        {options && options.iconButton ?
                        <FontAwesomeIcon className={"mr-1"} icon={options.iconOK === 'ok' ? faCheck : (options.iconOK==='add' ? faPlus : (options.iconOK==='update' ? faSave : faCheck))}/> : null} {options && options.textOk ? options.textOk : 'Ok'}
                    </button> : null}
            </div> : null}
        </Modal>
    )

}