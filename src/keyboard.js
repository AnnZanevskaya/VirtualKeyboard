import {
  ColorGenerator
} from './colorGenerator';
import {
  KeyBuilder
} from './keyBuilder';
import {
  EN_KEY_LAYOUTS,
  EN_LINE_BREAK
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
      capsLock: false
    };
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

    EN_KEY_LAYOUTS.forEach((key) => {
      let keyElement = null;

      switch (key) {
        case "backspace": {
          keyElement = KeyBuilder.createKeyButton("backspace", "keyboard__key_wide");

          keyElement.addEventListener("click", () => {
            this.properties.value = this.properties.value
              .substring(0, this.properties.value.length - 1);

            this.updateInputValue();
          });

          break;
        }

        case "tab": {
          keyElement = KeyBuilder.createKeyButton("keyboard_tab", "keyboard__key_wide");

          keyElement.addEventListener("click", () => {
            this.properties.value += "   ";
            this.updateInputValue();
          });

          break;
        }

        case "caps": {
          keyElement = KeyBuilder.createKeyButton("keyboard_capslock", "keyboard__key_wide", "keyboard__key_activatable");

          keyElement.addEventListener("click", () => {
            this.toggleCapsLock();

            if (this.keyboardElements.textColor === 'white') {
              keyElement.classList.toggle("keyboard__key_active-light", this.properties.capsLock);
            } else {
              keyElement.classList.toggle("keyboard__key_active-dark", this.properties.capsLock);
            }

            this.updateInputValue();
          });

          break;
        }

        case "shift": {
          keyElement = KeyBuilder.createKeyButton("vertical_align_top", "keyboard__key_wide");

          break;
        }

        case "enter": {
          keyElement = KeyBuilder.createKeyButton("keyboard_return", "keyboard__key_wide");

          keyElement.addEventListener("click", () => {
            this.properties.value += "\n";
            this.updateInputValue();
          });

          break;
        }

        case "space": {
          keyElement = KeyBuilder.createKeyButton("space_bar", "keyboard__key_extra-wide");

          keyElement.addEventListener("click", () => {
            this.properties.value += " ";
            this.updateInputValue();
          });

          break;
        }

        default: {
          keyElement = KeyBuilder.createKeyButton();
          keyElement.textContent = key.toLowerCase();

          keyElement.addEventListener("click", () => {
            this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
            this.updateInputValue();
          });

          break;
        }
      }

      fragment.append(keyElement);
      fragment = this.checkLineBreak(fragment, key);
    });

    return fragment;
  }

  toggleCapsLock() {
    this.properties.capsLock = !this.properties.capsLock;

    this.keyboardElements.keys.forEach((key) => {
      if (key.childElementCount === 0) {
        key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
      }
    });
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
}