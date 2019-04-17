import React from 'react'
import Login from "../Commons/Login";
import logo from "../../logo.svg";

export default function TabLogin () {

    const onLogin = (datos) => {
        console.log('onLogin', datos)
    }

    return (
        <div className="row justify-content-md-center">
            <div className="col-4">
                <Login
                    className="milogin"
                    logo={logo}
                    description={"Description"}
                    onLogin={onLogin}/>
            </div>
        </div>
    )

}