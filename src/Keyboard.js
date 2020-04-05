export class Keyboard {
  constructor() {
    this.keyboardElements = {
      main: null,
      keysContainer: null,
      keys: []
    };
  }

  generateKeyboard() {
    this.keyboardElements.main = this.createDomNode(this.element.main, "div", "keyboard");
    this.keyboardElements.keysContainer = this.createDomNode(this.keyboardElements.main, "div", "keyboard__keys");
  }

  createDomNode(node, element, ...classes) {
    node = document.createElement(element);
    node.classList.add(...classes);

    return node;
  }
}