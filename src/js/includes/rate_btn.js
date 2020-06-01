let star = document.querySelectorAll('.rate__star'),
    wrapper_rate = document.querySelector('.wrapper_rate')
    star_main = document.querySelectorAll('.star'),
    star_border = document.querySelectorAll('.star_border'),
    star_wrapper = document.querySelector('.rate');
function pressStar(i) {
    let cons = i-1;
    star[i].addEventListener('click', () => {
        // star_main[i].classList.remove('star');
        while (i+1 != 0) {
            star_main[i].classList.remove('star');
            i--;
        }
        while(cons != star_main.length-1){
            star_main[cons].classList.add('star');

            cons++;
        }
    });
}
wrapper_rate.addEventListener('click',()=>{
    for (let i = 0;i < star.length;i++) {
        pressStar(i);
    }
});
