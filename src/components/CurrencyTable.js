import { BaseComponent } from './BaseComponent';

export class CurrencyTable extends BaseComponent {
  constructor() {
    super('table', ['table']);

    this.element.cellspacing = 0;

    this.addTable = this.addTable.bind(this);
  }

  addTable(rootElement, params) {
    this.element.innerHTML = '';

    const [response, checkedList] = params;

    const tHead = new BaseComponent('tr');
    tHead.element.innerHTML = '<th>DATE</th>';

    checkedList.forEach((item) => {
      const th = new BaseComponent('th');
      th.element.textContent = item;
      tHead.element.append(th.element);
    });

    this.element.append(tHead.element);

    const dates = Object.keys(response);

    dates.forEach((date) => {
      const tr = new BaseComponent('tr');

      const td = new BaseComponent('td');
      td.element.textContent = date;

      tr.element.append(td.element);

      checkedList.forEach((item) => {
        const tdNUMBER = new BaseComponent('td');

        tdNUMBER.element.textContent = response[date][item];
        tr.element.append(tdNUMBER.element);
      });

      this.element.append(tr.element);
    });

    rootElement.append(this.element);
  }
}
