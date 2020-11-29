let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let popup = document.querySelector('.popup');
let form = document.querySelector('.popup__container');
let nameInput = document.querySelector('.popup__input_type_name');
let aboutInput = document.querySelector('.popup__input_type_about');

function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = profileTitle.textContent;
  aboutInput.value = profileSubtitle.textContent;
  }

function closePopup() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault(); 

  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = aboutInput.value;

  if (nameInput.value === '') {
    profileTitle.textContent = "Имя";
  }

  if (aboutInput.value === '') {
    profileSubtitle.textContent = "Пока нет описания";
  }

  closePopup();
}

form.addEventListener('submit', formSubmitHandler);
editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);

