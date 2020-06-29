
let date1 = $("#date_1").datepicker().data('datepicker');

let date1Input = document.getElementById('date_1');
let date2Input = document.getElementById('date_2');





$("#date_1").datepicker({
    clearButton: true,
    range: true,
    // inline: true,
    onSelect: function(formattedDate,date,inst) {
        date1Input.value = formattedDate.split(',')[0]
        if(formattedDate.split(',')[1] != undefined) {
            date2Input.value = formattedDate.split(',')[1]
        }
    },
    toggleSelected: false,
    
});



document.querySelectorAll('.calendar__btn')[0].innerHTML = `<div class = 'calendar__clear'>Очистить</div>
                                                            <div class = 'calendar__apply'>Применить</div>`;










let clean = document.getElementsByClassName('calendar__clear')[0];

clean.addEventListener('click', () => {
    date1.clear();
    date1Input.value = '';
    date2Input.value = '';
});


document.querySelector('.calendar__apply').addEventListener('click', () => {
    date1.hide();
});

