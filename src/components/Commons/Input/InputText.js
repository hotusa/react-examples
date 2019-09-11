import React from 'react'

export default function InputText({name, onChange, value, errors, required}) {


    return (
        <>
            <div className="form-group">
                <input
                    name={name || ''}
                    type="text"
                    className={`form-control ${errors[name] ? 'is-invalid' : ''}`}
                    onChange={onChange}
                    value={value[name] || ''}
                    required={required || false}/>
                <div className={`${errors[name] ? 'invalid-feedback' : ''}`}>
                    {errors[name] || ''}
                </div>
            </div>
        </>
    )
}