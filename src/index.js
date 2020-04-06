import { Keyboard } from './keyboardClass';

window.addEventListener("DOMContentLoaded", () => {
  const keyboard = new Keyboard();

  keyboard.generateKeyboard();
  keyboard.paintKeyboard();
});