import { CurrencyForm } from '../components/CurrencyForm';
import { CurrencyTable } from '../components/CurrencyTable';
import { Observer } from '../utils/observer';

export class App {
  constructor(rootElement) {
    this.rootElement = rootElement;

    this.observer = new Observer(this.rootElement);

    this.form = new CurrencyForm(this.rootElement);
    this.observer.subcribe(this.form.sendForm);

    this.table = new CurrencyTable();
    this.observer.subcribe(this.table.addTable);

    this.rootElement.innerHTML = '<h1 class="title">Exchange Rates API</h1>';
    this.rootElement.append(this.form.element);

    this.form.element.addEventListener('submit', this.observer.getSubcriber);
  }
}
