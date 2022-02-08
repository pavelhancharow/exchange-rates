import { BaseComponent } from '../components/BaseComponent';
import { CurrencyForm } from '../components/CurrencyForm';
import { CurrencyTable } from '../components/CurrencyTable';
import { store } from '../data/store';

export class App extends BaseComponent {
  constructor(
    root,
    { form = new CurrencyForm(), table = new CurrencyTable() } = {}
  ) {
    super();
    this.element = root;
    this.form = form;
    this.table = table;

    this.initRoot.call(this);
  }

  initRoot() {
    store.setRoot(this.element);
    this.innerHTML('<h1 class="title">Exchange Rates APP</h1>');
    this.appendElements(this.form.element);
  }
}
