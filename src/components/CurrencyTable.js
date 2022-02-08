import { BaseComponent } from './BaseComponent';

export class CurrencyTable extends BaseComponent {
  constructor() {
    super('table', ['table']);

    this.element.cellspacing = 0;

    this.addTable = this.addTable.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  addHead(checkedList, tHead = new BaseComponent('tr')) {
    tHead.innerHTML('<th>DATE</th>');

    checkedList.forEach((item) => {
      const th = new BaseComponent('th');
      th.innerHTML(item);
      tHead.appendElements(th.element);
    });

    return tHead.element;
  }

  addBody(params) {
    Object.keys(params[0]).forEach((date) => {
      const tr = new BaseComponent('tr');

      const td = new BaseComponent('td');
      td.innerHTML(date);

      tr.appendElements(td.element);

      this.addRow(params, date, tr);

      super.appendElements(tr.element);
    });
  }

  // eslint-disable-next-line class-methods-use-this
  addRow(params, date, tr) {
    const [response, checkedList] = params;

    checkedList.forEach((item) => {
      const tdNUMBER = new BaseComponent('td');

      tdNUMBER.innerHTML(response[date][item] || 1);
      tr.appendElements(tdNUMBER.element);
    });
  }

  addTable(rootElement, params) {
    super.innerHTML('');

    super.appendElements(this.addHead(params[1]));
    this.addBody(params);

    rootElement.append(this.element);
  }
}
