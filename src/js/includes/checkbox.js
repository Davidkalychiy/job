let	vector = document.getElementsByClassName('vector'),
    wrapper = document.querySelector('.main_wrapper'),
    arrows = document.querySelector('.main_checkbox__arrow'),
    arrow_rotate = document.querySelector('.arrow_rotate'),
    arrow = document.querySelector('.arrow'),
	checkbox = document.getElementsByClassName('cont');

function none(i) {
	let active = false;
	checkbox[i].addEventListener('click', () => {
		if (active == true) {
            vector[i].style.display = 'none';
            active = false;
        }
        else {
            vector[i].style.display = 'block';
            active = true;
        }
    });
}

function dropdown() {
    let active = false;
    arrows.addEventListener('click', () => {
        if (active == true) {
            wrapper.style.display = 'none';
            arrow.style.display = 'block';
            arrow_rotate.style.display = 'none';
            active = false;
        }else {
            wrapper.style.display = 'block';
            arrow_rotate.style.display = 'block';
            arrow.style.display = 'none';
            active = true;
        }
    })
}


dropdown()

for (let i = 0; i < vector.length; i++) {
    none(i);
}

