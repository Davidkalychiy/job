let button_1 = document.querySelector('.button_1'),
    button_2 = document.querySelector('.button_2'),
    click_text = document.querySelector('.click_text');


function clickBtn(nameBtn, nameBtnStr) {
    let name = nameBtnStr + '_mod';
    nameBtn.addEventListener('click', () => {
        nameBtn.classList.toggle(name);
    })
}
// clickBtn(button_1, 'button_1');
clickBtn(button_2 , 'button_2');
// clickBtn(click_text, 'click_text');
