import { MyInput } from './UI/MyInput';
import { MyLabel } from './UI/MyLabel';

export class CurrencyLabels {
  constructor({
    from = new MyLabel('from', 'с', 'form-date'),
    dateFrom = new MyInput('date', 'from'),
    to = new MyLabel('to', 'по', 'form-date'),
    dateTo = new MyInput('date', 'to'),
  } = {}) {
    this.from = from;
    this.dateFrom = dateFrom;

    this.to = to;
    this.dateTo = dateTo;

    this.from.element.append(this.dateFrom.element);
    this.to.element.append(this.dateTo.element);
  }
}
