import { ColorGenerator } from './colorGenerator';

export class KeyboardPainter {
  constructor() {
    this.textColor = null;
  }

  paintKeyboard(keyboardElement, keyboardKeys) {
    const colorGenerator = new ColorGenerator();

    const textColor = colorGenerator.getTextColor();
    this.textColor = textColor;

    const backgroundColor = colorGenerator.getBackgroundColor();

    if (keyboardElement === undefined) {
      keyboardElement = document.querySelector(".keyboard");
    }

    keyboardElement.style.backgroundColor = backgroundColor;

    if (keyboardKeys === undefined) {
      keyboardKeys = document.querySelectorAll(".keyboard__key");
    }

    keyboardKeys.forEach((el) => {
      el.style.color = textColor;
    });
  }

  paintKeyboardInfo(keyboardInfo) {
    if (keyboardInfo === undefined) {
      keyboardInfo = document.querySelector(".keyboard__info");
    }

    keyboardInfo.style.color = this.textColor;
  }
}