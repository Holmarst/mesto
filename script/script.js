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

const popupAddCard = document.querySelector('.popup_act_add-card');
const popupEditProfile = document.querySelector('.popup_act_edit-profile');
const popupPicOpen = document.querySelector('.popup_act_pic-open');

const formPopup = document.querySelector('.popup__form');
const formAddCard = document.querySelector('.popup__form_act_add-card');

const cardContainer = document.querySelector('.elements__container');
const cardTemplate = document.querySelector('.card-template');

// popup / open /close

const showPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeEsc);
  popup.addEventListener('click', closeOverlay);
};

function openPopupEditProfile() {
  
  showPopup(popupEditProfile);
  nameInput.value = profileTitle.textContent;
  aboutInput.value = profileSubtitle.textContent;
}

function openPopupAddCard() {
  showPopup(popupAddCard);
  formAddCard.reset();
}

function removePopapOpened() {
  const popupOpened = document.querySelector('.popup_opened');
  popupOpened.classList.remove('popup_opened');
}

function closeEsc(evt) {
  if (evt.key === 'Escape') {
    removePopapOpened();
    document.removeEventListener('keydown', closeEsc);
  }
}

function closeOverlay(evt) {
  if (evt.target.classList.contains('popup')) {
    removePopapOpened();
  }
}

function closePopup(evt) {
  evt.target.closest('.popup_opened').classList.remove('popup_opened');
}

closeAllButtons.forEach(function (button) {
  button.addEventListener('click', closePopup);
});

editButton.addEventListener('click', function () {
  openPopupEditProfile();
});

addButton.addEventListener('click', function () {
  openPopupAddCard();
});

// popap / edit profile

function editProfileInfo (evt) {
  evt.preventDefault(); 
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = aboutInput.value;
  closePopup(evt);
}

// render cards

function renderCards() {
  const listCards = initialCards.map(composeItem);
  cardContainer.append(...listCards);
}

function composeItem(item) {
  const newCardItem = cardTemplate.content.cloneNode(true);
  
  const titleItem = newCardItem.querySelector('.element__title');
  titleItem.textContent = item.name;
  const picItem = newCardItem.querySelector('.element__pic');
  picItem.src = item.link;
  picItem.alt = item.name;

  const like = newCardItem.querySelector('.element__like');
  like.addEventListener('click', likeCard);
  const trash = newCardItem.querySelector('.element__trash');
  trash.addEventListener('click', removeCard);

  const text = titleItem.textContent;
  const img = picItem.src;

  picItem.addEventListener('click', () => {
    openPic(text, img);
  });

  return newCardItem;
}

// add card

function addNewItem(evt){
  evt.preventDefault();
  const inputText = placeInput.value;
  const inputLink = linkInput.value;
  const newItemHTML = composeItem({ name: inputText, link: inputLink });
  cardContainer.prepend(newItemHTML);
  const input = document.querySelector('.popup__input');
  input.addEventListener('change', function (evt) {
    if (evt.key === 'Enter') {
      addNewItem;}
  });
  closePopup(evt);
}

// remove card

function removeCard(evt){
  evt.target.closest('.element').remove();
}

// like card

function likeCard(evt){
  evt.target.classList.toggle('element__like_active');
}

// open pic

function openPic(text, img){
  showPopup(popupPicOpen);
  const picOpen = document.querySelector('.pic-open__img');
  picOpen.src = img;
  picOpen.alt = text;
  document.querySelector('.pic-open__description').textContent = text;

}

// render + listeners

renderCards();
formPopup.addEventListener('submit', editProfileInfo);
formAddCard.addEventListener('submit', addNewItem);