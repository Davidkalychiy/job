let toggle = document.querySelector('.toggle_around'),
    toggle_around = document.querySelector('.toggle_around'),
    toggle_circle = document.querySelector('.toggle_circle');
function pressToggle() {
    toggle.addEventListener('click', () => {
        toggle_circle.classList.toggle('toggle_circle_mod');
        toggle_around.classList.toggle('toggle_around_mod');
    })
}

pressToggle()