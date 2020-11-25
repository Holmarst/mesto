let edit = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let add = document.querySelector('.profile__add-button');
let close = document.querySelector('.popup__close');
let save = document.querySelector('.popup__button');
let name = document.querySelector('.popup__input_type_name');
let about = document.querySelector('.popup__input_type_about');

function openPopup() {
  popup.classList.add('popup_opened');
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

edit.addEventListener('click', openPopup);
close.addEventListener('click', closePopup);
