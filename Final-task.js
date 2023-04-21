const btnOpenForm = document.querySelector(".btn-open");
btnOpenForm.addEventListener('click', () => {
    const openForm = document.getElementById('form-wrapper');
    if (openForm.style.display === 'none') {
        openForm.style.display = 'block'
    } else {
        openForm.style.display = 'none'
    }
})

