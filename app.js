//  Carousel Disney Plus

let carousel = document.querySelector('.carousel');
let sliders = [];
let slideIndex = 0;

const creatSlide = () => {
        if(slideIndex >= movies.length){
            slideIndex = 0;
        }

        let slider = document.createElement('div');
        let imgElement = document.createElement('img');
        let content = document.createElement('div');
        let h1 = document.createElement('h1');
        let p = document.createElement('p');

        imgElement.appendChild(document.createTextNode(''));
        h1.appendChild(document.createTextNode(movies[slideIndex].name));
        p.appendChild(document.createTextNode(movies[slideIndex].des));
        content.appendChild(h1);
        content.appendChild(p);
        slider.appendChild(content);
        slider.appendChild(imgElement);
        carousel.appendChild(slider);

        imgElement.src = movies[slideIndex].image;
        slideIndex++;

        slider.className = 'slider';
        content.className = 'slider-content';
        h1.className = 'movie-title';
        p.className = 'movie-des';


        sliders.push(slider);

        if(sliders.length){
            sliders[0].style.marginLeft = `calc(-${100 * (sliders.length -2)}% - ${30 * (sliders.length - 2)}px)`;
        }


}

for(let i = 0; i < 6; i++){
    creatSlide();
};

setInterval(() => {
    creatSlide()
}, 8000);

// Video Cards

const videoCards = [...document.querySelectorAll('.video-card')];

videoCards.forEach(item => {
    item.addEventListener('mouseover', () =>{
        let video = item.children[1];
        video.play();
    })
    item.addEventListener('mouseleave', () =>{
        let video = item.children[1];
        video.pause();
    })
})

// card Slider
let cardContainers = [...document.querySelectorAll('.card-container')];
let preBtns = [...document.querySelectorAll('.pre-btn')];
let nxtBtns = [...document.querySelectorAll('.nxt-btn')];

cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtns[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth - 200;
    })
    preBtns[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth + 200;
    })
})
