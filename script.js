// Get an HTML element in JavaScript code
const signup = document.querySelector(".signup");
const signupModal = document.querySelector(".signup-modal-wrapper");
const closeButton = document.querySelector(".close-modal");

// function which shows the modal by changing the style of signupModal to "block"
const showModal = () => {
  signupModal.style.display = "block";
};

// function which hides the modal by changing the style of signupModal to "none"
const closeModal = () => {
  signupModal.style.display = "none";
};

// Call the showModal function when signup button is clicked
signup.addEventListener("click", () => {
  showModal();
});

// Call the closeModal function when close button on the modal is clicked
closeButton.addEventListener("click", () => {
  closeModal();
});

// Call the closeModal function when anywhere outside of the modal is clicked
window.addEventListener("click", () => {
  if (event.target === modal) {
    closeModal();
  }
});

const facebook = document.querySelector(".facebook");
const facebookModal = document.querySelector(".facebook-modal-wrapper");
const facecloseButton = document.querySelector(".faceclose-modal");
const faceshowModal = () => {
  facebookModal.style.display = "block";
};
const facecloseModal = () => {
  facebookModal.style.display = "none";
};
facebook.addEventListener("click", () => {
  faceshowModal();
});
facecloseButton.addEventListener("click", () => {
  facecloseModal();
});
window.addEventListener("click", () => {
  if (event.target === facemodal) {
    facecloseModal();
  }
});

const twitter = document.querySelector(".twitter");
const twitterModal = document.querySelector(".twitter-modal-wrapper");
const twittercloseButton = document.querySelector(".twitterclose-modal");
const twittershowModal = () => {
  twitterModal.style.display = "block";
};
const twittercloseModal = () => {
  twitterModal.style.display = "none";
};
twitter.addEventListener("click", () => {
  twittershowModal();
});
twittercloseButton.addEventListener("click", () => {
  twittercloseModal();
});
window.addEventListener("click", () => {
  if (event.target === twittermodal) {
    twittercloseModal();
  }
});