let number = document.querySelectorAll('.box__select__number'),
	plus = document.querySelectorAll('.box__select__plus'),
	minus = document.querySelectorAll('.box__select__minus'),
	arr = document.querySelectorAll('.wrapper__arrow'),
	big_wrapper = document.querySelectorAll('.big_wrapper'),
	main = document.querySelectorAll('.first'),
	guests = document.querySelectorAll('.wrapper__text'),
	clear = document.querySelector('.clear'),
	apply = document.querySelector('.apply');


function calc_guests() {
	let b = 0;
	calc(0);
	calc(1);
	calc(2);
	pressArr(0);
	pressApply();
}
function calc (i) {
	let a = 0;
	plus[i].addEventListener('click', function() {
		number[i].textContent = ++a;
		minus[i].classList.add('box__select__minus_mod');	
		b ++ ;	
	}); 
	minus[i].addEventListener('click', function() {
		if (a > 0) {
			number[i].textContent = --a;
			b --;
			if (a == 0) {
				minus[i].classList.remove('box__select__minus_mod');		
			}
		}
	});
	function clearGue() {
		clear.addEventListener('click', () => {
			for (let i = 0; i < 3; i++) {
				minus[i].classList.remove('box__select__minus_mod');
			};
			guests[0].textContent = 'Сколько гостей?';
			b = 0;
			a = 0;
			for (let i = 0; i < 3; i++) {
				number[i].textContent = 0;
			}
		})
	}
	clearGue()
}
function pressArr(i) {
	let sts = false;
	arr[i].addEventListener('click', () => {
		if (sts == true){
			main[i].classList.remove('wrapper_mod');
			big_wrapper[i].style.display = 'none';
			sts = false;
		}else {
			main[i].classList.add('wrapper_mod');
			big_wrapper[i].style.display = 'block';
			sts = true;
		}
	});
}

function pressApply() {
	apply.addEventListener('click', () => {
		if (b % 10 == 0 || b % 10 == 5 || b % 10 == 6 || b % 10 ==  7 || b % 10 == 8 || b % 10 == 9 || ((b > 4) && (b< 20))){
		guests[0].textContent = b + " Гостей";
	}else if(b % 10 == 1) {
		guests[0].textContent = b + " Гость";
	}else {
		guests[0].textContent = b + " Гостя";
	}
	})
}


calc_guests();




pressArr(1)
calc(3);
calc(4);
calc(5);
