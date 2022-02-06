var delayInMilliseconds = 2000; //2 second
var sliderInternal;

let cardItems = document.querySelectorAll('.card-slider-item');
let activeItem;

function sliderTimer() {
    sliderInternal = setInterval(function() {
        sliderAuto();
    }, delayInMilliseconds);
}

function sliderAuto() {
    activeItem = document.querySelector('.card-slider-item.active');

    if (activeItem === null) {
        cardItems[0].classList.add('active');
    } else {
        if (activeItem.nextElementSibling.className !== 'card-footer') {
            activeItem.classList.remove('active');
            activeItem.nextElementSibling.classList.add('active');
        } else {
            activeItem.classList.remove('active');
            cardItems[0].classList.add('active');
        }
    }
}

function sliderLeft(e) {
    activeItem = document.querySelector('.card-slider-item.active');

    if (activeItem.previousElementSibling !== null) {
        activeItem.classList.remove('active');
        activeItem.previousElementSibling.classList.add('active');
    } else {
        activeItem.classList.remove('active');
        cardItems[cardItems.length - 1].classList.add('active');
    }
}

function sliderRight(e) {
    activeItem = document.querySelector('.card-slider-item.active');

    if (activeItem.nextElementSibling.className !== 'card-footer') {
        activeItem.classList.remove('active');
        activeItem.nextElementSibling.classList.add('active');
    } else {
        activeItem.classList.remove('active');
        cardItems[0].classList.add('active');
    }
}

function sliderNav(e) {
    if (e.target.className === 'btn btn-success') {
        if (e.type == 'mouseover') {
            clearInterval(sliderInternal);
        }

        if (e.type == 'mouseout') {
            sliderTimer();
        }

        if (e.type == 'click') {
            if (e.target.id === 'js-btn-right') {
                sliderRight();
            }

            if (e.target.id === 'js-btn-left') {
                sliderLeft();
            }
        }
    }
}

sliderTimer();

document.querySelector('.card-footer').addEventListener('mouseover', sliderNav);
document.querySelector('.card-footer').addEventListener('mouseout', sliderNav);
document.querySelector('.card-footer').addEventListener('click', sliderNav);