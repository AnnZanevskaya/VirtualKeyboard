import {
  TextArea
} from './textArea';

import {
  KeyboardBuider
} from './keyboardBuilder';

window.addEventListener("DOMContentLoaded", () => {
  const textArea = new TextArea();
  const texAreaElement = textArea.createTextArea();

  const builder = new KeyboardBuider(textArea);
  const keyboardElement = builder.getKeyboardElement();

  document.body.append(texAreaElement);
  document.body.append(keyboardElement);
});