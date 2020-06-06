let	vector = document.getElementsByClassName('vector'),
    wrapper = document.querySelectorAll('.select_checkbox'),
    arrows = document.querySelectorAll('.exp_checkbox__arrow'),
    arrow_rotate = document.querySelectorAll('.arrow_rotate'),
    arrow = document.querySelectorAll('.arrow'),
	checkbox = document.getElementsByClassName('checkbox__cont');

function none(i) {
	let active = false;
	checkbox[i].addEventListener('click', () => {
		if (active == true) {
            vector[i].style.display = 'none';
            checkbox[i].classList.toggle('checkbox__cont-mod');
            active = false;
        }
        else {
            vector[i].style.display = 'block';
            checkbox[i].classList.toggle('checkbox__cont-mod');
            active = true;
        }
    });
}

function dropdown(i) {
    let active = false;
    arrows[i].addEventListener('click', () => {
        if (active == true) {
            wrapper[i].style.display = 'none';
            arrow[i].style.display = 'block';
            arrow_rotate[i].style.display = 'none';
            active = false;
        }else {
            wrapper[i].style.display = 'block';
            arrow_rotate[i].style.display = 'block';
            arrow[i].style.display = 'none';
            active = true;
        }
    })
}

for (let i = 0; i < wrapper.length; i++) {
    dropdown(i)
}


for (let i = 0; i < vector.length; i++) {
    none(i);
}

