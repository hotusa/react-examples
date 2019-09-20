import React from 'react'
import TabLogin from "./Tabs/TabLogin";
import TabNotification from "./Tabs/TabNotification";
import TabAlertConfirm from "./Tabs/TabAlertConfirm";
import TabPagination from "./Tabs/TabPagination";
import TabTable from "./Tabs/TabTable";
import TabModal from "./Tabs/TabModal";
import TabTypeahead from "./Tabs/TabTypeahead";
import TabSelect from "./Tabs/TabSelect";
import TabForms from "./Tabs/TabForms";
import {Link} from "react-router-dom";

export default function Examples () {

    return (
        <div className="container my-4">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to={"/"}>Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Examples</li>
                </ol>
            </nav>

            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" data-toggle="tab" href="#login" role="tab">Login</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#notification" role="tab">Notification</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#alertconfirm" role="tab">Alert confirm</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#paginator" role="tab">Paginator</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#table" role="tab">Table</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#modal" role="tab">Modal</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#typeahead" role="tab">Typeahead</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#select" role="tab">Select</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#forms" role="tab">Forms</a>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="login" role="tabpanel">
                    <br/>
                    <TabLogin/>
                </div>
                <div className="tab-pane fade" id="notification" role="tabpanel">
                    <br/>
                    <TabNotification/>
                </div>
                <div className="tab-pane fade" id="alertconfirm" role="tabpanel">
                    <br/>
                    <TabAlertConfirm/>
                </div>
                <div className="tab-pane fade" id="paginator" role="tabpanel">
                    <br/>
                    <TabPagination/>
                </div>
                <div className="tab-pane fade" id="table" role="tabpanel">
                    <br/>
                    <TabTable/>
                </div>
                <div className="tab-pane fade" id="modal" role="tabpanel">
                    <br/>
                    <TabModal/>
                </div>
                <div className="tab-pane fade" id="typeahead" role="tabpanel">
                    <br/>
                    <TabTypeahead/>
                </div>
                <div className="tab-pane fade" id="select" role="tabpanel">
                    <br/>
                    <TabSelect/>
                </div>
                <div className="tab-pane fade" id="forms" role="tabpanel">
                    <br/>
                    <TabForms/>
                </div>
            </div>

        </div>
    );
}
