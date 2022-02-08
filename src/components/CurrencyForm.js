import { getCurrency } from '../services/getCurrency';
import { store } from '../data/store';
import { BaseComponent } from './BaseComponent';
import { currencies } from './CurrencyList';
import { select } from './CurrencySelect';
import { submitBtn } from './UI/MyInput';
import { labels } from './CurrencyLabels';
import { observer } from '../utils/observer';

export class CurrencyForm extends BaseComponent {
  constructor() {
    super('form', ['form']);

    this.sendForm = this.sendForm.bind(this);
    observer.subscribe(this.sendForm);

    this.addFormListener();
    this.initTable();
  }

  initTable() {
    const { from, to } = labels;

    this.appendElements(
      from.element,
      to.element,
      select.element,
      currencies.element,
      submitBtn.element
    );
  }

  addFormListener() {
    this.element.addEventListener('submit', async (e) => {
      e.preventDefault();

      await observer.broadcast();
    });
  }

  // eslint-disable-next-line class-methods-use-this
  async sendForm() {
    let checkedList = currencies.getChecked();

    if (!checkedList.length) {
      checkedList = store.getCurrencyData();
    }

    const resultForm = {
      from: labels.inputFrom.value,
      to: labels.inputTo.value,
      currency: select.select.element.value,
    };

    const response = await getCurrency(resultForm);

    store.setData([response, checkedList]);
  }
}
