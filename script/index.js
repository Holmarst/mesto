import { Card } from './Card.js'

// 6 cards

const initialCards = [
  {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const nameInput = document.querySelector('.popup__input_type_name');
const aboutInput = document.querySelector('.popup__input_type_about');
const placeInput = document.querySelector('.popup__input_input_name');
const linkInput = document.querySelector('.popup__input_input_link');

const addButton = document.querySelector('.profile__add-button');
const editButton = document.querySelector('.profile__edit-button');
const closeAllButtons = document.querySelectorAll('.popup__close');
const addCardButton = document.querySelector('.popup__button_act_add-card');
const editProfileButton = document.querySelector('.popup__button');


const popupAddCard = document.querySelector('.popup_act_add-card');
const popupEditProfile = document.querySelector('.popup_act_edit-profile');
// const popupPicOpen = document.querySelector('.popup_act_pic-open');

const formPopup = document.querySelector('.popup__form');
const formAddCard = document.querySelector('.popup__form_act_add-card');

const cardContainer = document.querySelector('.elements__container');
const cardTemplate = document.querySelector('.card-template');

// popup / open /close

export function showPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeEsc);
  document.addEventListener('click', closeOverlay);
}

function openPopupAddCard() {
  showPopup(popupAddCard);
  formAddCard.reset();
  setButtonState(addCardButton, formAddCard.checkValidity(), validationConfig);
  hideError(popupAddCard, placeInput, validationConfig);
  hideError(popupAddCard, linkInput, validationConfig);
}

function openPopupEditProfile() {
  showPopup(popupEditProfile);
  nameInput.value = profileTitle.textContent;
  aboutInput.value = profileSubtitle.textContent;
  setButtonState(editProfileButton, formPopup.checkValidity(), validationConfig);
  hideError(formPopup, nameInput, validationConfig);
  hideError(formPopup, aboutInput, validationConfig);
}

function editProfileInfo (evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = aboutInput.value;
  removePopup(evt);
}

function removePopup(evt) {
  const popupOpened = evt.target.closest('.popup_opened');
  closePopup(popupOpened);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeEsc);
  document.removeEventListener('click', closeOverlay);
}

function closeEsc(evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

function closeOverlay(evt) {
  if (evt.target.classList.contains('popup_opened')) {
    closePopup(evt.target);
  }
}

closeAllButtons.forEach(function (button) {
  button.addEventListener('click', removePopup);
});

editButton.addEventListener('click', function () {
  openPopupEditProfile();
});

addButton.addEventListener('click', function () {
  openPopupAddCard();
});

formPopup.addEventListener('submit', editProfileInfo);


const newCard = () => {
  initialCards.forEach(item => {
    const card = new Card(item.name, item.link);
    const cardElement = card.generateCard();
    document.querySelector('.elements__container').append(cardElement);
  });
}

newCard();