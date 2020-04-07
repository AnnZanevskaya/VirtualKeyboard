import {
  ColorGenerator
} from './colorGenerator';
import {
  Key
} from './key';
import {
  EN_LINE_BREAK,
  KEY_LAYOUTS1
} from './keyLayouts';

export class Keyboard {
  constructor(textArea) {
    this.keyboardElements = {
      main: null,
      keysContainer: null,
      keys: [],
      textColor: null
    };

    this.textArea = textArea;

    this.properties = {
      value: "",
      capsLock: false,
      language: "EN",
      source: []
    };
  }

  get inputValue() {
    return this.getInputValue();
  }

  createKeyboard() {
    this.keyboardElements.main = document.createElement("div");
    this.keyboardElements.main.classList.add("keyboard");

    this.keyboardElements.keysContainer = document.createElement("div");
    this.keyboardElements.keysContainer.classList.add("keyboard__keys");
    this.keyboardElements.keysContainer.append(this.createKeys());

    this.keyboardElements.keys = this.keyboardElements.keysContainer.querySelectorAll(".keyboard__key");

    this.keyboardElements.main.append(this.keyboardElements.keysContainer);

    return this.keyboardElements.main;
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

    this.keyboardElements.textColor = textColor;
  }

  createKeys() {
    let fragment = document.createDocumentFragment();

    KEY_LAYOUTS1.forEach((keyLayout) => {
      const key = new Key(keyLayout.name, keyLayout.ruName, keyLayout.keyCode);

      switch (keyLayout.name) {
        case "backspace": {
          key.createKeyButton("backspace", "keyboard__key_wide");
          key.onclickAction = () => {
            this.handleBackspaceAction();
          };

          break;
        }

        case "tab": {
          key.createKeyButton("keyboard_tab", "keyboard__key_wide");
          key.onclickAction = () => {
            this.handleTabAction();
          };

          break;
        }

        case "capslock": {
          key.createKeyButton("keyboard_capslock", "keyboard__key_wide", "keyboard__key_activatable");
          key.onclickAction = () => {
            this.handleCapsLockAction();
          };

          break;
        }

        case "shift": {
          key.createKeyButton("vertical_align_top", "keyboard__key_wide");
          key.onclickAction = () => {};

          break;
        }

        case "enter": {
          key.createKeyButton("keyboard_return", "keyboard__key_wide");
          key.onclickAction = () => {
            this.handleEnterAction();
          };

          break;
        }

        case "space": {
          key.createKeyButton("space_bar", "keyboard__key_extra-wide");
          key.onclickAction = () => {
            this.handleSpaceAction();
          };

          break;
        }

        default: {
          key.createKeyButton();
          key.onclickAction = () => {
            this.handleKeyAction(key);
          };

          key.setTextContext(this.properties.language);

          break;
        }
      }

      key.onPressAction = () => {
        if (this.keyboardElements.textColor === 'white') {
          key.element.classList.add("keyboard__key_pressed", "keyboard__key_pressed-light");
        } else {
          key.element.classList.add("keyboard__key_pressed", "keyboard__key_pressed-dark");
        }
      };

      key.onReleaseAction = () => {
        key.element.classList.remove("keyboard__key_pressed", "keyboard__key_pressed-light", "keyboard__key_pressed-dark");
      };

      fragment.append(key.element);
      fragment = this.checkLineBreak(fragment, keyLayout.name);

      this.properties.source.push(key);
    });

    return fragment;
  }

  handleKeyboardTyping(e) {
    const keys = this.properties.source.filter((el) => el.keyCode === e.keyCode);

    if (keys.length === 0) {
      return;
    }

    const key = keys[0];

    e.preventDefault();
    key.keyPressedAction();
    key.action();
  }

  checkLineBreak(fragment, key) {
    const lineBreak = EN_LINE_BREAK.indexOf(key) !== -1;

    if (lineBreak) {
      fragment.append(document.createElement("br"));
    }

    return fragment;
  }

  updateInputValue() {
    this.textArea.setValue(this.properties.value);
  }

  getInputValue() {
    return this.textArea.getValue();
  }

  handleBackspaceAction() {
    const value = this.inputValue;
    this.properties.value = value
      .substring(0, value.length - 1);

    this.updateInputValue();
  }

  handleTabAction() {
    this.properties.value = `${this.inputValue}   `;
    this.updateInputValue();
  }

  handleCapsLockAction() {
    this.toggleCapsLock();

    const keyElement = this.properties.source.filter((key) => key.keyCode === 20)[0].element;

    if (this.keyboardElements.textColor === 'white') {
      keyElement.classList.toggle("keyboard__key_active-light", this.properties.capsLock);
    } else {
      keyElement.classList.toggle("keyboard__key_active-dark", this.properties.capsLock);
    }

    this.updateInputValue();
  }

  toggleCapsLock() {
    this.properties.capsLock = !this.properties.capsLock;

    this.keyboardElements.keys.forEach((key) => {
      if (key.childElementCount === 0) {
        key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
      }
    });
  }

  handleEnterAction() {
    this.properties.value = `${this.inputValue}\n`;
    this.updateInputValue();
  }

  handleSpaceAction() {
    this.properties.value = `${this.inputValue} `;
    this.updateInputValue();
  }

  handleKeyAction(key) {
    const keyLabel = key.getKeyLabel(this.properties.language);

    this.properties.value = this.properties.capsLock ? this.inputValue + keyLabel.toUpperCase() : this.inputValue + keyLabel.toLowerCase();
    this.updateInputValue();
  }
}