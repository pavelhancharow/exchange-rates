import { BaseComponent } from './BaseComponent';
import { MySelect } from './UI/MySelect';

export class CurrencySelect extends BaseComponent {
  constructor(params, ...classes) {
    super('div', classes);

    this.element.innerHTML = '<h2>Select Currency:</h2>';
    this.select = new MySelect(params, 'form-select__options');
    this.element.append(this.select.element);
  }
}
