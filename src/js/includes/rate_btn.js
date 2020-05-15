let star = document.querySelectorAll('.star_wrapper'),
    star_main = document.querySelectorAll('.star'),
    star_border = document.querySelectorAll('.star_border'),
    star_wrapper = document.querySelector('.wrapper_rate');
function pressStar(i) {
    star[i].addEventListener('click', () => {
        star_main[i].classList.toggle('star_main');
    })
            
}
for (let i = 0; i < star.length; i++) {
    pressStar(i);
}