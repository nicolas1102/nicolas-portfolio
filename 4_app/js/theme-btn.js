const themeMode = document.querySelector('.toggleBtn');
const body = document.querySelector('body');

function changeMode() {
    body.classList.toggle('light');

    if (themeMode.children[0].textContent === 'light_mode') {
        themeMode.children[0].textContent = 'dark_mode';
    } else {
        themeMode.children[0].textContent = 'light_mode';
    }
}

themeMode.addEventListener('click', changeMode);