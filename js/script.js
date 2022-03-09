const moreButton = document.querySelector('.header__more')
const moreListElement = document.querySelector('.header__more-list')

moreButton.addEventListener('click', function () {
   moreListElement.classList.toggle('active')
})

const townElement = document.querySelector('.header__town')
const setTownBlock = document.querySelector('.header__settown')
const popupImage = document.querySelector('.popup-background')

townElement.addEventListener('click', function () {
   setTownBlock.classList.toggle('active')
   bodyElement.classList.toggle('active')
   popupImage.classList.toggle('active')
})

const selectedTownElement = document.querySelector('.header__town')
const selectTownElement = document.querySelector('.header__settown-select')
const setTownButton = document.querySelector('.header__settown-set')
const bodyElement = document.querySelector('body')

setTownButton.addEventListener('click', function () {
   selectedTownElement.textContent = selectTownElement.value
   setTownBlock.classList.remove('active')
   bodyElement.classList.remove('active')
   popupImage.classList.remove('active')
})

const windowWidth = window.innerWidth
const whatsAppText = document.querySelector('.header__whatsapp-text')

if (windowWidth < 560) whatsAppText.textContent = 'Напишите в WhatsApp'

const headerCatalogButton = document.querySelector('.header__catalog')
const catalogListElement = document.querySelector('.header__cataloglist')
const headerBurgerElement = document.querySelector('.header__burger')

headerCatalogButton.addEventListener('click', function (event) {
   headerBurgerElement.classList.toggle('active')
   catalogListElement.classList.toggle('active')
})