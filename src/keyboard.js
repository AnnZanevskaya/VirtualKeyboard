import {
  Key
} from './key';
import {
  LINE_BREAK,
  KEY_LAYOUTS,
  SPECIALKEYS,
} from './keyLayouts';
import {
  SpecialActions
} from './specialActions';

export class Keyboard {
  constructor(textArea, keyboardPainter) {
    this.keyboardPainter = keyboardPainter;
    this.textArea = textArea;

    this.properties = {
      value: "",
      capsLock: false,
      language: null,
      source: [],
      pressed: new Set()
    };
  }

  createKeys() {
    let fragment = document.createDocumentFragment();

    KEY_LAYOUTS.forEach((keyLayout) => {
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

        case "ctrl": {
          key.createKeyButton("keyboard__key_wide");
          key.onclickAction = () => {};
          key.setTextContext(this.properties.language);

          break;
        }

        case "alt": {
          key.createKeyButton("keyboard__key_wide");
          key.onclickAction = () => {};
          key.setTextContext(this.properties.language);

          break;
        }

        default: {
          key.createKeyButton();
          key.onclickAction = () => {
            this.handleKeyAction(key);
          };

          key.setTextContext(this.properties.language, this.properties.capsLock);

          break;
        }
      }

      key.onPressAction = () => {
        if (this.keyboardPainter.textColor === 'white') {
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

  setLanguage(language) {
    this.properties.language = language;
    window.localStorage.setItem("language", language);
  }

  getLanguage() {
    return window.localStorage.getItem("language");
  }

  handleKeyPress(e) {
    this.properties.pressed.add(e.keyCode);

    if (SpecialActions.isLanguageChange(this.properties.pressed)) {
      this.changeLanguage(e);
      return;
    }

    if (SpecialActions.isColorChange(this.properties.pressed)) {
      this.changeColor(e);
      return;
    }

    this.handleKeyboardTyping(e);
  }

  handleKeyRelease() {
    this.properties.pressed.clear();
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
    const lineBreak = LINE_BREAK.indexOf(key) !== -1;

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
    const value = this.getInputValue();
    this.properties.value = value
      .substring(0, value.length - 1);

    this.updateInputValue();
  }

  handleTabAction() {
    this.properties.value = `${this.getInputValue()}   `;
    this.updateInputValue();
  }

  handleCapsLockAction() {
    this.toggleCapsLock();

    const keyElement = this.properties.source.filter((key) => key.keyCode === 20)[0].element;

    if (this.keyboardPainter.textColor === 'white') {
      keyElement.classList.toggle("keyboard__key_active-light", this.properties.capsLock);
      keyElement.classList.remove("keyboard__key_active-dark");
    } else {
      keyElement.classList.toggle("keyboard__key_active-dark", this.properties.capsLock);
      keyElement.classList.remove("keyboard__key_active-light");
    }

    this.updateInputValue();
  }

  toggleCapsLock() {
    this.properties.capsLock = !this.properties.capsLock;
    this.rerenderKeys();
  }

  handleEnterAction() {
    this.properties.value = `${this.getInputValue()}\n`;
    this.updateInputValue();
  }

  handleSpaceAction() {
    this.properties.value = `${this.getInputValue()} `;
    this.updateInputValue();
  }

  handleKeyAction(key) {
    const keyLabel = key.getKeyLabel(this.properties.language);

    this.properties.value = this.properties.capsLock ?
      this.getInputValue() + keyLabel.toUpperCase() :
      this.getInputValue() + keyLabel.toLowerCase();

    this.updateInputValue();
  }

  changeLanguage(e) {
    const language = this.getLanguage() === "en" ? "ru" : "en";
    this.setLanguage(language);
    this.rerenderKeys();
    this.handleKeyboardTyping(e);
    this.properties.pressed.clear();
  }

  changeColor(e) {
    this.handleKeyboardTyping(e);
    this.keyboardPainter.paintKeyboard();
    this.keyboardPainter.paintKeyboardInfo();
    this.properties.pressed.clear();
  }

  rerenderKeys() {
    this.properties.source.forEach((key) => {
      if (SPECIALKEYS.indexOf(key.name) === -1) {
        key.setTextContext(this.properties.language, this.properties.capsLock);
      }
    });
  }
}