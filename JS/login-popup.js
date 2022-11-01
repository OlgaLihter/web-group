let loginButton = document.querySelector(".login-button");
let loginPopup = document.querySelector(".login-popup");
let Page = document.querySelector(".page");

loginButton.addEventListener('click', showPopup)

function showPopup(evt){
    console.log(evt);
  evt.preventDefault();
  loginPopup.classList.toggle('show-popup');
  Page('popup-backdrop')
}