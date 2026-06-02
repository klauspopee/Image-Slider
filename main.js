// Get slider items
let sliderImgs = Array.from(document.querySelectorAll(".slider-container img"));


// get number of slides
let slidesCount = sliderImgs.length;


// set current slide
let currentSlide = 1;

// Slide number  element 
let slideNumberElement = document.getElementById('slide-number');


// previous and next buttons 
let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');

// handl prev and next btns
nextBtn.onclick = nextSlide;
prevBtn.onclick = prevSlide;  



// creat main ul element
let paginationElement = document.createElement('ul')

// add id to paginationElement
paginationElement.setAttribute('id','pagination-ul')

// ceat list items based on slides count
for (var i = 1 ; i <= slidesCount; i++) {

    let paginationItem = document.createElement('li');

    // set custom attr
    paginationItem.setAttribute('data-index', i)

    //set items content
    paginationItem.appendChild(document.createTextNode(i))


    // append items to the main ul list
    paginationElement.appendChild(paginationItem)
}



// add the created ul element to the page
document.getElementById('indicators').appendChild(paginationElement);

//Get the new created ul
let paginationCreatedUl = document.getElementById('pagination-ul');

//Get pagination items
let paginationBullets = Array.from(document.querySelectorAll('#pagination-ul li'))

// loop through all bullet items
for (i = 0; i < paginationBullets.length; i++) {

    paginationBullets[i].onclick = function () {

        currentSlide = parseInt(this.getAttribute('data-index'));

        theChecker();

    }
}

theChecker();

function nextSlide() {


    if (nextBtn.classList.contains('disabled')) {

        //do nothing
        return false

    } else {
        currentSlide++;
        theChecker();
    }
}

function prevSlide() {
    if (prevBtn.classList.contains('disabled')) {

        //do nothing
        return false

    } else {
        currentSlide--;
        theChecker();
    }
}


// Creat the cheker function
function theChecker() {
    
    // set the slide number
    slideNumberElement.textContent = `slide # ${currentSlide} of ${slidesCount}`

    removeAllActive();

    //set active class on current slide
    sliderImgs[currentSlide - 1].classList.add('active');

    //set active class on current pagination item
    paginationCreatedUl.children[currentSlide - 1].classList.add('active');
    
    //check if the current slide is the first
    if(currentSlide == 1) {

        //add disabled class on preveious button
        prevBtn.classList.add('disabled')
    
    } else {

        //remove disabled class from preveious button
        prevBtn.classList.remove('disabled')        
    
    }

    // check if the current slide is the last
        if(currentSlide == slidesCount) {

        //add disabled class on next button
        nextBtn.classList.add('disabled')
    
    } else {

        //remove disabled class from next button
        nextBtn.classList.remove('disabled')        
    
    }
}

// remove all active classes from images and pagination bullets
function removeAllActive () {
    
    // loop through images
    sliderImgs.forEach(function(img) {
        img.classList.remove('active');
    })

    //loop through pagination bullets
    paginationBullets.forEach(function(bullet) {
        bullet.classList.remove('active')
    })
}

