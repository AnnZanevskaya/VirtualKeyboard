import {
  ColorGenerator
} from './colorGenerator';

export class KeyboardPainter {
  constructor() {
    this.textColor = null;
  }

  paintKeyboard(keyboardElement) {
    const colorGenerator = new ColorGenerator();

    const textColor = colorGenerator.getTextColor();
    this.textColor = textColor;

    const backgroundColor = colorGenerator.getBackgroundColor();

    if (keyboardElement === undefined) {
      keyboardElement = document.querySelector(".keyboard");
    }

    keyboardElement.style.backgroundColor = backgroundColor;

    const keys = document.querySelectorAll(".keyboard__key");

    keys.forEach((el) => {
      el.style.color = textColor;
    });
  }

  // paintKeyboardInfo(keyboardInfo) {
  //   keyboardInfo.style.color = this.textColor;
  // }

  paintKeyboardInfo(keyboardInfo) {
    if (keyboardInfo === undefined) {
      keyboardInfo = document.querySelector(".keyboard__info");
    }

    keyboardInfo.style.color = this.textColor;
  }
}