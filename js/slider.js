const sliderContainer = document.querySelector('.slider__container')
const rightArrowButton = document.querySelector('.slider__arrow-right')
const leftArrowButton = document.querySelector('.slider__arrow-left')

function scrollRight() {
   sliderContainer.scrollTo({
      top: 0,
      left: sliderContainer.scrollLeft + sliderContainer.clientWidth,
      behavior: 'smooth',
   });
}

function scrollLeft() {
   sliderContainer.scrollTo({
      top: 0,
      left: sliderContainer.scrollLeft - sliderContainer.clientWidth,
      behavior: 'smooth',
   });
}

leftArrowButton.addEventListener('click', scrollLeft)
rightArrowButton.addEventListener('click', scrollRight)

setInterval(scrollRight, 5000)
setInterval(scrollLeft, 5000)