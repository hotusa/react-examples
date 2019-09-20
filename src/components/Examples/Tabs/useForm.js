import { useState, useEffect } from 'react';

const useForm = (callback, validate, defaultValues) => {

    const [values, setValues] = useState(defaultValues);
    const [errors, setErrors] = useState({});
    const [ok, setOK] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [currentEvent, setCurrentEvent] = useState(undefined)

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
    }, [errors]);

    useEffect(() => {
        if (currentEvent) {
            if (Object.keys(values).length > 0) {
                handleOnBlur(currentEvent)
            }
        }
    }, [values]);

    useEffect(()=> {
        setValues(defaultValues)
    }, [defaultValues])

    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        setErrors(validate(values).errors);
        setIsSubmitting(true);
    };

    const handleOnBlur = (event) => {
        if (event) event.preventDefault();
        let name = event.target.name

        let old_errors = Object.assign({}, errors);
        let old_ok = Object.assign({}, ok);

        let new_errors = validate(values, name).errors;
        let new_ok = validate(values, name).ok;

        if (Object.keys(new_errors).length > 0) {
            // quitar del old_ok
            delete old_ok[name]
        }

        if (Object.keys(new_ok).length > 0) {
            // quitar del old_errors
            delete old_errors[name]
        }

        setErrors(Object.assign(old_errors, new_errors));
        setOK(Object.assign(old_ok, new_ok));

        setIsSubmitting(false);
    };

    const handleChange = (event) => {
        event.persist();
        setCurrentEvent(event)
        if (event.target.type === 'checkbox') {
            setValues(values => ({ ...values, [event.target.name]: event.target.checked }));
        } else {
            setValues(values => ({ ...values, [event.target.name]: event.target.value }));
        }
    };

    return {
        handleChange,
        handleSubmit,
        handleOnBlur,
        values,
        errors,
        ok
    }
};

export default useForm;