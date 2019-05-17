import React, {useState, useEffect} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCog, faSort, faTable, faColumns, faPlus} from '@fortawesome/free-solid-svg-icons'
import Pagination from "../Pagination";
import Modal from "../Modal"


export default function Table({className, header, visible, body, pagination, options}) {


    const [dataHeader, setDataHeader] = useState([])
    const [dataOptions, setDataOptions] = useState({})
    const [showModalColumns, setShowModalColumns] = useState(false)
    const [checkColumnVisible, setCheckColumnVisible] = useState([])


    useEffect(() => {
        if (header) {
            setDataHeader(header.map(item => ({
                key: item.key,
                value: item.value,
                className: item.className,
                order: 'asc'
            })))
        }
    }, [header])


    useEffect(() => {

        getInitialOptions()

    }, [options])


    useEffect(() => {
        if (visible) {
            setCheckColumnVisible(visible.cols)
        }

    }, [visible])

    /* config options */
    const getInitialOptions = () => {

        let _options = {
            table: {
                align: options && options.table && options.table.align ? options.table.align : 'center',
                size: options && options.table && options.table.size ? options.table.size : 'sm',
                color: options && options.table && options.table.color ? options.table.color : '',
                striped: options && options.table && options.table.striped ? options.table.striped : false,
                bordered: options && options.table && options.table.bordered ? options.table.bordered : true,
                borderless: options && options.table && options.table.borderless ? options.table.borderless : false,
                hover: options && options.table && options.table.hover ? options.table.hover : false
            },
            thead: {
                textNone: options && options.thead && options.thead.textNone ? options.thead.textNone : 'No se ha encontrado registros',
                textOnly: options && options.thead && options.thead.textOnly ? options.thead.textOnly : 'Se ha encontrado {X} registro',
                textMore: options && options.thead && options.thead.textMore ? options.thead.textMore : 'Se ha encontrado {X} registros',
                color: options && options.thead && options.thead.color ? options.thead.color : 'light'
            },
            actions: options && options.actions ? options.actions : [], //'get', 'update', 'delete', 'historial', 'export'
            textActions: options && options.textActions ? options.textActions : {},
                callbacks: {
                onGet: options && options.callbacks && options.callbacks.onGet ? options.callbacks.onGet : undefined,
                onUpdate: options && options.callbacks && options.callbacks.onUpdate ? options.callbacks.onUpdate : undefined,
                onDelete: options && options.callbacks && options.callbacks.onDelete ? options.callbacks.onDelete : undefined,
                onHistorial: options && options.callbacks && options.callbacks.onHistorial ? options.callbacks.onHistorial : undefined,
                onOrder: options && options.callbacks && options.callbacks.onOrder ? options.callbacks.onOrder : undefined,
                onExport: options && options.callbacks && options.callbacks.onExport ? options.callbacks.onExport : undefined,
                onCreate: options && options.callbacks && options.callbacks.onCreate ? options.callbacks.onCreate : undefined,
            },
            leyendas: options && options.leyendas ? options.leyendas : [],
            onColorRow: options && options.onColorRow ? options.onColorRow : undefined,
            onFormatCell: options && options.onFormatCell ? options.onFormatCell : undefined,
            onFormatCellAction: options && options.onFormatCellAction ? options.onFormatCellAction : undefined
        }

        setDataOptions(_options)

    }

    /* actions */
    const optionsItem = (item, index) => {
        return (
            <div className="dropdown actions">
                <button className="btn btn-secondary btn-sm" type="button" id="dropdownMenuButton"
                        data-toggle="dropdown">
                    <FontAwesomeIcon icon={faCog}/>
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                    {dataOptions.actions.indexOf('get') > -1 && (dataOptions.onFormatCellAction === undefined || dataOptions.onFormatCellAction(item, index, 'get') ) ?
                        <button className={`dropdown-item ${dataOptions.callbacks.onGet ? '' : 'disabled'}`}
                                onClick={() => dataOptions.callbacks.onGet(item, index)}>{dataOptions.textActions.get || 'Seleccionar'}</button> : null}
                    {dataOptions.actions.indexOf('update') > -1 && (dataOptions.onFormatCellAction === undefined || dataOptions.onFormatCellAction(item, index, 'update') ) ?
                        <button className={`dropdown-item ${dataOptions.callbacks.onUpdate ? '' : 'disabled'}`}
                                onClick={() => dataOptions.callbacks.onUpdate(item, index)}>{dataOptions.textActions.update || 'Editar'}</button> : null}
                    {dataOptions.actions.indexOf('delete') > -1 && (dataOptions.onFormatCellAction === undefined || dataOptions.onFormatCellAction(item, index, 'delete') ) ?
                        <button className={`dropdown-item ${dataOptions.callbacks.onDelete ? '' : 'disabled'}`}
                                onClick={() => dataOptions.callbacks.onDelete(item, index)}>{dataOptions.textActions.delete || 'Borrar'}</button> : null}
                    {dataOptions.actions.indexOf('historial') > -1 && (dataOptions.onFormatCellAction === undefined || dataOptions.onFormatCellAction(item, index, 'historial') ) ?
                        <button className={`dropdown-item ${dataOptions.callbacks.onHistorial ? '' : 'disabled'}`}
                                onClick={() => dataOptions.callbacks.onHistorial(item, index)}>{dataOptions.textActions.historial || 'Historial cambios'}</button> : null}
                </div>
            </div>
        )
    }

    /* order column */
    const setOrder = (item) => {
        item.order = item.order === 'asc' ? 'desc' : 'asc'
        dataOptions.callbacks.onOrder(item)
    }

    /* custom class table */
    const getClassTable = () => {

        let classname = 'table'
        if (dataOptions && dataOptions.table) {

            if (dataOptions.table.align) classname += ' text-' + dataOptions.table.align
            if (dataOptions.table.size) classname += ' table-' + dataOptions.table.size
            if (dataOptions.table.color) classname += ' table-' + dataOptions.table.color
            if (dataOptions.table.striped) classname += ' table-striped'
            if (dataOptions.table.bordered) classname += ' table-bordered'
            if (dataOptions.table.borderless) classname += ' table-borderless'
            if (dataOptions.table.hover) classname += ' table-hover'

        }

        if (className) classname += ' ' + className

        return classname
    }

    /* custom class thead */
    const getClassThead = () => {

        let classname = ''
        if (dataOptions && dataOptions.thead) {

            if (dataOptions.thead.color) classname += ' thead-' + dataOptions.thead.color

        }
        return classname
    }

    /* set color row */
    const getColorRow = (item) => {

        if (dataOptions.onColorRow) return dataOptions.onColorRow(item)
        else return ''

    }

    /* set format cell value */
    const getFormatCell = (item, key) => {
        if (dataOptions.onFormatCell) return dataOptions.onFormatCell(item, key)
        return item[key]
    }

    /* select checkbox columns visible */
    const onChangeCheckVisibleCol = (e) => {

        let key = e.target.name
        let isChecked = e.target.checked
        let found = checkColumnVisible.find(col => col === key)

        if (isChecked && !found) {
            /* agregar */
            let array = Object.assign([], checkColumnVisible)
            array.push(key);
            setCheckColumnVisible(array)
        } else {
            /* sacar de la lista */
            let array = Object.assign([], checkColumnVisible)
            array = array.filter(col => col !== key)
            setCheckColumnVisible(array)
        }


    }

    /* set columns visible */
    const onOkModalColumn = () => {
        setShowModalColumns(false)
        visible.onVisible(checkColumnVisible)
    }


    let totalResultados = pagination ? pagination.total : body.length

    if (dataHeader.length > 0) {
        return (
            <div>
                <div className="table-responsive">
                    <table className={getClassTable()}>
                        <thead style={{backgroundColor: '#ffffff'}}>
                        <tr>
                            <th className="py-2 px-3" colSpan={dataHeader.length + (dataOptions.actions.length > 0 ? 1 : 0)}>
                                <div className="d-flex align-items-center justify-content-between">
                                {totalResultados === 0 ?
                                    <span>{dataOptions.thead.textNone}</span> : null
                                }
                                {totalResultados === 1 ?
                                    <span>{dataOptions.thead.textOnly.replace('{X}', totalResultados)}</span> : null
                                }
                                {totalResultados > 1 ?
                                    <span>{dataOptions.thead.textMore.replace('{X}', totalResultados)}</span> : null
                                }
                                    <div>
                                    {
                                        /* visibilidad columnas */
                                        visible && visible.show ?
                                            <button
                                                className="btn btn-sm btn-primary ml-1"
                                                onClick={() => setShowModalColumns(true)}>
                                                <FontAwesomeIcon icon={faColumns}/>
                                            </button> : null
                                    }
                                    {
                                        /* crear */
                                        dataOptions.actions.indexOf('create') > -1 ?
                                            <button
                                                disabled={!dataOptions.callbacks.onCreate}
                                                onClick={() => dataOptions.callbacks.onCreate()}
                                                className="btn btn-sm btn-primary ml-1">
                                                <FontAwesomeIcon icon={faPlus} className={"mr-1"}/>{dataOptions.textActions.create || 'Crear'}
                                            </button> : null
                                    }
                                    {
                                        /* exportar */
                                        dataOptions.actions.indexOf('export') > -1 && totalResultados > 0 ?
                                            <button
                                                disabled={!dataOptions.callbacks.onExport}
                                                onClick={() => dataOptions.callbacks.onExport()}
                                                className="btn btn-sm btn-primary ml-1">
                                                <FontAwesomeIcon icon={faTable} className={"mr-1"}/> {dataOptions.textActions.export || 'Exportar'}
                                            </button> : null
                                    }
                                    </div>
                                </div>
                            </th>
                        </tr>
                        </thead>
                        <thead className={getClassThead()}>
                        <tr>
                            {dataHeader.map((e, i) => {
                                if (checkColumnVisible.length > 0) {

                                    return checkColumnVisible.map(col => {
                                        if (col === e.key) {
                                            if (dataOptions.callbacks.onOrder) {
                                                return (<th className={e.className || ''} key={i}
                                                            onClick={() => setOrder(e)}><FontAwesomeIcon
                                                    icon={faSort} className={"mr-1"}/>{e.value}</th>)
                                            }
                                            else {
                                                return <th className={e.className || ''} key={i}>{e.value}</th>
                                            }
                                        }
                                    })
                                } else {
                                    if (dataOptions.callbacks.onOrder) {
                                        return (<th className={e.className || ''} key={i} onClick={() => setOrder(e)}>
                                            <FontAwesomeIcon
                                                icon={faSort} className={"mr-1"}/>{e.value}</th>)
                                    }
                                    else {
                                        return <th className={e.className || ''} key={i}>{e.value}</th>
                                    }
                                }


                            })}
                            {dataOptions.actions.length > 0 ? <th width="1"/> : null}
                        </tr>
                        </thead>
                        <tbody style={{backgroundColor: '#ffffff'}}>
                        {body.map((b, i) => {
                            return (
                                <tr key={i} style={{backgroundColor: getColorRow(b)}}>
                                    {dataHeader.map((h, j) => {

                                        if (checkColumnVisible.length > 0) {
                                            return checkColumnVisible.map(col => {
                                                if (col === h.key) {
                                                    if (j === 0 && dataOptions.callbacks.onGet) return <td key={j}><span
                                                        style={{cursor: 'pointer'}} className="text-primary"
                                                        onClick={() => dataOptions.callbacks.onGet(b, i)}>{getFormatCell(b, h.key)}</span>
                                                    </td>
                                                    else return <td key={j}>{getFormatCell(b, h.key)}</td>
                                                }
                                            })
                                        } else {
                                            if (j === 0 && dataOptions.callbacks.onGet) return <td key={j}><span
                                                style={{cursor: 'pointer'}} className="text-primary"
                                                onClick={() => dataOptions.callbacks.onGet(b, i)}>{getFormatCell(b, h.key)}</span>
                                            </td>
                                            else return <td key={j}>{getFormatCell(b, h.key)}</td>
                                        }


                                    })}
                                    {dataOptions.actions.length > 1 || (dataOptions.actions.length === 1 && dataOptions.actions.indexOf('export') === -1) ?
                                        <td width="1" className="px-2">{optionsItem(b, i)}</td> : null}
                                </tr>
                            )
                        })}
                        </tbody>
                        {dataOptions.leyendas > 0 || pagination ?
                            <tfoot style={{backgroundColor: '#ffffff'}}>
                            <tr>
                                <td className="px-2 py-2"
                                    colSpan={dataHeader.length + (dataOptions.actions.length > 0 ? 1 : 0)}>
                                    <div className="row m-0">
                                        <div className="col-6 p-0 text-left leyendas">
                                            {dataOptions.leyendas.map((leyenda, l) => {
                                                return (
                                                    <span key={l} className="mr-3">
                                                        {
                                                            leyenda.color ?
                                                                <span style={{
                                                                    display: 'inline-block',
                                                                    width: '20px',
                                                                    height: '20px',
                                                                    backgroundColor: leyenda.color
                                                                }}></span> : null
                                                        }
                                                        <span className="ml-1"
                                                              style={{verticalAlign: 'text-bottom'}}>{leyenda.text}</span>
                                                    </span>
                                                )
                                            })}
                                        </div>
                                        <div className="col-6 p-0 d-flex align-items-center justify-content-end">
                                            {pagination ?
                                                <Pagination
                                                    classPag="miPagination float-right"
                                                    total={pagination.total}
                                                    itemsPag={pagination.itemsPag}
                                                    pag={pagination.pag}
                                                    onPagination={pagination.onPagination}/> : null}
                                        </div>
                                    </div>

                                </td>
                            </tr>
                            </tfoot> : null}
                    </table>
                </div>

                <Modal show={showModalColumns} options={{title: 'Visibilidad columnas', onOk: onOkModalColumn}}>

                    {dataHeader.map((item, i) => {

                        let found = checkColumnVisible.find(col => col === item.key)

                        return (
                            <div key={i} className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id={`inlineCheckbox${i}`}
                                    value={item.key}
                                    name={item.key}
                                    checked={found || false}
                                    onChange={(e) => onChangeCheckVisibleCol(e)}/>
                                <label className="form-check-label" htmlFor={`inlineCheckbox${i}`}>{item.value}</label>
                            </div>
                        )

                    })}

                </Modal>

            </div>
        )
    } else {
        return null
    }
}