import React, {useState} from 'react'
import useForm from './useForm'
import validate from './FormValidationRules'

export default function TabTypeahead() {

    const [defaultValues, setDefaultValues] = useState({})

    const clickDefaultValues = () => {
        setDefaultValues({
            ...defaultValues,
            username: 'Javi',
            email: 'javier.marin@igmweb.com',
            textarea_1: 'Test',
            checkbox_1: true,
            checkbox_2: true
        })
    }

    const onSubmit = () => {
        alert('OK')
    }

    const {
        values,
        errors,
        ok,
        handleChange,
        handleSubmit,
        handleOnBlur,
    } = useForm(onSubmit, validate, defaultValues);



    return (

        <>
            <div className="card">
                <div className="card-header">
                    Form validation
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit} noValidate={true}>

                        <h5>Input</h5>
                        <hr/>

                        <div className="form-group">
                            <input
                                placeholder={"Username"}
                                name={"username"}
                                type={"text"}
                                autoComplete={"off"}
                                className={`form-control ${errors && errors["username"] ? 'is-invalid' : (ok && ok["username"] ? 'is-valid' : '')} `}
                                onChange={handleChange}
                                onBlur={handleOnBlur}
                                value={values && values["username"] || ''}
                                required={true}/>
                            {errors ?
                                <div className={`${errors["username"] ? 'invalid-feedback' : ''}`}>
                                    {errors["username"] || ''}
                                </div> : null}
                            {ok ?
                                <div className="valid-feedback">
                                    {ok["username"] || ''}
                                </div> : null}
                        </div>


                        <h5>Input Group</h5>
                        <hr/>

                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroupPrepend">@</span>
                            </div>
                            <input type="text"
                                   placeholder="Email"
                                   autoComplete="off"
                                   name="email"
                                   onChange={handleChange}
                                   onBlur={handleOnBlur}
                                   value={values && values["email"] || ''}
                                   className={`form-control ${errors && errors["email"] ? 'is-invalid' : (ok && ok["email"] ? 'is-valid' : '')} `}
                                   required={true}/>
                            {errors ?
                                <div className={`${errors["email"] ? 'invalid-feedback' : ''}`}>
                                    {errors["email"] || ''}
                                </div> : null}
                            {ok ?
                                <div className="valid-feedback">
                                    {ok["email"] || ''}
                                </div> : null}
                        </div>



                        <h5>Textarea</h5>
                        <hr/>

                        <div className="form-group">
                            <textarea
                                name={"textarea_1"}
                                className={`form-control ${errors && errors["textarea_1"] ? 'is-invalid' : (ok && ok["textarea_1"] ? 'is-valid' : '')} `}
                                placeholder={""}
                                onChange={handleChange}
                                onBlur={handleOnBlur}
                                value={values && values["textarea_1"] || ''}
                                required={true}/>
                            {errors ?
                                <div className={`${errors["textarea_1"] ? 'invalid-feedback' : ''}`}>
                                    {errors["textarea_1"] || ''}
                                </div> : null}
                            {ok ?
                                <div className="valid-feedback">
                                    {ok["textarea_1"] || ''}
                                </div> : null}
                        </div>


                        <h5>Checkbox</h5>
                        <hr/>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input className={`custom-control-input ${errors && errors["checkbox_1"] ? 'is-invalid' : (ok && ok["checkbox_1"] ? 'is-valid':'') } `}
                                       type="checkbox"
                                       id={`invalidCheck_${"checkbox_1"}`}
                                       checked={values && values["checkbox_1"] || false}
                                       name={"checkbox_1"}
                                       onChange={handleChange}
                                       required={true} />
                                <label className="custom-control-label" htmlFor={`invalidCheck_${"checkbox_1"}`}>
                                    {"Aceptar condiciones" || ''}
                                </label>
                                {errors ?
                                    <div className={`${errors["checkbox_1"] ? 'invalid-feedback' : ''}`}>
                                        {errors["checkbox_1"] || ''}
                                    </div> : null }
                                {ok ?
                                    <div className="valid-feedback">
                                        {ok["checkbox_1"] || ''}
                                    </div> : null}
                            </div>
                        </div>




                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input className={`custom-control-input ${errors && errors["checkbox_2"] ? 'is-invalid' : (ok && ok["checkbox_2"] ? 'is-valid':'') } `}
                                       type="checkbox"
                                       id={`invalidCheck_${"checkbox_2"}`}
                                       checked={values && values["checkbox_2"] || false}
                                       name={"checkbox_2"}
                                       onChange={handleChange}
                                       required={false} />
                                <label className="custom-control-label" htmlFor={`invalidCheck_${"checkbox_2"}`}>
                                    {"Opcional" || ''}
                                </label>
                                {errors ?
                                    <div className={`${errors["checkbox_2"] ? 'invalid-feedback' : ''}`}>
                                        {errors["checkbox_2"] || ''}
                                    </div> : null }
                                {ok ?
                                    <div className="valid-feedback">
                                        {ok["checkbox_2"] || ''}
                                    </div> : null}
                            </div>
                        </div>






                        <br/>

                        <button
                            className="btn btn-primary mr-2"
                            type="submit">Submit
                        </button>
                        <button className="btn btn-secondary" type="button" onClick={clickDefaultValues}>Set default
                            values
                        </button>
                    </form>
                </div>
            </div>

        </>
    )
}