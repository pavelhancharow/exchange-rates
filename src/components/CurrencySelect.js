import { store } from '../data/store';
import { BaseComponent } from './BaseComponent';
import { MySelect } from './UI/MySelect';

class CurrencySelect extends BaseComponent {
  constructor({ select = new MySelect(store.getCurrencyData()) } = {}) {
    super('div', ['form-select']);

    this.select = select;

    this.innerHTML('<h2>Select Currency:</h2>');
    this.appendElements(this.select.element);
  }
}

export const select = new CurrencySelect();
