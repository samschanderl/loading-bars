const button = document.querySelector('.button');
const loadingBox = document.querySelector('.loading-box');

button.addEventListener('click', () => {
    console.log('clicked');
    loadingBox.style.display = 'grid';
    loadingBox.classList.add('rotate');
    loadingBox.classList.add('fade-in');
    setTimeout(() => {
        loadingBox.classList.remove('rotate');
        loadingBox.style.display = 'none';
    },4000)
})