const hist = document.querySelector('.historia');
const text = document.querySelector('.textHist');

hist.addEventListener('click', function () {
        if(text.style.display == 'none') {
            text.style.display = 'block';
        } else {
            text.style.display = 'none';
        }
    });
