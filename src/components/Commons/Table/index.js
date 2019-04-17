import React, {useState, useEffect} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCog, faSort, faTable} from '@fortawesome/free-solid-svg-icons'
import Pagination from "../Pagination";
import './styles.css'


export default function Table({className, header, body, pagination, options}) {


    const [dataHeader, setDataHeader] = useState([])
    const [dataOptions, setDataOptions] = useState({})


    useEffect(() => {

        if (header) {
            setDataHeader(header.map(item => ({key: item.key, value: item.value, order: 'asc'})))
        }

    }, [header])


    useEffect(() => {

        getInitialOptions()

    }, [options])

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
            callbacks: {
                onGet: options && options.callbacks && options.callbacks.onGet ? options.callbacks.onGet : undefined,
                onUpdate: options && options.callbacks && options.callbacks.onUpdate ? options.callbacks.onUpdate : undefined,
                onDelete: options && options.callbacks && options.callbacks.onDelete ? options.callbacks.onDelete : undefined,
                onHistorial: options && options.callbacks && options.callbacks.onHistorial ? options.callbacks.onHistorial : undefined,
                onOrder: options && options.callbacks && options.callbacks.onOrder ? options.callbacks.onOrder : undefined,
                onExport: options && options.callbacks && options.callbacks.onExport ? options.callbacks.onExport : undefined
            },
            leyendas: options && options.leyendas ? options.leyendas : [],
            onColorRow: options && options.onColorRow ? options.onColorRow : undefined,
            onFormatCell: options && options.onFormatCell ? options.onFormatCell : undefined
        }

        setDataOptions(_options)

    }


    const optionsItem = (item, index) => {
        return (
            <div className="dropdown actions">
                <button className="btn btn-secondary btn-sm" type="button" id="dropdownMenuButton"
                        data-toggle="dropdown">
                    <FontAwesomeIcon icon={faCog}/>
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                    {dataOptions.actions.indexOf('get') > -1 ? <button className={`dropdown-item ${dataOptions.callbacks.onGet ? '':'disabled'}`} onClick={()=> dataOptions.callbacks.onGet(item, index)}>Seleccionar</button> : null}
                    {dataOptions.actions.indexOf('update') > -1 ? <button className={`dropdown-item ${dataOptions.callbacks.onUpdate ? '':'disabled'}`} onClick={()=> dataOptions.callbacks.onUpdate(item, index)}>Editar</button> : null}
                    {dataOptions.actions.indexOf('delete') > -1 ? <button className={`dropdown-item ${dataOptions.callbacks.onDelete ? '':'disabled'}`} onClick={()=> dataOptions.callbacks.onDelete(item, index)}>Borrar</button> : null}
                    {dataOptions.actions.indexOf('historial') > -1 ? <button className={`dropdown-item ${dataOptions.callbacks.onHistorial ? '':'disabled'}`} onClick={()=> dataOptions.callbacks.onHistorial(item, index)}>Historial cambios</button> : null}
                </div>
            </div>
        )
    }


    const setOrder = (item) => {
        item.order = item.order === 'asc' ? 'desc' : 'asc'
        dataOptions.callbacks.onOrder(item)
    }

    const getClassTable = () => {

        let classname = 'table'
        if (dataOptions && dataOptions.table) {

            if (dataOptions.table.align) classname += ' text-'+dataOptions.table.align
            if (dataOptions.table.size) classname += ' table-'+dataOptions.table.size
            if (dataOptions.table.color) classname += ' table-'+dataOptions.table.color
            if (dataOptions.table.striped) classname += ' table-striped'
            if (dataOptions.table.bordered) classname += ' table-bordered'
            if (dataOptions.table.borderless) classname += ' table-borderless'
            if (dataOptions.table.hover) classname += ' table-hover'

        }

        if (className) classname += ' ' + className

        return classname
    }

    const getClassThead = () => {

        let classname = ''
        if (dataOptions && dataOptions.thead) {

            if (dataOptions.thead.color) classname += ' thead-'+dataOptions.thead.color

        }
        return classname
    }


    const getColorRow = (item) => {

        if (dataOptions.onColorRow) return dataOptions.onColorRow(item)
        else return ''

    }

    const getFormatCell = (item, key) => {
        if (dataOptions.onFormatCell) return dataOptions.onFormatCell(item, key)
        return item[key]
    }


    if (dataHeader.length > 0) {
        return (
            <div className="table-responsive">
                <table className={getClassTable()}>
                    <thead>
                    <tr>
                        <th className="p-2" colSpan={dataHeader.length + (dataOptions.actions.length > 0 ? 1 : 0)}>
                            {body.length === 0 ? <span className="float-left">{dataOptions.thead.textNone}</span> : null}
                            {body.length === 1 ? <span className="float-left">{dataOptions.thead.textOnly.replace('{X}', body.length)}</span> : null}
                            {body.length > 1 ? <span className="float-left">{dataOptions.thead.textMore.replace('{X}', body.length)}</span> : null}
                            {dataOptions.actions.indexOf('export') > -1 && body.length > 0 ? <button disabled={!dataOptions.callbacks.onExport} onClick={()=> dataOptions.callbacks.onExport() } className="btn btn-sm btn-primary float-right"><FontAwesomeIcon icon={faTable} className={"mr-1"} /> Exportar</button> : null}
                        </th>
                    </tr>
                    </thead>
                    <thead className={getClassThead()}>
                    <tr>
                        {dataHeader.map((e, i) => {
                            if (dataOptions.callbacks.onOrder) return <th key={i} onClick={()=> setOrder(e)}><FontAwesomeIcon icon={faSort} className={"mr-1"}/>{e.value}</th>
                            else return <th key={i}>{e.value}</th>
                        })}
                        {dataOptions.actions.length > 0 ? <th width="1"/> : null}
                    </tr>
                    </thead>
                    <tbody>
                    {body.map((b,i)=>{
                        return (
                            <tr key={i} style={{backgroundColor: getColorRow(b)}}>
                                {dataHeader.map((h, j) => {
                                    if (j === 0 && dataOptions.callbacks.onGet) return <td key={j}><span style={{cursor: 'pointer'}} className="text-primary" onClick={()=> dataOptions.callbacks.onGet(b, i)}>{getFormatCell(b, h.key)}</span></td>
                                    else return <td key={j}>{getFormatCell(b, h.key)}</td>
                                })}
                                {dataOptions.actions.length > 0 ? <td width="1">{optionsItem(b, i)}</td> : null}
                            </tr>
                        )
                    })}
                    </tbody>
                    {dataOptions.leyendas > 0 || pagination ?
                    <tfoot>
                    <tr>
                        <td className="px-2 py-2" colSpan={dataHeader.length + (dataOptions.actions.length > 0 ? 1 : 0)}>
                            <div className="row m-0">
                                <div className="col-6 p-0 leyendas d-flex align-items-center">
                                    {dataOptions.leyendas.map( (leyenda,l) => {
                                        return (
                                            <table className={"mr-2"} key={l} style={{border: 0}}>
                                                <tbody>
                                                <tr>
                                                    <td><span style={{display:'inline-block', width:'20px', height:'20px', backgroundColor:leyenda.color }}></span></td><td>{leyenda.text}</td>
                                                </tr>
                                                </tbody>
                                            </table>)
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
        )
    } else {
        return null
    }
}