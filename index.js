const hamburger = document.querySelector('.hamburgers');
const popupMenu = document.querySelector('.popup-menu');
const closePopup = document.querySelector('.close');
const popupLinks = document.querySelectorAll('.popup-link');

hamburger.addEventListener('click', () => {
  popupMenu.classList.toggle('hide-popup');
});

closePopup.addEventListener('click', () => {
  popupMenu.classList.toggle('hide-popup');
});

popupLinks.forEach((popupLink) => {
  popupLink.addEventListener('click', () => {
    popupMenu.classList.add('hide-popup');
  });
});

// caed section

const card = [{
  title1: "Multi-Post Stories",
  image: "images-3/mobile.svg",
  title2: "Gain + Glory",
  technology: ["Ruby on Rails","CSS","Javascript","HTML"],
  button: "button"
},
{
  title1: "Multi-Post Stories",
  image: "images-3/mobile.svg",
  title2: "Gain + Glory",
  technology: ["Ruby on Rails","CSS","Javascript","HTML"],
  button: "button"
},
{
  title1: "Multi-Post Stories",
  image: "images-3/mobile.svg",
  title2: "Gain + Glory",
  technology: ["Ruby on Rails","CSS","Javascript","HTML"],
  button: "button"
},
{
  title1: "Multi-Post Stories",
  image: "images-3/mobile.svg",
  title2: "Gain + Glory",
  technology: ["Ruby on Rails","CSS","Javascript","HTML"],
  button: "button"
},
{
  title1: "Multi-Post Stories",
  image: "images-3/mobile.svg",
  title2: "Gain + Glory",
  technology: ["Ruby on Rails","CSS","Javascript","HTML"],
  button: "button"
},
{
  title1: "Multi-Post Stories",
  image: "images-3/mobile.svg",
  title2: "Gain + Glory",
  technology: ["Ruby on Rails","CSS","Javascript","HTML"],
  button: "button"
}

]
const cardSection = document.querySelector('.all-card-holders');

function generateCardSection(){
  card.forEach(card => {
    cardSection.innerHTML += 
    `
    <article class="card-holder">
            <div class="card">
                <div class="empty-box">
                 <img src="${card.image}">
                </div>
                <div class="multi-post-stories">
                    <h3>${card.title1} <br> ${card.title2}</h3>
                    <div class="programing-languages">
                        <ul>
                            <li>${card.technology[0]}</li>
                            <li>${card.technology[1]}</li>
                            <li>${card.technology[2]}</li>
                            <li>${card.technology[3]}</li>
                        </ul>
                    </div>
                    <button class="green-button interaction-btn">${card.button}</button>
                </div>
        </article>
        <div><img src="${card.image}"</div>
    `
  }
)}

generateCardSection()
