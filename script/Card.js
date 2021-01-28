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

      return this._element;
    }
}