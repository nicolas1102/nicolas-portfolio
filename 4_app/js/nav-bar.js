const sections = document.querySelectorAll('main > section');
const list = document.querySelectorAll('ul .list');

// event to change menu when a section is focus
sections.forEach((sec) => {
    sec.addEventListener('mouseover', () => {
        switch (sec.id) {
            case 'presentation':
                list.forEach((item) => item.classList.remove('active'));
                list[0].classList.add('active');
                break;
            case 'knowledge':
                list.forEach((item) => item.classList.remove('active'));
                list[1].classList.add('active');
                break;
            case 'projects':
                list.forEach((item) => item.classList.remove('active'));
                list[2].classList.add('active');
                break;
            case 'journey':
                list.forEach((item) => item.classList.remove('active'));
                list[3].classList.add('active');
                break;
            case 'contact':
                list.forEach((item) => item.classList.remove('active'));
                list[4].classList.add('active');
                break;

            default:
                list.forEach((item) => item.classList.remove('active'));
                list[0].classList.add('active');
                break;
        }
    });
});
