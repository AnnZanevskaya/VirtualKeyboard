export class TextArea {
  constructor() {
    this.textArea = null;
  }

  createTextArea() {
    this.textArea = document.createElement("textarea");
    this.textArea.classList.add("keyboard-input");

    return this.textArea;
  }
}