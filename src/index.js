import {
  Keyboard
} from './keyboard';
import {
  TextArea
} from './textArea';
import {
  HOT_KEYS
} from './keyLayouts';

window.addEventListener("DOMContentLoaded", () => {
  const textArea = new TextArea();
  const texAreaElement = textArea.createTextArea();

  const keyboard = new Keyboard(textArea);
  const keyboardElement = keyboard.createKeyboard();

  document.body.append(texAreaElement);
  document.body.append(keyboardElement);

  const pressed = new Set();

  keyboard.paintKeyboard();

  texAreaElement.addEventListener("keydown", (e) => {
    pressed.add(e.keyCode);

    const { codes } = HOT_KEYS.filter((hotKey) => hotKey.name === "color")[0];

    let isHandle = false;

    codes.forEach((code) => {
      if (!pressed.has(code) && !isHandle) {
        keyboard.handleKeyboardTyping(e);
        isHandle = true;
      }
    });

    if (!isHandle) {
      keyboard.handleKeyboardTyping(e);
      keyboard.paintKeyboard();
      pressed.clear();
    }
  });

  document.addEventListener("keyup", (e) => {
    pressed.clear();
  });
});