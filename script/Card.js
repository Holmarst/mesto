export class Card {
    constructor(link, name) { // добавили второй параметр
        this._link = link;
        this._name = name;
    }
  
    _getTemplate() {
    const cardElement = document
      .querySelector('.card-template')
      .content
      .querySelector('.card')
      .cloneNode(true);
  
    return cardElement;
    }

    generateCard() {
        this._element = this._getTemplate();

        this._getTemplate.querySelector('.card__image').src = this._link;
        this._getTemplate.querySelector('.card__subtitle').textContent = this._name;

        return this._element;
    }
}