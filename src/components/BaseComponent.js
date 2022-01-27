export class BaseComponent {
  constructor(tag = 'div', styles = []) {
    this.element = document.createElement(tag);
    this.element.classList.add(...styles);
  }
}
