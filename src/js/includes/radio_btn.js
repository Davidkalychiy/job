let radio_btn = document.querySelectorAll('.radio_around'),
    circle = document.querySelectorAll('.radio_circle'),
    text = document.querySelectorAll('.radio_text');
function pressRadio(i) {
    radio_btn[i].addEventListener('click', () => {
        if(i == 0) {
            circle[i].classList.add('show');
            text[i].classList.add('radio_text_mod');
            radio_btn[i].classList.add('radio_around_mod');
            circle[i+1].classList.remove('show');
            text[i+1].classList.remove('radio_text_mod');
            radio_btn[i+1].classList.remove('radio_around_mod');
        }else {
            circle[i].classList.add('show');
            text[i].classList.add('radio_text_mod');
            radio_btn[i].classList.add('radio_around_mod');
            circle[i-1].classList.remove('show');
            text[i-1].classList.remove('radio_text_mod');
            radio_btn[i-1].classList.remove('radio_around_mod');  
        }
    })
}
for (let i = 0; i < radio_btn.length; i++) {
    pressRadio(i);
}




