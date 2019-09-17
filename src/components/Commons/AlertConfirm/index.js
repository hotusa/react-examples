import Swal from 'sweetalert2'

function AlertConfirm({
                          customClass,
                          title,
                          text,
                          type,
                          onConfirm,
                          onCancel,
                          confirmButtonText,
                          cancelButtonText,
                          preConfirm,
                          position
                      }) {


    Swal.fire({
        position: position || 'center',
        customClass: customClass,
        title: title,
        text: text,
        type: type,
        confirmButtonText: confirmButtonText ? confirmButtonText : 'Ok',
        cancelButtonText: cancelButtonText ? cancelButtonText : 'Cancel',
        showCancelButton: true,
        showCloseButton: true,
        showLoaderOnConfirm: true,
        preConfirm: preConfirm ? preConfirm : undefined,
        allowOutsideClick: () => !Swal.isLoading()
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