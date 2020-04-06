import {
  ColorGenerator
} from './colorGenerator';
import {
  Key
} from './key';
import {
  EN_KEY_LAYOUTS,
  EN_LINE_BREAK
} from './keyLayouts';

export class Keyboard {
  constructor() {
    this.keyboardElements = {
      main: null,
      keysContainer: null,
      keys: []
    };

    this.properties = {
      value: "",
      capsLock: false
    };
  }

  generateKeyboard() {
    this.keyboardElements.main = document.createElement("div");
    this.keyboardElements.main.classList.add("keyboard");

    this.keyboardElements.keysContainer = document.createElement("div");
    this.keyboardElements.keysContainer.classList.add("keyboard__keys");
    this.keyboardElements.keysContainer.append(this.createKeys());

    this.keyboardElements.keys = this.keyboardElements.keysContainer.querySelectorAll(".keyboard__key");

    this.keyboardElements.main.append(this.keyboardElements.keysContainer);

    document.body.append(this.keyboardElements.main);
  }

  paintKeyboard() {
    const colorGenerator = new ColorGenerator();

    const textColor = colorGenerator.getTextColor();
    const backgroundColor = colorGenerator.getBackgroundColor();
    this.keyboardElements.main.style.backgroundColor = backgroundColor;

    const keys = document.querySelectorAll(".keyboard__key");

    keys.forEach((el) => {
      el.style.color = textColor;
    });
  }

  createKeys() {
    const fragment = document.createDocumentFragment();

    EN_KEY_LAYOUTS.forEach((key) => {
      const keyElement = Key.createKey(key);
      fragment.append(keyElement);

      const insertLineBreak = EN_LINE_BREAK.indexOf(key) !== -1;

      if (insertLineBreak) {
        fragment.append(document.createElement("br"));
      }
    });

    return fragment;
  }
}