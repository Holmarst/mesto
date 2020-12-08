let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let popup = document.querySelector('.popup');
let form = document.querySelector('.popup__container');
let nameInput = document.querySelector('.popup__input_type_name');
let aboutInput = document.querySelector('.popup__input_type_about');
let like = document.querySelector('.element__like');

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

const cardContainer = document.querySelector('.elements__container');


function renderCards() {
  const listCards = initialCards.map(addCard);
  cardContainer.append(...listCards);
}

function addCard(card) {
  const cardTemplate = document.getElementById('card-template').content;
  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector('.element__title').textContent = card.name;
  cardElement.querySelector('.element__pic').src = card.link;
  cardElement.querySelector('.element__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active');
  });
  cardContainer.append(cardElement);
  return card;
}

renderCards();

