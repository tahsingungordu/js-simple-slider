var sliderInternal;
let cardItems = document.querySelectorAll('.card-slider-item');
var activeItem;
var settings = {
    delay: 2000, // slider speed (ms)
    auto: true // auto switch (boolean)
};

document.querySelector('.card-slider-item').classList.add('active');

function sliderTimer() {
    if (settings.auto) {
        sliderInternal = setInterval(function() {
            sliderAuto();
        }, settings.delay);
    }
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
            if (settings.auto) {
                clearInterval(sliderInternal);
            }
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

function init() {
    sliderTimer();

    document.querySelector('.card-footer').addEventListener('mouseover', sliderNav);
    document.querySelector('.card-footer').addEventListener('mouseout', sliderNav);
    document.querySelector('.card-footer').addEventListener('click', sliderNav);
}

init();