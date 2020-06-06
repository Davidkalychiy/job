let	vector = document.getElementsByClassName('vector'),
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

for (let i = 0; i < vector.length; i++) {
    none(i);
}