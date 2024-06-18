let themeButton = document.getElementById("theme-button");

const toggleDarkMode = () => {

  document.body.classList.toggle("dark-mode");

}
themeButton.addEventListener("click", toggleDarkMode);

const addSignature = (person) => {

  const newSignature = document.createElement('p');
  newSignature.textContent = `🖊️ ${person.name} from ${person.hometown} supports this.`;

  const signaturesSection = document.querySelector('.signatures');
  signaturesSection.appendChild(newSignature);
};

const signNowButton = document.getElementById('sign-now-button');


function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
// TODO: Remove the click event listener that calls addSignature()

// TODO: Complete validation form

const validateForm = () => {

  let containsErrors = false;

  var petitionInputs = document.getElementById("sign-petition").elements;

  let person = {
    name: petitionInputs['name'].value, // accesses and saves value of first input
    hometown: petitionInputs['hometown'].value,
    email: petitionInputs['email'].value,
  }

  // TODO: Loop through all inputs
  for (const key in person) {
    if (person[key].length < 2) {
        containsErrors = true;
      petitionInputs[Object.keys(person).indexOf(key)].classList.add('error');
    } else {
      petitionInputs[Object.keys(person).indexOf(key)].classList.remove('error');

    }
  }
  if (containsErrors == false) {
    addSignature(person);
    for (let i = 0; i < petitionInputs.length; i++) {
        petitionInputs[i].value = "";
        containsErrors = false;

    }
    toggleModal(person);
  }
  

}

signNowButton.addEventListener('click', validateForm);


let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease'
};

const revealableContainers = document.querySelectorAll('.revealable');

let reveal = () => {
    for (let i = 0; i < revealableContainers.length; i++) {
        let windowHeight = window.innerHeight;
        let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
      if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
        revealableContainers[i].classList.add('active');
      } else {
        revealableContainers[i].classList.remove('active');
      }

    }
}
window.addEventListener('scroll', reveal);


function toggleModal (person) {
  const modal = document.getElementById("thanks-modal");
  const modalContent = document.getElementById("thanks-modal-content");
  const intervalId = setInterval(scaleImage, 500);
  modal.style.display = "flex";
  modalContent.textContent = `Fantastic! Huge thanks to ${person.name} from ${person.hometown} for your exceptional support! Your signature has been successfully added.`;

  setTimeout(() => {
    modal.style.display = "none";
    clearInterval(intervalId);
  }, 4000)

  
  
}

let scaleFactor = 1;
const modalImage = document.getElementById("my-image");

function scaleImage() {
    if(scaleFactor === 1) {
      scaleFactor = 0.8;    
    } else {
      scaleFactor = 1;
    }
  modalImage.style.transform = `scale(${scaleFactor})`;
}

//Google Map initialization
function initialize() {
  var mapOptions = {
    zoom: 10,
    center: { lat: 40.7128, lng: -74.0060 } // Example coordinates for New York City
  };
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);

  var marker = new google.maps.Marker({
    position: { lat: 40.7128, lng: -74.0060 }, // Example coordinates
    map: map,
    title: 'Hello World!'
  });
}

