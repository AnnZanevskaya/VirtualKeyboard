// import {
//   Keyboard
// } from './keyboard';
import {
  TextArea
} from './textArea';

import {
  KeyboardBuider
} from './keyboardBuilder';
import {
  Keyboard
} from './keyboard';

window.addEventListener("DOMContentLoaded", () => {
  const textArea = new TextArea();
  const texAreaElement = textArea.createTextArea();

  const builder = new KeyboardBuider(textArea);
  const keyboardElement = builder.getKeyboardElement();
  const {
    keyboard
  } = builder;

  document.body.append(texAreaElement);
  document.body.append(keyboardElement);

  let userLanguage = keyboard.getLanguage();
  if (userLanguage === null || userLanguage === "") {
    userLanguage = "en";
  }

  keyboard.setLanguage(userLanguage);

  texAreaElement.addEventListener("keydown", (e) => {
    keyboard.handleKeyPress(e);
  });

  document.addEventListener("keyup", () => {
    keyboard.handleKeyRelease();
  });
});