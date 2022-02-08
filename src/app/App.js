import { BaseComponent } from '../components/BaseComponent';
import { CurrencyForm } from '../components/CurrencyForm';
import { CurrencyTable } from '../components/CurrencyTable';
import { Observer } from '../utils/observer';

export class App extends BaseComponent {
  constructor(
    root,
    { form = new CurrencyForm(), table = new CurrencyTable() } = {}
  ) {
    super();
    this.element = root;

    this.form = form;
    this.table = table;

    this.subscribe.call(this);
    this.initRoot.call(this);
  }

  subscribe(observer = new Observer(this.element)) {
    observer.subcribe([this.form.sendForm, this.table.addTable]);

    this.form.element.addEventListener('submit', observer.getSubcriber);
  }

  initRoot() {
    super.innerHTML('<h1 class="title">Exchange Rates APP</h1>');
    super.appendElements(this.form.element);
  }
}
