import {
  Keyboard
} from './keyboard';

import {
  ColorGenerator
} from './colorGenerator';

import {
  KeyboardPainter
} from './keyboardPainter';

export class KeyboardBuider {
  constructor(textArea) {
    this.textArea = textArea;
    this.keysContainer = null;
    this.keyboard = null;
    this.main = null;
    this.textColor = null;
    this.painter = new KeyboardPainter();
  }

  getKeyboardElement() {
    this.keyboard = new Keyboard(this.textArea, this.painter);

    this.createKeyboard();
    this.setKeyboardLanguage();
    this.setEventListeners();

    return this.main;
  }

  createKeyboard() {
    this.main = document.createElement("div");
    this.main.classList.add("keyboard");

    this.keysContainer = document.createElement("div");
    this.keysContainer.classList.add("keyboard__keys");

    this.keysContainer.append(this.keyboard.createKeys());

    this.main.append(this.keysContainer);

    const keyboardInfo = this.createKeboardInfo();
    this.main.append(keyboardInfo);

    this.painter.paintKeyboard(this.main);
    this.painter.paintKeyboardInfo(keyboardInfo);

    return this.main;
  }

  createKeboardInfo() {
    const keyBoardInfo = document.createElement("div");
    keyBoardInfo.classList.add("keyboard__info");

    const colorInfo = document.createElement("p");
    colorInfo.innerText = "Press 'Shift' + 'Alt' to change keyboard color to your favorite";

    const languageInfo = document.createElement("p");
    languageInfo.innerText = "Press 'Shift' + 'Ctrl' to change language";

    const systemInfo = document.createElement("p");
    systemInfo.innerText = "Made at home isolation in Windows OS";

    keyBoardInfo.append(colorInfo);
    keyBoardInfo.append(languageInfo);
    keyBoardInfo.append(systemInfo);

    return keyBoardInfo;
  }

  setKeyboardLanguage() {
    let userLanguage = this.keyboard.getLanguage();

    if (userLanguage === null || userLanguage === "") {
      userLanguage = "en";
    }

    this.keyboard.setLanguage(userLanguage);
  }
  
  setEventListeners() {
    this.textArea.textArea.addEventListener("keydown", (e) => {
      this.keyboard.handleKeyPress(e);
    });

    document.addEventListener("keyup", () => {
      this.keyboard.handleKeyRelease();
    });
  }
}