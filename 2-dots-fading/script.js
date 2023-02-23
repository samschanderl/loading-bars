const loadingDots = document.querySelectorAll('.loading-dot');
const button = document.querySelector('.button');
const loadingBar = document.querySelector('.loading-bar');

let isLoading = false;

console.log(loadingDots);

// EVENT LISTENER

button.addEventListener('click', () => {
    if (!isLoading) {
        startLoadingAnimation();
    } else {
        stopLoadingAnimation();
    }
})

// FUNCTIONS

function startLoadingAnimation() {
    let timer = 0;
    
    loadingBar.style.display = 'flex';

    loadingDots.forEach((el) => {
        // el.classList.add('fade-in');
        setTimeout(() => {
            el.classList.add('fade-in');
        }, timer)
        timer += 300;
    })

    isLoading = true;
}

function stopLoadingAnimation() {
    loadingBar.style.display = 'none';
    loadingDots.forEach((el) => {
        el.classList.remove('fade-in');
        isLoading = false;
    })
}