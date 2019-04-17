import React, {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser, faLock, faLockOpen} from '@fortawesome/free-solid-svg-icons'


export default function Login({className, logo, description, onLogin}) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onChangeInput = (e) => {
        if (e.target.name === 'username') {
            setUsername(e.target.value)
        } else {
            setPassword(e.target.value)
        }
    }

    return (
        <div className={`card ${className}`}>
            <div className="card-body text-center">
                {logo ? <img src={logo} className="img-fluid" alt="logo"/> : null }
                {description ? <div className="text-center description my-3">{description}</div> : null}
                <form onSubmit={(e) => {
                    e.preventDefault()
                    if (onLogin) onLogin({username: username, password: password})
                    else alert('No implement "onLogin" callback')
                }}>
                    <div className="input-group mb-2">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">
                                <FontAwesomeIcon icon={faUser}/>
                            </span>
                        </div>
                        <input
                            className="form-control"
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={username}
                            onChange={onChangeInput}
                            required={true}/>
                    </div>

                    <div className="input-group mb-2">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">
                                <FontAwesomeIcon icon={faLock}/>
                            </span>
                        </div>
                        <input
                            className="form-control"
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={onChangeInput}
                            required={true}/>
                    </div>
                    <button className="btn btn-primary btn-block" type="submit">
                        <FontAwesomeIcon icon={faLockOpen} className="mr-1"/> Login
                    </button>
                </form>
            </div>
        </div>
    )

}