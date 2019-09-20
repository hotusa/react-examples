export default function validate(values, name) {
    let errors = {};
    let ok = {}

    // username
    if (!name || name === 'username') {
        if (!values.username) {
            errors.username = 'Campo obligatorio';
        } else if (values.username === '') {
            errors.username = 'Campo vacío';
        } else {
            ok.username = 'ok'
        }
    }

    // email
    if (!name || name === 'email') {
        if (!values.email) {
            errors.email = 'Campo obligatorio'
        } else if (values.email === '') {
            errors.email = 'Campo vacío'
        } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)) {
            errors.email = 'Correo electrónico inválido'
        } else {
            ok.email = 'ok'
        }
    }

    // textarea
    if (!name || name === 'textarea_1') {
        if (!values.textarea_1) {
            errors.textarea_1 = 'Campo obligatorio';
        } else if (values.textarea_1 === '') {
            errors.textarea_1 = 'Campo vacío';
        } else {
            ok.textarea_1 = 'ok'
        }
    }


    // Agree to terms and conditions
    if (!name || name === 'checkbox_1') {
        console.log('values.checkbox_1', values.checkbox_1)
        if (!values.checkbox_1) {
            errors.checkbox_1 = 'Debe aceptar antes de enviar';
        } else {
            ok.checkbox_1 = 'ok'
        }
    }

    return { errors, ok };
};