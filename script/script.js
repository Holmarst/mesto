const editButton = document.querySelector('.profile__edit-button');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const form = document.querySelector('.popup__container');
const nameInput = document.querySelector('.popup__input_type_name');
const aboutInput = document.querySelector('.popup__input_type_about');
const addButton = document.querySelector('.profile__add-button');
const closeAllButtons = document.querySelectorAll('.popup__close');
const popupAddCard = document.querySelector('.popup_act_add-card');
const popupEditProfile = document.querySelector('.popup_act_edit-profile');  
 

// popup / open /close

function openPopup(typeofPopup) {
  typeofPopup.classList.add('popup_opened');
  nameInput.value = profileTitle.textContent;
  aboutInput.value = profileSubtitle.textContent;
}

closeAllButtons.forEach(function (button) {
  button.addEventListener('click', function (evt) {
    evt.target.closest('.popup_opened').classList.remove('popup_opened');
  });
}); 

addButton.addEventListener('click', function () {
  openPopup(popupAddCard);
});

editButton.addEventListener('click', function () {
  openPopup(popupEditProfile);
});


// popap / edit profile

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

