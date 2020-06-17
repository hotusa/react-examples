import React from 'react'
import Modal from "react-bootstrap4-modal";
import {faTimes, faCheck, faPlus, faSave} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './modal.css'
import BlockUi from "react-block-ui";


export default function _Modal({children, className, show, options, disableConfirm = false, loading = false}) {


    return (
        <Modal className={className} dialogClassName={options && options.size ? 'modal-' + options.size : ''}
               visible={show} onClickBackdrop={() => {
            if (options && options.onBackdrop && !loading) options.onBackdrop('OUT')
        }}>

            {options && options.title ? <div className="modal-header">
                <h5 className="modal-title">{options && options.title}</h5>
                {options.onClose || options.onCancel ?
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"
                            onClick={() => {
                                if (options.onClose) {
                                    options.onClose('CLOSE')
                                } else if (options.onCancel) {
                                    options.onCancel('CANCEL')
                                }
                            }}>
                        <span aria-hidden="true">&times;</span>
                    </button> : null
                }
            </div> : null}
            <div className="modal-body">
                <BlockUi tag="div" blocking={loading} renderChildren={true}>
                    {children}
                </BlockUi>
            </div>
            {options && (options.onOk || options.onCancel) ? <div className="modal-footer" style={{display: 'block'}}>
                {options && options.footer && options.footer.textHtml ? <span className="float-left"
                                                                              dangerouslySetInnerHTML={{__html: options.footer.textHtml}}></span> : null}

                {options && options.onOk ?
                    <button type="button" disabled={disableConfirm || loading}
                            className={`float-right ml-1 btn btn-${options && options.colorOk ? options.colorOk : 'primary'} ${options && options.btSize ? 'btn-' + options.btSize : ''}`}
                            onClick={() => options.onOk('OK')}>
                        {options && options.iconButton ?
                            <FontAwesomeIcon className={"mr-1"}
                                             icon={options.iconOK === 'ok' ? faCheck : (options.iconOK === 'add' ? faPlus : (options.iconOK === 'update' ? faSave : (options.iconOK === '' || options.iconOK === undefined ? faCheck : options.iconOK)))}/> : null} {options && options.textOk ? options.textOk : 'Ok'}
                    </button> : null}

                {options && options.onCancel ?
                    <button type="button"
                            className={`float-right ml-1 btn btn-${options && options.colorCancel ? options.colorCancel : 'secondary'} ${options && options.btSize ? 'btn-' + options.btSize : ''}`}
                            onClick={() => options.onCancel('CANCEL')}>
                        {options && options.iconButton ?
                            <FontAwesomeIcon className={"mr-1"}
                                             icon={options.iconCancel === 'Cancel' ? faTimes : (options.iconCancel === '' || options.iconCancel === undefined ? faTimes : options.iconCancel)}/> : null} {options && options.textCancel ? options.textCancel : 'Cancel'}
                    </button> : null}

                {options && options.onOther ?
                    <button type="button" disabled={loading}
                            className={`float-right mr-1 btn btn-${options && options.colorOther ? options.colorOther : 'info'} ${options && options.btSize ? 'btn-' + options.btSize : ''}`}
                            onClick={() => options.onOther('Other')}>
                        {options && options.iconButton ?
                            <FontAwesomeIcon className={"mr-1"}
                                             icon={options.iconOther === 'ok' ? faCheck : (options.iconOther === 'add' ? faPlus : (options.iconOther === 'update' ? faSave : (options.iconOther === '' || options.iconOther === undefined ? faCheck : options.iconOther)))}/> : null} {options && options.textOther ? options.textOther : 'Ok'}
                    </button> : null}

            </div> : null}

        </Modal>
    )

}