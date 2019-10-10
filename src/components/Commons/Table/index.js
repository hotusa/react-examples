import React, {useState, useEffect} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCog, faSortDown, faSortUp, faSort, faTable, faColumns, faPlus, faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import Pagination from "../Pagination";
import Modal from "../Modal"
import BlockUi from 'react-block-ui';
import { Loader } from 'react-loaders';
import 'react-block-ui/style.css';
import 'loaders.css/loaders.min.css';


export default function Table({className, header, visible, body, pagination, order, options, loading}) {


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
                order: item.order || ''
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
                align: options && options.table && options.table.align ? options.table.align : 'left',
                size: options && options.table && options.table.size ? options.table.size : 'sm',
                color: options && options.table && options.table.color ? options.table.color : '',
                striped: options && options.table && options.table.striped ? options.table.striped : false,
                bordered: options && options.table && options.table.bordered ? options.table.bordered : true,
                borderless: options && options.table && options.table.borderless ? options.table.borderless : false,
                hover: options && options.table && options.table.hover ? options.table.hover : false
            },
            thead: {
                showHeaderResultados: options && options.thead && options.thead.showHeaderResultados !== undefined ? ((options && options.thead && options.thead.showHeaderResultados)) : true,
                showHeaderCabecera: options && options.thead && options.thead.showHeaderCabecera !== undefined ? ((options && options.thead && options.thead.showHeaderCabecera)) : true,
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

        if (dataOptions.actions.length === 1 && dataOptions.actions.indexOf('delete') > -1) {
            return (
                <button type="button" className={`btn btn-secondary btn-sm ${dataOptions.callbacks.onDelete ? '' : 'disabled'}`}
                        onClick={() => dataOptions.callbacks.onDelete(item, index)}><FontAwesomeIcon icon={faTrashAlt}/>
                </button>
            )
        } else {

            return (
                <div className="dropdown actions">
                    <button className="btn btn-secondary btn-sm" type="button" id="dropdownMenuButton"
                            data-toggle="dropdown">
                        <FontAwesomeIcon icon={faCog}/>
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                        {dataOptions.actions.indexOf('get') > -1 && (dataOptions.onFormatCellAction === undefined || dataOptions.onFormatCellAction(item, index, 'get')) ?
                            <button className={`dropdown-item ${dataOptions.callbacks.onGet ? '' : 'disabled'}`}
                                    onClick={() => dataOptions.callbacks.onGet(item, index)}>{dataOptions.textActions.get || 'Seleccionar'}</button> : null}
                        {dataOptions.actions.indexOf('update') > -1 && (dataOptions.onFormatCellAction === undefined || dataOptions.onFormatCellAction(item, index, 'update')) ?
                            <button className={`dropdown-item ${dataOptions.callbacks.onUpdate ? '' : 'disabled'}`}
                                    onClick={() => dataOptions.callbacks.onUpdate(item, index)}>{dataOptions.textActions.update || 'Editar'}</button> : null}
                        {dataOptions.actions.indexOf('delete') > -1 && (dataOptions.onFormatCellAction === undefined || dataOptions.onFormatCellAction(item, index, 'delete')) ?
                            <button className={`dropdown-item ${dataOptions.callbacks.onDelete ? '' : 'disabled'}`}
                                    onClick={() => dataOptions.callbacks.onDelete(item, index)}>{dataOptions.textActions.delete || 'Borrar'}</button> : null}
                        {dataOptions.actions.indexOf('historial') > -1 && (dataOptions.onFormatCellAction === undefined || dataOptions.onFormatCellAction(item, index, 'historial')) ?
                            <button className={`dropdown-item ${dataOptions.callbacks.onHistorial ? '' : 'disabled'}`}
                                    onClick={() => dataOptions.callbacks.onHistorial(item, index)}>{dataOptions.textActions.historial || 'Historial cambios'}</button> : null}
                    </div>
                </div>
            )
        }
    }

    /* order column */
    const setOrder = (item) => {
        item.order = item.order === 'asc' ? 'desc' : 'asc'

        let tmp = dataHeader.map(o => {
            if (o.key === item.key) {
                return item
            } else {
                return {
                    key: o.key,
                    value: o.value,
                    className: o.className,
                    order: ''
                }
            }
        })
        setDataHeader(tmp)
        dataOptions.callbacks.onOrder(item)
    }

    /* custom class table */
    const getClassTable = () => {

        let classname = 'table'
        if (dataOptions && dataOptions.table) {

            //if (dataOptions.table.align) classname += ' text-' + dataOptions.table.align
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

    /* custom class td */
    const getClassTd = (key) => {

        let col = dataHeader.find((item) => {
            return item.key === key
        })

        if (col && col.className) {
            return col.className
        }

        return ''
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


    /* show button actions row */
    const IsIconActions = (actions) => {
        if (actions.length === 0) {
            return false
        } else if (actions.length === 1 && actions.indexOf('export') !== -1) {
            return false
        } else if (actions.length === 1 && actions.indexOf('create') !== -1) {
            return false
        } else if (actions.length === 2 && actions.indexOf('export') !== -1 && actions.indexOf('create') !== -1) {
            return false
        } else {
            return true
        }
    }

    /* custom order column */
    const getHeadColumn = (e, i) => {

        let showOrder = false

        if (dataOptions.callbacks.onOrder) {
            if (order && order.cols) {

                showOrder = order.cols.find(col => col === e.key)

            } else {
                showOrder = true
            }
        }

        if (showOrder) {
            return (<th className={e.className || ''} key={i}
                        onClick={() => setOrder(e)} style={{cursor: 'pointer'}}>
                <FontAwesomeIcon
                    icon={e.order === 'asc' ? faSortUp : e.order === 'desc' ? faSortDown : faSort}
                    className={"mr-1"}/>{e.value}</th>)
        } else {
            return <th className={e.className || ''} key={i}>{e.value}</th>
        }

    }

    let totalResultados = pagination ? pagination.total : body.length


    if (dataHeader.length > 0) {
        return (
            <div>
                <div className="table-responsive">
                    <BlockUi tag="div"
                             blocking={loading ? loading.show || false : false}
                             renderChildren={loading ? loading.renderChildren || false : false}
                             loader={<Loader active type={loading ? loading.type || 'ball-pulse' : 'ball-pulse'} color={loading ? loading.color || '#02a17c' : '#02a17c'}/>}
                             keepInView>
                        <table className={getClassTable()}>

                            {dataOptions.thead.showHeaderResultados ?
                            <thead style={{backgroundColor: '#ffffff'}}>
                            <tr>
                                <th className="py-2 px-3"
                                    colSpan={dataHeader.length + (IsIconActions(dataOptions.actions) ? 1 : 0)}>
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
                                                /* exportar */
                                                dataOptions.actions.indexOf('export') > -1 && totalResultados > 0 ?
                                                    <button
                                                        disabled={!dataOptions.callbacks.onExport}
                                                        onClick={() => dataOptions.callbacks.onExport()}
                                                        className="btn btn-sm btn-primary ml-1">
                                                        <FontAwesomeIcon icon={faTable}
                                                                         className={"mr-1"}/> {dataOptions.textActions.export || 'Exportar'}
                                                    </button> : null
                                            }
                                            {
                                                /* crear */
                                                dataOptions.actions.indexOf('create') > -1 ?
                                                    <button
                                                        disabled={!dataOptions.callbacks.onCreate}
                                                        onClick={() => dataOptions.callbacks.onCreate()}
                                                        className="btn btn-sm btn-primary ml-1">
                                                        <FontAwesomeIcon icon={faPlus}
                                                                         className={"mr-1"}/>{dataOptions.textActions.create || 'Crear'}
                                                    </button> : null
                                            }
                                        </div>
                                    </div>
                                </th>
                            </tr>
                            </thead> : null}

                            {dataOptions.thead.showHeaderCabecera ?
                            <thead className={getClassThead()}>
                            <tr>
                                {dataHeader.map((e, i) => {
                                    if (checkColumnVisible.length > 0) {

                                        return checkColumnVisible.map(col => {
                                            if (col === e.key) {
                                                return getHeadColumn(e, i)
                                            } else return null
                                        })
                                    } else {
                                        return getHeadColumn(e, i)
                                    }


                                })}
                                {IsIconActions(dataOptions.actions) ? <th width="1"/> : null}
                            </tr>
                            </thead> : null}

                            <tbody style={{backgroundColor: '#ffffff'}}>
                            {body.map((b, i) => {
                                return (
                                    <tr key={i} style={{backgroundColor: getColorRow(b)}}>
                                        {dataHeader.map((h, j) => {

                                            if (checkColumnVisible.length > 0) {
                                                return checkColumnVisible.map(col => {
                                                    if (col === h.key) {
                                                        if (j === 0 && dataOptions.callbacks.onGet) return <td key={j}
                                                                                                               className={getClassTd(h.key)}
                                                                                                               style={{verticalAlign: 'middle'}}><span
                                                            style={{cursor: 'pointer'}} className={`text-primary`}
                                                            onClick={() => dataOptions.callbacks.onGet(b, i)}>{getFormatCell(b, h.key)}</span>
                                                        </td>
                                                        else return <td key={j} className={getClassTd(h.key)}
                                                                        style={{verticalAlign: 'middle'}}>{getFormatCell(b, h.key)}</td>
                                                    } else return null
                                                })
                                            } else {
                                                if (j === 0 && dataOptions.callbacks.onGet) return <td key={j}
                                                                                                       className={getClassTd(h.key)}
                                                                                                       style={{verticalAlign: 'middle'}}><span
                                                    style={{cursor: 'pointer'}} className={`text-primary`}
                                                    onClick={() => dataOptions.callbacks.onGet(b, i)}>{getFormatCell(b, h.key)}</span>
                                                </td>
                                                else return <td key={j} className={getClassTd(h.key)}
                                                                style={{verticalAlign: 'middle'}}>{getFormatCell(b, h.key)}</td>
                                            }


                                        })}
                                        {IsIconActions(dataOptions.actions) ?
                                            <td width="1" className="px-2">{optionsItem(b, i)}</td> : null}
                                    </tr>
                                )
                            })}
                            </tbody>
                            {(dataOptions.leyendas && dataOptions.leyendas.length > 0) || (pagination && pagination.total > pagination.itemsPag) ?
                                <tfoot style={{backgroundColor: '#ffffff'}}>
                                <tr>
                                    <td className="px-2 py-2"
                                        colSpan={dataHeader.length + (IsIconActions(dataOptions.actions) ? 1 : 0)}>
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
                                                {pagination && pagination.total > pagination.itemsPag ?
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
                    </BlockUi>
                </div>

                <Modal show={showModalColumns} options={{title: 'Visibilidad columnas', onOk: onOkModalColumn, size: 'lg'}}>


                    <div className="row">
                    {dataHeader.map((item, i) => {

                        let found = checkColumnVisible.find(col => col === item.key)

                        return (
                            <div key={i} className="col-sm-2">
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id={`inlineCheckbox${i}`}
                                    value={item.key}
                                    name={item.key}
                                    checked={found || false}
                                    onChange={(e) => onChangeCheckVisibleCol(e)}/>
                                <label className="form-check-label text-capitalize" htmlFor={`inlineCheckbox${i}`}>{item.value.toLowerCase()}</label>
                            </div>
                            </div>
                        )

                    })}
                    </div>
                </Modal>

            </div>
        )
    } else {
        return null
    }
}