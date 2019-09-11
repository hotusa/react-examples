import React from 'react'
import InputText from "../Commons/Input/InputText";
import useForm from './useForm'
import validate from './FormValidationRules'

export default function TabTypeahead () {

    const onSubmit = () => {
        alert('OK')
    }

    const {
        values,
        errors,
        handleChange,
        handleSubmit,
    } = useForm(onSubmit, validate);



    return (
        <form onSubmit={handleSubmit} noValidate={true}>

            <InputText
                name={"username"}
                onChange={handleChange}
                value={values}
                errors={errors}
                required={true}
            />

            <br/>

            <button
                className="btn btn-primary"
                type="submit">Submit</button>
        </form>
    )
}