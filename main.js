// Get slider items
let sliderImgs = Array.from(document.querySelectorAll(".slider-container img"));


// get number of slides
let slidesNumber = sliderImgs.length;

// set current slide
let currentSlide = 1;

// Slide number  element 
let slideNumber = document.getElementById('slide-number');

// previous and next buttons 
let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');

// handl prev and next btns
nextBtn.onclick = nextSlide;
prevBtn.onclick = prevSlide;  


function nextSlide() {
    console.log('next')
}

function prevSlide() {
    console.log('previous')
}

