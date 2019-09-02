import React from 'react'
import Modal from "react-bootstrap4-modal";
import {faTimes, faCheck, faPlus, faSave} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export default function _Modal({children, className, show, options, disableConfirm}) {


    return (
        <Modal className={className} dialogClassName={options && options.size ? 'modal-' + options.size : ''}
               visible={show} onClickBackdrop={() => {
            if (options && options.onBackdrop) options.onBackdrop('OUT')
        }}>
            {options && options.title ? <div className="modal-header">
                <h5 className="modal-title">{options && options.title}</h5>
                {options.onCancel ?
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => options.onCancel('CANCEL')}>
                        <span aria-hidden="true">&times;</span>
                    </button> : null
                }
            </div> : null}
            <div className="modal-body">
                {children}
            </div>
            {options && (options.onOk || options.onCancel) ? <div className="modal-footer" style={{display: 'block'}}>
                {options && options.footer && options.footer.textHtml ? <span className="float-left" dangerouslySetInnerHTML={{__html: options.footer.textHtml}}></span> : null}
                {options && options.onCancel ?
                    <button type="button" className={`float-right ml-1 btn btn-secondary ${options && options.btSize ? 'btn-' + options.btSize : ''}`} onClick={() => options.onCancel('CANCEL')}>
                        {options && options.iconButton ?
                            <FontAwesomeIcon className={"mr-1"} icon={faTimes}/> : null} {options && options.textCancel ? options.textCancel : 'Cancel'}
                    </button> : null}
                {options && options.onOk ?
                    <button type="button" disabled={disableConfirm || false} className={`float-right ml-1 btn btn-primary ${options && options.btSize ? 'btn-' + options.btSize : ''}`} onClick={() => options.onOk('OK')}>
                        {options && options.iconButton ?
                            <FontAwesomeIcon className={"mr-1"} icon={options.iconOK === 'ok' ? faCheck : (options.iconOK==='add' ? faPlus : (options.iconOK==='update' ? faSave : faCheck))}/> : null} {options && options.textOk ? options.textOk : 'Ok'}
                    </button> : null}
            </div> : null}
        </Modal>
    )

}