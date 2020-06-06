let plus_room_1 = document.getElementById('plus_room_1'),
    plus_room_2 = document.getElementById('plus_room_2'),
    plus_room_3 = document.getElementById('plus_room_3'),
    minus_room_1 = document.getElementById('minus_room_1'),
    minus_room_2 = document.getElementById('minus_room_2'),
	minus_room_3 = document.getElementById('minus_room_3'),
	number_room_1 = document.getElementById('number_room_1'),
	number_room_2 = document.getElementById('number_room_2'),
	main_room = document.getElementById('dropdown__wrapper-room'),
    number_room_3 = document.getElementById('number_room_3'),
    arr_room = document.getElementById('dropdown__arrow-room'),
    dropdown__select_room = document.getElementById('dropdown__select-room'),
	dropdown__text_room = document.getElementById('dropdown__text-room');

let a = 0;
let b = 0;
let c = 0;
function calc_room (plus,number,minus, room) {
	if (room == 'bedroom'){
		plus.addEventListener('click', function() {
			number.textContent = ++a;
			minus.classList.add('select__minus-mod');
			declension();
		}); 
		minus.addEventListener('click', function() {
			if (a > 0) {
				number.textContent = --a;
				declension();
				if (a == 0) {
					minus.classList.remove('select__minus-mod');		
				}
			}
		});
	}
	else if (room == 'bed'){
		plus.addEventListener('click', function() {
			number.textContent = ++b;
			minus.classList.add('select__minus-mod');
			declension();
		}); 
		minus.addEventListener('click', function() {
			if (b > 0) {
				number.textContent = --b;
				declension();
				if (b == 0) {
					minus.classList.remove('select__minus-mod');		
				}
			}
		});
	}
	else if (room == 'bathroom'){
		plus.addEventListener('click', function() {
			number.textContent = ++c;
			minus.classList.add('select__minus-mod');
			declension();
		}); 
		minus.addEventListener('click', function() {
			if (c > 0) {
				number.textContent = --c;
				declension();
				if (c == 0) {
					minus.classList.remove('select__minus-mod');		
				}
			}
		});
	}

}


function declension() {
	if (a % 10 == 0 || a % 10 == 5 || a % 10 == 6 || a % 10 ==  7 || a % 10 == 8 || a % 10 == 9 || ((a > 4) && (a< 20))){
		dropdown__text_room.textContent = `${a} Спален, `+ `${b} Кровати, ` + `${c} Ванные комнаты`;
	}else if(a % 10 == 1) {
		dropdown__text_room.textContent = `${a} Спальня, `+ `${b} Кровати, ` + `${c} Ванные комнаты`;
	}else {
		dropdown__text_room.textContent = `${a} Спальни, `+ `${b} Кровати, ` + `${c} Ванные комнаты`;
	}
}

function pressApply() {
	apply.addEventListener('click', () => {
		if (a+b % 10 == 0 || a+b % 10 == 5 || a+b % 10 == 6 || a+b % 10 ==  7 || a+b % 10 == 8 || a+b % 10 == 9 || ((a+b > 4) && (a+b< 20))){
			declension('Гостей');
		}else if(a+b % 10 == 1) {
			declension('Гость');
		}else {
			declension('Гостя');
		}
	});
}




function pressArr() {
	let sts = false;
	arr_room.addEventListener('click', () => {
		if (sts == true){
			main_room.classList.remove('dropdown-mod');
			dropdown__select_room.style.display = 'none';
			sts = false;
		}else {
			main_room.classList.add('dropdown-mod');
			dropdown__select_room.style.display = 'block';
			sts = true;
		}
	});
}


//room

calc_room(plus_room_1,number_room_1,minus_room_1,'bedroom')
calc_room(plus_room_2,number_room_2,minus_room_2,'bed')
calc_room(plus_room_3,number_room_3,minus_room_3,'bathroom')
pressArr()