import React, {Component} from 'react';
import './App.css';

import TabTable from "./components/Tabs/TabTable";
import TabPagination from "./components/Tabs/TabPagination";
import TabAlertConfirm from "./components/Tabs/TabAlertConfirm";
import TabNotification from "./components/Tabs/TabNotification";
import TabLogin from "./components/Tabs/TabLogin";
import TabModal from "./components/Tabs/TabModal";
import TabTypeahead from "./components/Tabs/TabTypeahead";

class App extends Component {

    render() {

        return (
            <div className="container App">

                <br/>
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
                </div>

            </div>
        );
    }
}

export default App;
