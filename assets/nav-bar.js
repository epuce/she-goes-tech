document
    .getElementsByClassName('js-close-popup')[0]
    .addEventListener('click', function() {
        document
            .getElementsByClassName('js-popup')[0]
            .style.display = 'none';
    })

document
    .getElementsByClassName('js-open-popup')[0]
    .addEventListener('click', function() {
        document
            .getElementsByClassName('js-popup')[0]
            .style.display = 'flex';
    })