export class BaseComponent {
  constructor(tag = 'div', styles = []) {
    this.element = document.createElement(tag);
    this.element.classList.add(...styles);
  }

  appendElements(...elems) {
    this.element.append(...elems);
  }

  innerHTML(html) {
    this.element.innerHTML = html;
  }
}
