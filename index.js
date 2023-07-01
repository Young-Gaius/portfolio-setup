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

const card = [
  {
    id: 0,
    title1: 'Multi-Post Stories',
    image: 'images-3/mobile.svg',
    title2: 'Gain + Glory',
    popupName: 'Keeping track of hundreds of components',
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
     Fugit omnis assumenda harum accusantium nisi at expedita illo vitae. Ducimus 
     molestiae doloribus accusantium iste perspiciatis porro voluptatem qui, quasi 
     soluta mollitia!
     Lorem, ipsum dolor sit amet consectetur adipisicing elit.
     Fugit omnis assumenda harum accusantium nisi at expedita illo vitae. Ducimus 
     molestiae doloribus accusantium iste perspiciatis porro voluptatem qui, quasi 
     soluta mollitia!`,
    technology: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    button: 'See Project',
    live_version: 'https://young-gaius.github.io/portfolio-setup/',
    source: 'https://github.com/Young-Gaius/portfolio-setup',
  },
  {
    id: 1,
    title1: 'Multi-Post Stories',
    image: 'images-3/mobile.svg',
    title2: 'Gain + Glory',
    popupName: 'Keeping track of hundreds of components',
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
   Fugit omnis assumenda harum accusantium nisi at expedita illo vitae. Ducimus 
   molestiae doloribus accusantium iste perspiciatis porro voluptatem qui, quasi 
   soluta mollitia!
   Lorem, ipsum dolor sit amet consectetur adipisicing elit.
   Fugit omnis assumenda harum accusantium nisi at expedita illo vitae. Ducimus 
   molestiae doloribus accusantium iste perspiciatis porro voluptatem qui, quasi 
   soluta mollitia!`,
    technology: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    button: 'See Project',
    live_version: 'https://young-gaius.github.io/portfolio-setup/',
    source: 'https://github.com/Young-Gaius/portfolio-setup',
  },
  {
    id: 2,
    title1: 'Multi-Post Stories',
    image: 'images-3/mobile.svg',
    title2: 'Gain + Glory',
    popupName: 'Keeping track of hundreds of components',
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
   Fugit omnis assumenda harum accusantium nisi at expedita illo vitae. Ducimus 
   molestiae doloribus accusantium iste perspiciatis porro voluptatem qui, quasi 
   soluta mollitia!
   Lorem, ipsum dolor sit amet consectetur adipisicing elit.
   Fugit omnis assumenda harum accusantium nisi at expedita illo vitae. Ducimus 
   molestiae doloribus accusantium iste perspiciatis porro voluptatem qui, quasi 
   soluta mollitia!`,
    technology: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    button: 'See Project',
    live_version: 'https://young-gaius.github.io/portfolio-setup/',
    source: 'https://github.com/Young-Gaius/portfolio-setup',
  },
  {
    id: 3,
    title1: 'Multi-Post Ss',
    image: 'images-3/mobile.svg',
    title2: 'Gain + Glory',
    popupName: 'Keeping track of hundreds of components',
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
   Fugit omnis assumenda harum accusantium nisi at expedita illo vitae. Ducimus 
   molestiae doloribus accusantium iste perspiciatis porro voluptatem qui, quasi 
   soluta mollitia!
   Lorem, ipsum dolor sit amet consectetur adipisicing elit.
   Fugit omnis assumenda harum accusantium nisi at expedita illo vitae. Ducimus 
   molestiae doloribus accusantium iste perspiciatis porro voluptatem qui, quasi 
   soluta mollitia!`,
    technology: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    button: 'See Project',
    live_version: 'https://young-gaius.github.io/portfolio-setup/',
    source: 'https://github.com/Young-Gaius/portfolio-setup',
  },
  {
    id: 4,
    title1: 'Multi-Post Stories',
    image: 'images-3/mobile.svg',
    title2: 'Gain + Glory',
    popupName: 'Keeping track of hundreds of components',
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
   Fugit omnis assumenda harum accusantium nisi at expedita illo vitae. Ducimus 
   molestiae doloribus accusantium iste perspiciatis porro voluptatem qui, quasi 
   soluta mollitia!
   Lorem, ipsum dolor sit amet consectetur adipisicing elit.
   Fugit omnis assumenda harum accusantium nisi at expedita illo vitae. Ducimus 
   molestiae doloribus accusantium iste perspiciatis porro voluptatem qui, quasi 
   soluta mollitia!`,
    technology: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    button: 'See Project',
    live_version: 'https://young-gaius.github.io/portfolio-setup/',
    source: 'https://github.com/Young-Gaius/portfolio-setup',
  },
  {
    id: 5,
    title1: 'Multi-Post Stories',
    image: 'images-3/mobile.svg',
    title2: 'Gain + Glory',
    popupName: 'Keeping track of hundreds of components',
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
   Fugit omnis assumenda harum accusantium nisi at expedita illo vitae. Ducimus 
   molestiae doloribus accusantium iste perspiciatis porro voluptatem qui, quasi 
   soluta mollitia!
   Lorem, ipsum dolor sit amet consectetur adipisicing elit.
   Fugit omnis assumenda harum accusantium nisi at expedita illo vitae. Ducimus 
   molestiae doloribus accusantium iste perspiciatis porro voluptatem qui, quasi 
   soluta mollitia!`,
    technology: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    button: 'See Project',
    live_version: 'https://young-gaius.github.io/portfolio-setup/',
    source: 'https://github.com/Young-Gaius/portfolio-setup',
  },

];
const cardSection = document.querySelector('.all-card-holders');
const popup = document.querySelector('.popup');

