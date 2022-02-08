import { store } from '../data/store';
import { observer } from '../utils/observer';
import { BaseComponent } from './BaseComponent';

export class CurrencyTable extends BaseComponent {
  constructor() {
    super('table', ['table']);
    this._data = [];
    this.addTable = this.addTable.bind(this);
    observer.subscribe(this.addTable);
  }

  addTable() {
    this.innerHTML('');
    this._data = store.getData();

    this.appendElements(this.addHead());
    this.addBody();

    store.getRoot().append(this.element);
  }

  addHead(tHead = new BaseComponent('tr')) {
    tHead.innerHTML('<th>DATE</th>');

    this._data[1].forEach((item) => {
      const th = new BaseComponent('th');
      th.innerHTML(item);
      tHead.appendElements(th.element);
    });

    return tHead.element;
  }

  addBody() {
    Object.keys(this._data[0]).forEach((date) => {
      const tr = new BaseComponent('tr');
      const td = new BaseComponent('td');
      td.innerHTML(date);
      tr.appendElements(td.element);

      this.addRow(date, tr);
      this.appendElements(tr.element);
    });
  }

  addRow(date, tr) {
    const [response, currencies] = this._data;

    currencies.forEach((item) => {
      const tdNUMBER = new BaseComponent('td');

      tdNUMBER.innerHTML(response[date][item] || 1);
      tr.appendElements(tdNUMBER.element);
    });
  }
}
