import { BaseComponent } from '../BaseComponent';

export class MyInput extends BaseComponent {
  constructor(type = 'text', id = '', value = '') {
    super('input');

    this.element.setAttribute('type', type);
    this.element.setAttribute('id', id);
    this.element.setAttribute('value', value);
  }
}
