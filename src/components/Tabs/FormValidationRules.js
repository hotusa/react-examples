export default function validate(values) {
    let errors = {};
    if (!values.username) {
        errors.username = 'Username is required';
    } else if (values.username === '') {
        errors.username = 'Username is empty';
    }
    return errors;
};