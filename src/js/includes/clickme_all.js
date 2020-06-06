let button_all = document.querySelector('.button_all');


function clickBtn(nameBtn, nameBtnStr) {
    let name = nameBtnStr + '_mod';
    nameBtn.addEventListener('click', () => {
        nameBtn.classList.toggle(name);
    })
}

clickBtn(button_all, 'button_all');