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
  }

  setKey(key) {
    const currentValue = this.getValue();

    const position = this.textArea.selectionStart;
    const result = currentValue.substr(0, position) + key + currentValue.substr(position);

    this.setValue(result);

    if (result.length === position + 1) {
      this.setCursor(result.length);
    } else {
      this.setCursor(position + 1);
    }
  }

  removeKey() {
    const currentValue = this.getValue();
    const position = this.textArea.selectionStart;

    const result = currentValue.substring(0, position - 1) 
      + currentValue.substring(position, currentValue.length);
    this.setValue(result);

    if (result.length === position + 1) {
      this.setCursor(result.length);
    } else if (position !== 0) {
      this.setCursor(position - 1);
    } else {
      this.setCursor(position);
    }
  }

  setCursor(position) {
    this.textArea.focus();
    this.textArea.selectionStart = position;
    this.textArea.selectionEnd = position;
  }
}