import { showPopup } from './index.js'

export class Card {
    constructor(name, link) { 
      this._name = name;
      this._alt = name;
      this._link = link;
    }
  
    _getTemplate() {
      const cardElement = document
      .querySelector('.card-template')
      .content
      .querySelector('.element')
      .cloneNode(true);
  
      return cardElement;
    }

    generateCard() {
      this._element = this._getTemplate();

      this._element.querySelector('.element__title').textContent = this._name;
      this._element.querySelector('.element__pic').src = this._link;

      this._eventListeners();
      
      return this._element;
    }

    _eventListeners() {

      this._element.querySelector('.element__trash').addEventListener(
        'click', () => {
          this._element.remove();
        });

      this._element.querySelector('.element__like').addEventListener(
        'click', () => {
          this._element.querySelector('.element__like').classList.toggle('element__like_active');
        });

      this._element.querySelector('.element__pic').addEventListener(
        'click', () => {
          const popupPicOpen = document.querySelector('.popup_act_pic-open');
          const picOpen = document.querySelector('.pic-open__img');
          showPopup(popupPicOpen);
          picOpen.src = this._link;
          picOpen.alt = this._alt;
          document.querySelector('.pic-open__description').textContent = this._alt;
        });
    }

  }

