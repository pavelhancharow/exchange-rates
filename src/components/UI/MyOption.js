import { BaseComponent } from '../BaseComponent';

export class MyOption extends BaseComponent {
  constructor(option, selected = false) {
    super('option');

    this.element.value = option;
    this.element.selected = selected;
    this.element.textContent = option;
  }
}
