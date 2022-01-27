import { BaseComponent } from '../BaseComponent';

export class MyLabel extends BaseComponent {
  constructor(forId = '', text = '', ...classes) {
    super('label', classes);

    this.element.setAttribute('for', forId);
    this.element.textContent = text;
  }
}
