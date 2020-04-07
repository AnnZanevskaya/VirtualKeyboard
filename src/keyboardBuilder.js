export class KeyboardBuider {
  constructor() {
    this.keysContainer = null;
  }

  createKeyboard() {
    const main = document.createElement("div");
    main.classList.add("keyboard");

    this.keysContainer = document.createElement("div");
    this.keysContainer.classList.add("keyboard__keys");

    main.append(this.keysContainer);

    const keyboardInfo = this.createKeboardInfo();
    main.append(keyboardInfo);

    return main;
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
}