let clickme_text = document.querySelector('.clickme_text');


function clickBtn(nameBtn, nameBtnStr) {
    let name = nameBtnStr + '_mod';
    nameBtn.addEventListener('click', () => {
        nameBtn.classList.toggle(name);
    })
}

clickBtn(clickme_text, 'clickme_text');