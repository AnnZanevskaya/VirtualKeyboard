import { Keyboard } from './keyboard';

window.addEventListener("DOMContentLoaded", () => {
  let keyboard = new Keyboard();
  keyboard.generateKeyboard();
  keyboard.paintKeyboard();
});