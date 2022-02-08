import { getCurrency } from '../services/getCurrency';
import { currencyData } from '../data/currencyData';
import { BaseComponent } from './BaseComponent';
import { CurrencyList } from './CurrencyList';
import { CurrencySelect } from './CurrencySelect';
import { MyInput } from './UI/MyInput';
import { CurrencyLabels } from './CurrencyLabels';

export class CurrencyForm extends BaseComponent {
  constructor({
    labels = new CurrencyLabels(),
    select = new CurrencySelect(),
    currencyList = new CurrencyList(),
    submitBtn = new MyInput('submit', 'submit', 'Submit'),
  } = {}) {
    super('form', ['form']);

    this.checkedList = null;
    this.response = null;

    this.labels = labels;
    this.select = select;
    this.currencyList = currencyList;
    this.sendForm = this.sendForm.bind(this);

    super.appendElements(
      this.labels.from.element,
      this.labels.to.element,
      this.select.element,
      this.currencyList.element,
      submitBtn.element
    );
  }

  async sendForm() {
    this.checkedList = this.currencyList.getChecked();

    if (!this.checkedList.length) {
      this.checkedList = currencyData;
    }

    const resultForm = {
      from: this.labels.dateFrom.element.value,
      to: this.labels.dateTo.element.value,
      currency: this.select.select.element.value,
    };

    this.response = await getCurrency(resultForm);

    return [this.response, this.checkedList];
  }
}
