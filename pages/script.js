let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let popup = document.querySelector('.popup');
let form = document.querySelector('.popup__container');

function openPopup() {
  popup.classList.add('popup_opened');
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault(); 

  let nameInput = document.querySelector('.popup__input_type_name');
  let aboutInput = document.querySelector('.popup__input_type_about');

  nameInput.textContent = nameInput.value;
  profileTitle.textContent = nameInput.textContent;
  aboutInput.textContent = aboutInput.value;
  profileSubtitle.textContent = aboutInput.textContent;

  if (nameInput.textContent === '') {
    profileTitle.textContent = "Имя";
  }

  if (aboutInput.textContent === '') {
    profileSubtitle.textContent = "Пока нет описания";
  }

  closePopup();
}

form.addEventListener('submit', formSubmitHandler);
editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);

