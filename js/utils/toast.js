export const toastError = (mensaje) => {
    Toastify({
        text: mensaje,
        duration: 3000,
        gravity: 'top',
        position: 'right',
        style: {
            background: 'linear-gradient(to right, #C70039, #F5150A)'
            }
    }).showToast();
}

export const toastSuccess = (mensaje) => {
    Toastify({
        text: mensaje,
        duration: 2000,
        gravity: 'top',
        position: 'right',
        style: {
            background: 'linear-gradient(to right, #A1E1C9, #008184)'
        }
    }).showToast();
}