import { MyInput } from './UI/MyInput';
import { MyLabel } from './UI/MyLabel';

class CurrencyLabels {
  constructor({
    from = new MyLabel('from', 'с', 'form-date'),
    inputFrom = new MyInput('date', 'from'),
    to = new MyLabel('to', 'по', 'form-date'),
    inputTo = new MyInput('date', 'to'),
  } = {}) {
    this.from = from;
    this.inputFrom = inputFrom.element;

    this.to = to;
    this.inputTo = inputTo.element;

    this.from.appendElements(this.inputFrom);
    this.to.appendElements(this.inputTo);
  }
}

export const labels = new CurrencyLabels();