const hidePopup = () => {
  popup.innerHTML = '';
};

const showPopup = (id) => {
  popup.innerHTML = `
  <article class="popup-card-holder">
      <div class="popup-card">
        <p class="popup-close">X</p>
        <button onclick="hidePopup()" class="closeButton"><img src="images-3/closeBtn.svg"></button>
        <div class="popup-img-box">
          <img src="${card[id].image}" />
        </div>
        <div class="popup-body">
          <div class='popup-head' >
            <h3>${card[id].popupName}</h3>
            <div class='popup-links-desktop'>
              <a href="${card[id].live_version}" class="green-button interaction-btn">see live</a>
              <a href="${card[id].source}"  class="green-button interaction-btn">see source</a>
            </div>
          </div>
            <div class="popup-programing-languages">
                <ul>
                    <li>${card[id].technology[0]}</li>
                    <li>${card[id].technology[1]}</li>
                    <li>${card[id].technology[2]}</li>
                    <li>${card[id].technology[3]}</li>
                </ul>
            </div>
            <p>${card[id].description}</p>
            <div class='popup-links-mobile'>
              <a href="${card[id].live_version}" class="green-button interaction-btn">see live</a>
              <a href="${card[id].source}"  class="green-button interaction-btn">see source</a>
            </div>
        </div>
  </article>  
`;
  const closeBtn = document.querySelector('.popup-close');
  closeBtn.addEventListener('click', () => {
    hidePopup();
  });
};

function generateCardSection() {
  card.forEach((card) => {
    cardSection.innerHTML
      += `
    <article class="card-holder">
            <div class="card">
                <div class="empty-box">
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
                    <button  id="${card.id}" class="green-button interaction-btn btns">${card.button}</button>
                </div>
        </article>
        
    `;
    // <div><img src="${card.image}"</div>
  });
}

generateCardSection();

const buttons = document.querySelectorAll('.btns');
buttons.forEach((btns) => {
  btns.addEventListener('click', () => {
    showPopup(parseInt(btns.id, 10));
  });
});

// const formInput = document.querySelector(".form");
// const inputEmail = document.querySelector(".input-email");
// const errorMessage = document.querySelector(".error-message");
// const inputContainer = document.querySelector(".input-container");


// function validateEmail() {
//   var emailInput = document.querySelector(".input-email");
//   var email = input-email.value;
//   if (email !== email.toLowerCase()) {
//       var errorMessage = document.querySelector(".error-message");
//       errorMessage.textContent = "Please enter the email in lowercase.";
//       return false; 
//   }
//   return true; 
// }

// function validateEmail() {
//   var emailInput = document.getElementById("emailInput");
//   var email = emailInput.value;
//   if (email !== email.toLowerCase()) {
//       var errorElement = document.getElementById("error");
//       errorElement.textContent = "Please enter the email in lowercase.";
//       return false; 
//   }
//   return true; 
// }

// const form = document.getElementById("form")
// const email = document.querySelector("#input-email")
// const error = document.querySelector("#error-message")

// form.addEventListener("submit", (event) => {
//   if(email.value !== email.value.toLowerCase()){
//     event.preventDefault();
//     error.textContent = "please fill in an email address with lowercase";
//   }
// } );


