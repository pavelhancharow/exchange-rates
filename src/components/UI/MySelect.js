import { BaseComponent } from '../BaseComponent';
import { MyOption } from './MyOption';

export class MySelect extends BaseComponent {
  constructor(options = ['EUR', 'USD'], ...classes) {
    super('select', classes);

    this.options = options.map((option) => {
      const el =
        option === 'USD' ? new MyOption(option, true) : new MyOption(option);
      return el.element;
    });

    this.element.append(...this.options);
  }
}
