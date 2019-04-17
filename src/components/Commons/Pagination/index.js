import React, {useState, useEffect} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleLeft, faAngleRight, faAngleDoubleLeft, faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons'


export default function Pagination({classPag, total, itemsPag, pag, onPagination}) {

    const [obj, setObj] = useState(null)

    useEffect(() => {

        getPaginador()

    }, [total, itemsPag, pag])


    const getPaginador = () => {

        let totalPages = Math.ceil(total / itemsPag);
        let startPage, endPage;
        if (totalPages <= 10) {
            startPage = 1;
            endPage = totalPages;
        } else {
            if (pag <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (pag + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = pag - 5;
                endPage = pag + 4;
            }
        }
        let pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);


        setObj({
            startPage: startPage,
            endPage: endPage,
            pages: pages,
            totalPages: totalPages
        });
    }

    if (obj) {
        return (
            <nav className={classPag}>
                <ul className="pagination pagination-sm mb-0">
                    <li className={`page-item ${pag === 1 ? 'disabled' : ''}`}>
                        <label className="page-link mb-0" onClick={(e) => {
                            e.preventDefault()
                            onPagination(1)
                        }}><FontAwesomeIcon icon={faAngleDoubleLeft}/></label>
                    </li>
                    <li className={`page-item ${pag === 1 ? 'disabled' : ''}`}>
                        <label className="page-link mb-0" onClick={(e) => {
                            e.preventDefault()
                            onPagination(pag - 1)
                        }}><FontAwesomeIcon icon={faAngleLeft}/></label>
                    </li>

                    {obj.pages.map((p, index) =>
                        <li key={index} className={pag === p ? 'page-item active' : 'page-item'}>
                            <label className="page-link mb-0" onClick={(e) => {
                                e.preventDefault()
                                onPagination(p)
                            }}>{p}</label>
                        </li>
                    )}

                    <li className={`page-item ${pag === obj.endPage ? 'disabled' : ''}`}>
                        <label className="page-link mb-0" onClick={(e) => {
                            e.preventDefault()
                            onPagination(pag + 1)
                        }}><FontAwesomeIcon icon={faAngleRight}/>
                        </label>
                    </li>
                    <li className={`page-item ${pag === obj.endPage ? 'disabled' : ''}`}>
                        <label className="page-link mb-0" onClick={(e) => {
                            e.preventDefault()
                            onPagination(obj.totalPages)
                        }}><FontAwesomeIcon icon={faAngleDoubleRight}/>
                        </label>
                    </li>
                </ul>
            </nav>
        )
    } else {
        return null
    }

}