import { Keyboard } from './keyboard';

window.addEventListener("DOMContentLoaded", () => {
  const keyboard = new Keyboard();
  
  keyboard.generateKeyboard();
  keyboard.paintKeyboard();
});