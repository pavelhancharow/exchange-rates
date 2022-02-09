import { store } from '../data/store';
import { Error } from './Error';

export class NotFoundError extends Error {
  constructor(message = '') {
    super(message);
    this.name = 'Not Found Error';
  }

  showBodyError() {
    document.querySelector(
      'body'
    ).innerHTML = `<h2>${this.name}: ${this.message}</h2>`;
  }

  showTableError() {
    const table = store.getTableEl();
    table.innerHTML(`<h2>${this.name}: ${this.message}</h2>`);
    store.getRoot().append(table.element);
  }
}
