let heart = document.querySelector('.heart'),
    heart_border = document.querySelector('.heart_border'),
    like_wrapper = document.querySelector('.like_around'),
    number = document.querySelector('.like_number');
function like() {
    let start = {active: false, number: 0};
    like_wrapper.addEventListener('click', () => {
        heart.classList.toggle('heart_mod'),
        heart_border.classList.toggle('heart_border_mod'),
        like_wrapper.classList.toggle('like_around_mod')
        if (start.active == false) {
            number.textContent = ++start.number;
            start.active = true;
        }else {
            start.number = 0;
            number.textContent = start.number;
            start.active = false;
        }
    });
}
like();