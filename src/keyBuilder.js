export class KeyBuilder {
  static createKeyButton(iconName, ...classes) {
    const keyElement = document.createElement("button");

    keyElement.setAttribute("type", "button");
    keyElement.classList.add("keyboard__key");

    if (classes !== undefined) {
      keyElement.classList.add(...classes);
    }

    if (iconName !== undefined) {
      keyElement.innerHTML = this.createKeyIconHTML(iconName);
    }

    return keyElement;
  }

  static createKeyIconHTML(iconName) {
    return `<i class="material-icons">${iconName}</i>`;
  }
}