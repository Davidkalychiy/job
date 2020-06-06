let toggle = document.querySelectorAll('.toggle_around'),
    toggle_around = document.querySelectorAll('.toggle_around'),
    toggle_circle = document.querySelectorAll('.toggle_circle');
function pressToggle(i) {
    toggle[i].addEventListener('click', () => {
        toggle_circle[i].classList.toggle('toggle_circle_mod');
        toggle_around[i].classList.toggle('toggle_around_mod');
    })
}
for (let i = 0;toggle.length > i;i++) {
    pressToggle(i);
}