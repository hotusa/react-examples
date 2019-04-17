import Swal from 'sweetalert2'

function AlertConfirm ({customClass, title, text, type, onConfirm, onCancel}) {


    Swal.fire({
        customClass: customClass,
        title: title,
        text: text,
        type: type,
        showCancelButton: true
    }).then((result) => {
        if (result.value) {
            if (onConfirm) onConfirm()
            else alert('No implement "onConfirm" callback')
        } else {
            if (onCancel) onCancel()
            else alert('No implement "onCancel" callback')
        }
    })

}

export default AlertConfirm