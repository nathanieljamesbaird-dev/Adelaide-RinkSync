const myInput = document.querySelector('#myInput');
const myIcon = document.querySelector('#myIcon');

myInput.addEventListener('focus', () => {
    myIcon.style.display = 'none';
});

myInput.addEventListener('blur', () => {
    myIcon.style.display = 'block';
});