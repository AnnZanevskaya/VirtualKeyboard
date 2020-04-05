import { ColorGenerator } from './colorGenerator';
import { createDomNode } from './helpers';

export class Keyboard {
  constructor() {
    this.keyboardElements = {
      main: null,
      keysContainer: null,
      keys: []
    };
  }

  generateKeyboard() {
    this.keyboardElements.main = createDomNode("div", "keyboard");
    this.keyboardElements.keysContainer = createDomNode("div", "keyboard__keys");

    this.keyboardElements.main.append(this.keyboardElements.keysContainer);
    document.body.append(this.keyboardElements.main);
  }

  paintKeyboard() {
    let colorGenerator = new ColorGenerator();

    let textColor = colorGenerator.getTextColor();
    let backgroundColor = colorGenerator.getBackgroundColor();

    this.keyboardElements.main.style.backgroundColor = backgroundColor;

    let keys = document.querySelectorAll(".keyboard__key");
    keys.forEach((el) => {
      el.style.color = textColor;
    });
  }
}