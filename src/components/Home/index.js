import React from 'react'
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons";

export default function Home() {

    return (
        <div className="container my-4">
            <div className="jumbotron">
                <h4 className="display-4">react-igmweb</h4>
                <p className="lead">Global component packages for React & Bootstrap4</p>
                <hr className="my-4"/>
                <a className="btn btn-secondary btn-lg" href="https://www.npmjs.com/package/react-igmweb"
                   target="_blank" rel="noopener noreferrer" role="button">Learn more</a>
                <Link to={"/examples"} className="btn btn-primary btn-lg ml-2" href="#" role="button">View demos</Link>
                <p className="mt-2 mb-0">(Download github demo project <a href="https://github.com/hotusa/react-examples" className="alert-link" target="_blank">react-examples <FontAwesomeIcon icon={faExternalLinkAlt}/></a>)</p>
            </div>

            <h2>Installation</h2>
            <hr/>
            <p>To install, you can use <strong>npm</strong> or <strong>yarn</strong>:</p>
            <figure>
            <pre>
                <code>
{`
> npm install react-igmweb --save
> yarn add react-igmweb
`}
                </code>
            </pre>
            </figure>

        </div>
    )
}