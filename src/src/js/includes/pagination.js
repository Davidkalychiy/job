let arrNext = document.querySelector('.list__arrNext'),
    circle_mod = document.querySelector('.list__circle-mod'), 
    circle_first = document.getElementById('circle_first'),
    circle_second = document.getElementById('circle_second'),
    circle_third = document.getElementById('circle_third'),
    arrBack = document.querySelector('.list__arrBack'),
    circle_start = document.getElementById('circle_start'),
    circle_finish = document.getElementById('circle_finish'),
    start = document.querySelector('.start'),
    finish = document.querySelector('.finish');
let arr = [circle_first,circle_second,circle_third];
let a = 1,
    b = 2,
    c = 3,
    index = 0;
arrNext.addEventListener('click', () => {
    if (index == 2) {
        circle_first.textContent = ++a;
        circle_second.textContent = ++b;
        circle_third.textContent = ++c;
    }
    if (index == 2) {
        index = 2;
    }else {
        index++;
        arr[index].classList.add('list__circle-mod');
        arr[index-1].classList.remove('list__circle-mod');
    }
    if (c == 4) {
        start.style.display = 'block'
    }
    if (c == 15) {
        finish.style.display = 'none'
    }
})

arrBack.addEventListener('click', () => {
    if (index == 0) {
        circle_first.textContent = --a;
        circle_second.textContent = --b;
        circle_third.textContent = --c;
    }
    if (index == 0) {
        index = 0;
    }else {
        index--;
        arr[index].classList.add('list__circle-mod');
        arr[index+1].classList.remove('list__circle-mod');
    }
    if (a == 12) {
        finish.style.display = 'block'
    }
    if (a == 1) {
        start.style.display = 'none'
    }
});

circle_first.addEventListener('click', () => {
    index = 0;
    circle_first.classList.add('list__circle-mod');
    circle_second.classList.remove('list__circle-mod');
    circle_third.classList.remove('list__circle-mod');
});


circle_second.addEventListener('click', () => {
    index = 1;
    circle_second.classList.add('list__circle-mod');
    circle_first.classList.remove('list__circle-mod');
    circle_third.classList.remove('list__circle-mod');
});


circle_third.addEventListener('click', () => {
    index = 2;
    circle_third.classList.add('list__circle-mod');
    circle_second.classList.remove('list__circle-mod');
    circle_first.classList.remove('list__circle-mod');
});


circle_start.addEventListener('click', () => {
    a = 1;
    b = 2;
    c = 3;
    index = 0;
    circle_first.textContent = a;
    circle_second.textContent = b;
    circle_third.textContent = c;
    start.style.display = 'none';
    finish.style.display = 'block';
    circle_first.classList.add('list__circle-mod');
    circle_third.classList.remove('list__circle-mod');
    circle_second.classList.remove('list__circle-mod');

});

circle_finish.addEventListener('click', () => {
    a = 13;
    b = 14;
    c = 15;
    index = 2;
    circle_first.textContent = a;
    circle_second.textContent = b;
    circle_third.textContent = c;
    start.style.display = 'block';
    finish.style.display = 'none';
    circle_first.classList.remove('list__circle-mod')
    circle_third.classList.add('list__circle-mod')
    circle_second.classList.remove('list__circle-mod')

});