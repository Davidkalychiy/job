let button_border = document.querySelector('.button_border');


function clickBtn(nameBtn, nameBtnStr) {
    let name = nameBtnStr + '_mod';
    nameBtn.addEventListener('click', () => {
        nameBtn.classList.toggle(name);
    })
}

clickBtn(button_border , 'button_border');