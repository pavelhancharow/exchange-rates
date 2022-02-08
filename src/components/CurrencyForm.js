import { getCurrency } from '../services/getCurrency';
import { currencyData } from '../data/currencyData';
import { BaseComponent } from './BaseComponent';
import { CurrencyList } from './CurrencyList';
import { CurrencySelect } from './CurrencySelect';
import { MyInput } from './UI/MyInput';
import { MyLabel } from './UI/MyLabel';

export class CurrencyForm extends BaseComponent {
  constructor() {
    super('form', ['form']);

    this.checkedList = null;
    this.response = null;

    this.labelFrom = new MyLabel('from', 'с', 'form-date');
    this.inputDateFrom = new MyInput('date', 'from');
    this.labelFrom.element.append(this.inputDateFrom.element);

    this.labelTo = new MyLabel('to', 'по', 'form-date');
    this.inputDateTo = new MyInput('date', 'to');
    this.labelTo.element.append(this.inputDateTo.element);

    this.select = new CurrencySelect(currencyData, 'form-select');
    this.currencyList = new CurrencyList(currencyData);

    this.submitBtn = new MyInput('submit', 'submit', 'Submit');

    this.element.append(
      this.labelFrom.element,
      this.labelTo.element,
      this.select.element,
      this.currencyList.element,
      this.submitBtn.element
    );

    this.sendForm = this.sendForm.bind(this);
  }

  async sendForm() {
    this.checkedList = this.currencyList.getChecked();

    if (!this.checkedList.length) {
      this.checkedList = currencyData;
    }

    const resultForm = {
      from: this.inputDateFrom.element.value,
      to: this.inputDateTo.element.value,
      currency: this.select.select.element.value,
    };

    this.response = await getCurrency(resultForm);

    return [this.response, this.checkedList];
  }
}
