export class TextArea {
  constructor() {
    this.textArea = null;
  }

  createTextArea() {
    this.textArea = document.createElement("textarea");
    this.textArea.classList.add("keyboard-input");

    return this.textArea;
  }

  getValue() {
    return this.textArea.value;
  }

  setValue(value) {
    this.textArea.value = value;
    this.setCursor(value.length);
  }

  setCursor(position) {
    this.textArea.focus();
    this.textArea.selectionStart = position;
    this.textArea.selectionEnd = position;
  }
}