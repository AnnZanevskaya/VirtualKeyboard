import {
  Keyboard
} from './keyboard';
import {
  TextArea
} from './textArea';

window.addEventListener("DOMContentLoaded", () => {
  const textArea = new TextArea();
  const texAreaElement = textArea.createTextArea();

  const keyboard = new Keyboard(textArea);
  const keyboardElement = keyboard.createKeyboard();

  document.body.append(texAreaElement);
  document.body.append(keyboardElement);

  keyboard.paintKeyboard();

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