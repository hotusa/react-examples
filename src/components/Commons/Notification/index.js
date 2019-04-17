import Swal from 'sweetalert2'

function Notification({classContainer, type, text, timer}) {

    let _timer  = timer || 3500

    let _background = null

    switch (type) {
        case 'warning':
            _background = '#FFC037'
            break

        case 'error':
            _background = '#E1374B'
            break

        case 'success':
            _background = '#00A64D'
            break

        case 'info':
            _background = '#00A0B5'
            break

        case 'question':
            _background = '#333333'
            break

        default:

    }

    let _customClass = {
        container: classContainer,
        content: 'text-white ml-2'
    }

    Swal.fire({
        type: type,
        text: text,
        toast: true,
        position: 'top-end',
        timer: _timer,
        animation: false,
        showConfirmButton: false,
        background: _background,
        customClass: _customClass
    })

}

export default Notification