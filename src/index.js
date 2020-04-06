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
  texAreaElement.addEventListener("keydown", (e) => {
    keyboard.handleKeyboardTyping(e);
  });
});