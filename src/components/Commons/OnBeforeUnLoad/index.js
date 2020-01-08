import React, {useEffect, useRef} from 'react'
import {Prompt} from "react-router-dom";
import _ from 'lodash'

const OnBeforeUnLoad = ({
                            children, dataOld, dataNew, skipFields = [],
                            message = `Hay cambios sin guardar.\n¿Seguro que quiere salir de esta página?`
                        }) => {

    const _dataOld = useRef(null)
    const _dataNew = useRef(null)

    useEffect(() => {

        _dataOld.current = dataOld
        _dataNew.current = dataNew

    }, [dataOld, dataNew])

    useEffect(() => {
        window.addEventListener('beforeunload', function (e) {

            let status = isEqualObjects()
            if (!status) {
                // Hay cambios
                e.preventDefault();
                e.returnValue = '';
            }

        });

    }, [])

    const isEqualObjects = () => {

        // skip fields
        let obj_old = _.omit(_dataOld.current, skipFields)
        let obj_new = _.omit(_dataNew.current, skipFields)

        return _.isEqual(obj_old, obj_new)

    }

    return (
        <div>
            <Prompt when={!isEqualObjects()}
                    message={message}
            />
            {children}
        </div>
    )

}

export default OnBeforeUnLoad