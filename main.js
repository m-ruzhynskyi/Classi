let splide = new Splide( '.splide', {
    type  : 'fade',
    rewind: false,
} );

splide.mount();

function switchImages() {
    switch (currentImage){
        case 1:
            mainImg.src = './assets/img/banner-large-1.jpg'
            document.querySelector('.first').classList.add('animate__animated')
            document.querySelector('.first').classList.add('animate__fadeInUp')
            removeMainTextAnimation('third')
            removeMainTextAnimation('second')
            break
        case 2:
            mainImg.src = './assets/img/banner-large-2.jpg'
            document.querySelector('.second').classList.add('animate__animated')
            document.querySelector('.second').classList.add('animate__fadeInUp')
            removeMainTextAnimation('first')
            removeMainTextAnimation('third')
            break
        case 3:
            mainImg.src = './assets/img/banner-large-3.jpg'
            document.querySelector('.third').classList.add('animate__animated')
            document.querySelector('.third').classList.add('animate__fadeInUp')
            removeMainTextAnimation('second')
            break
    }
}

function removeMainTextAnimation (element){
    document.querySelector(`.${element}`).classList.remove('animate__animated')
    document.querySelector(`.${element}`).classList.remove('animate__fadeInUp')
}

let currentImage = 1;

const mainImg = document.querySelector('#mainImg');
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll(".splide__pagination__page");
    elements.forEach(el => el.style.display = 'none')
    switchImages()
});
document.querySelector('.splide__arrow--next').addEventListener('click', () => {
    currentImage += 1;
    switchImages()
    if (currentImage === 4) currentImage = 1;
})

document.querySelector('.splide__arrow--prev').addEventListener('click', () => {
    currentImage -= 1;
    if (currentImage === 0) currentImage = 1;
    switchImages()
})