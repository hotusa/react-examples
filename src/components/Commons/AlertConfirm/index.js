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
                          position,
                          confirmButtonColor,
                          cancelButtonColor,
                          allowOutsideClick
                      }) {


    Swal.fire({
        confirmButtonColor: confirmButtonColor || '#3085d6',
        cancelButtonColor: cancelButtonColor || '#aaa',
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
        allowOutsideClick: allowOutsideClick || false
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