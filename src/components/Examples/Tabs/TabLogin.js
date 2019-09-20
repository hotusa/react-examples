import React from 'react'
import Login from "../../Commons/Login";
import logo from "../../../logo.svg";

export default function TabLogin() {



    const code = `
import {IGMLogin} from 'react-igmweb'
import logo from "../../logo.svg";

const onLogin = (datos) => {
    console.log('onLogin', datos)
}
    
return (    
    <IGMLogin
        className="milogin"
        logo={logo}
        description={"Description"}
        onLogin={onLogin}/>
    )
`

    const onLogin = (datos) => {
        console.log('onLogin', datos)
    }

    return (
        <>
            <div className="row justify-content-md-center">
                <div className="col-sm-4">
                    <Login
                        className="milogin"
                        logo={logo}
                        description={"Description"}
                        onLogin={onLogin}/>
                </div>
            </div>

            <br/>

            <figure>
                <pre>
                    <code>
                    {code}
                    </code>
                </pre>
            </figure>
        </>
    )

}