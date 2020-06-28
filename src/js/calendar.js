let datepickers_container = document.querySelector('.datepickers-container');
// console.log(call)


$("#date_1").datepicker({
    clearButton: true,
    range: true,
    // todayButton: true,
    // inline: true
});
$("#date_2").datepicker({
    clearButton: true,
    range: true,
    // inline: true
});

document.querySelector('.calendar__btn').innerHTML = `<div class = 'calendar__btn'>
                    <div class = 'calendar__clear clean'>Очистить</div>
                    <div class = 'calendar__apply'>Применить</div>
        </div>`;
document.querySelector('.calendar__apply').style.position = 'absolute';
document.querySelector('.calendar__apply').style.left = '100px';
// let clean = document.getElementsByClassName('clean')[0];
// clean.addEventListener('click', (e) => {
//     myDatepicker.clear();
// })
