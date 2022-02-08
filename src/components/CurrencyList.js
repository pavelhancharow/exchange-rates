import { currencyData } from '../data/currencyData';
import { BaseComponent } from './BaseComponent';
import { MyInput } from './UI/MyInput';
import { MyLabel } from './UI/MyLabel';

export class CurrencyList extends BaseComponent {
  constructor(list = currencyData) {
    super('div', ['form-currency']);

    this.list = this.initList(list);
    this.initCurrencyList.call(this);
  }

  initCurrencyList() {
    super.innerHTML(
      '<h3 class="form-currency__title">Choose result currencies:</h3>'
    );
    super.appendElements(...this.list);
  }

  // eslint-disable-next-line class-methods-use-this
  initList(list) {
    return list.map((item) => {
      const div = new BaseComponent('div', ['form-currency__value']);
      const input = new MyInput('checkbox', item);
      const label = new MyLabel(item, item);

      div.appendElements(input.element, label.element);
      return div.element;
    });
  }

  getChecked() {
    const list = this.element.children;
    const array = [];

    for (let i = 0; i < list.length; i++) {
      const input = list[i].firstChild;

      if (input.checked) {
        array.push(input.nextSibling.textContent);
      }
    }

    return array;
  }
}
