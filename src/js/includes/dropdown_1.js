let number = document.querySelectorAll('.box__select__number'),
	plus = document.querySelectorAll('.box__select__plus'),
	minus = document.querySelectorAll('.box__select__minus'),
	arr = document.querySelectorAll('.wrapper__arrow'),
	big_wrapper = document.querySelectorAll('.big_wrapper'),
	main = document.querySelectorAll('.first');
function calc (i) {
	let start = 0;
	plus[i].addEventListener('click', function() {
		number[i].textContent = ++start;
		minus[i].classList.add('box__select__minus_mod');
	}); 
	minus[i].addEventListener('click', function() {
		if (start > 0) {
			number[i].textContent = --start;
			if (start == 0) {
				minus[i].classList.remove('box__select__minus_mod');		
			}
		}
	});
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

calc(0);
calc(1);
calc(2);
