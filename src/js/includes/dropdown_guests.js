let plus_guests_1 = document.getElementById('plus_guests_1'),
    plus_guests_2 = document.getElementById('plus_guests_2'),
    plus_guests_3 = document.getElementById('plus_guests_3'),
    minus_guests_1 = document.getElementById('minus_guests_1'),
    minus_guests_2 = document.getElementById('minus_guests_2'),
    minus_guests_3 = document.getElementById('minus_guests_3'),
    number_guests_1 = document.getElementById('number_guests_1'),
    number_guests_2 = document.getElementById('number_guests_2'),
	number_guests_3 = document.getElementById('number_guests_3'),
	dropdown__text_guests = document.getElementById('dropdown__text-guests'),
    arr_guests = document.getElementById('dropdown__arrow-guests'),
    dropdown__select_guests = document.getElementById('dropdown__select-guests'),
    main_guests = document.getElementById('dropdown__wrapper-guests'),
    clear = document.querySelector('.button__clear'),
    apply = document.querySelector('.button__apply');
let a = 0;
let b = 0;
let c = 0;
function calc_guests (plus,number,minus, name) {
	if (name == 'adults'){
		plus.addEventListener('click', function() {
			number.textContent = ++a;
			minus.classList.add('select__minus-mod');
		}); 
		minus.addEventListener('click', function() {
			if (a > 0) {
				number.textContent = --a;
				if (a == 0) {
					minus.classList.remove('select__minus-mod');		
				}
			}
		});
	}
	else if (name == 'children'){
		plus.addEventListener('click', function() {
			number.textContent = ++b;
			minus.classList.add('select__minus-mod');
		}); 
		minus.addEventListener('click', function() {
			if (b > 0) {
				number.textContent = --b;
				if (b == 0) {
					minus.classList.remove('select__minus-mod');		
				}
			}
		});
	}
	else if (name == 'baby'){
		plus.addEventListener('click', function() {
			number.textContent = ++c;
			minus.classList.add('select__minus-mod');
		}); 
		minus.addEventListener('click', function() {
			if (c > 0) {
				number.textContent = --c;
				if (c == 0) {
					minus.classList.remove('select__minus-mod');		
				}
			}
		});
	}

	function clearGue(number,minus) {
		clear.addEventListener('click', () => {
			minus.classList.remove('select__minus-mod');
			dropdown__text_guests.textContent = 'Сколько гостей?';
			b = 0;
			a = 0;
			c = 0;
			number.textContent = 0;
		});
	}
	clearGue(number_guests_1,minus_guests_1)
	clearGue(number_guests_2,minus_guests_2)
	clearGue(number_guests_3,minus_guests_3)
}





function pressArr() {
	let sts = false;
	arr_guests.addEventListener('click', () => {
		if (sts == true){
			main_guests.classList.remove('dropdown-mod');
			dropdown__select_guests.style.display = 'none';
			sts = false;
		}else {
			main_guests.classList.add('dropdown-mod');
			dropdown__select_guests.style.display = 'block';
			sts = true;
		}
	});
}




function declension(guests) {
	if (c % 10 == 0 || c % 10 == 5 || c % 10 == 6 || c % 10 ==  7 || c % 10 == 8 || c % 10 == 9 || ((c > 4) && (c< 20))){
		if (c == 0) {
			dropdown__text_guests.textContent = `${a+b} `+ guests;
		}else if (a+b == 0) {
			dropdown__text_guests.textContent = `${c} Младенцев`;
		}
		else {
			dropdown__text_guests.textContent = `${a+b} `+ guests + "," + ` ${c} Младенцев`;
		}
	}else if(c % 10 == 1) {
		if (c == 0) {
			dropdown__text_guests.textContent = `${a+b} `+ guests;
		}else if (a+b == 0) {
			dropdown__text_guests.textContent = `${c} Младенец`;
		}
		else {
			dropdown__text_guests.textContent = `${a+b} `+ guests + "," + ` ${c} Младенец`;
		}
	}else {
		if (c == 0) {
			dropdown__text_guests.textContent = `${a+b} `+ guests;
		}else if (a+b == 0) {
			dropdown__text_guests.textContent = `${c} Младенца`;
		}else {
			dropdown__text_guests.textContent = `${a+b} `+ guests + "," + ` ${c} Младенца`;
		}
	}
}

function pressApply() {
	apply.addEventListener('click', () => {
		clear.style.display = 'block';
		if (a+b == 0 && c == 0) {
			clear.style.display = 'none';
			dropdown__text_guests.textContent = 'Сколько гостей?'
			apply.removeEventListener('click', () =>{});
		}else if(a+b % 10 == 1) {
			declension('Гость');
		}else if (a+b % 10 == 0 || a+b % 10 == 5 || a+b % 10 == 6 || a+b % 10 ==  7 || a+b % 10 == 8 || a+b % 10 == 9 || ((a+b > 4) && (a+b< 20))){
			declension('Гостей');
		}
		else {
			declension('Гостя');
		}
	});
}











//guests

pressArr();
calc_guests(plus_guests_1,number_guests_1,minus_guests_1, 'adults');
calc_guests(plus_guests_2,number_guests_2,minus_guests_2, 'children');
calc_guests(plus_guests_3,number_guests_3,minus_guests_3, 'baby');
pressApply();





