const hamburger = document.querySelector('.hamburgers')
const popupMenu = document.querySelector('.popup-menu')
const closePopup = document.querySelector('.close')
const popupLinks = document.querySelectorAll('.popup-link')

hamburger.addEventListener('click', () => {
  popupMenu.classList.toggle('hide-popup')
})

closePopup.addEventListener('click', () => {
  popupMenu.classList.toggle('hide-popup')
})

popupLinks.forEach( popupLink => {
  popupLink.addEventListener('click', () => {
    popupMenu.classList.add('hide-popup')
  })
})