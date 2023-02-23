const button = document.querySelector('.button');
const loadingBox = document.querySelector('.loading-box');

let isLoading = false;

button.addEventListener('click', () => {
    console.log('clicked');
    
    if (!isLoading) {
        startLoadingAnimation();
    } else if (isLoading) {
        stopLoadingAnimation();
    }
    changeButtonText();
})

function startLoadingAnimation() {
    isLoading = true;

    loadingBox.style.display = 'grid';
    loadingBox.classList.add('rotate');
}

function stopLoadingAnimation() {

    isLoading = false;

    loadingBox.classList.remove('rotate');
    loadingBox.style.display = 'none';
}

function changeButtonText() {
    if (isLoading) {
        button.textContent = 'Stop animation';
    } else if (!isLoading) {
        button.textContent = 'Start animation';
    }
}