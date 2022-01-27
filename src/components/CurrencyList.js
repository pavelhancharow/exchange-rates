import { BaseComponent } from './BaseComponent';
import { MyInput } from './UI/MyInput';
import { MyLabel } from './UI/MyLabel';

export class CurrencyList extends BaseComponent {
  constructor(list) {
    super('div', ['form-currency']);

    this.element.innerHTML =
      '<h3 class="form-currency__title">Choose result currencies:</h3>';

    this.list = list.map((item) => {
      const div = new BaseComponent('div', ['form-currency__value']);
      const input = new MyInput('checkbox', item);
      const label = new MyLabel(item, item);
      div.element.append(input.element, label.element);
      return div.element;
    });

    this.element.append(...this.list);
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
