import { currencyData } from '../data/currencyData';
import { BaseComponent } from './BaseComponent';
import { MySelect } from './UI/MySelect';

export class CurrencySelect extends BaseComponent {
  constructor({ select = new MySelect(currencyData) } = {}) {
    super('div', ['form-select']);

    this.select = select;

    super.innerHTML('<h2>Select Currency:</h2>');
    super.appendElements(this.select.element);
  }
}
