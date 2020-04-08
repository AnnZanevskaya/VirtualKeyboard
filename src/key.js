export class Key {
  constructor(name, ruName, keyCode) {
    this.name = name;
    this.ruName = ruName;
    this.keyCode = keyCode;
    this.element = null;
    this.action = null;
    this.keyPressedAction = null;
  }

  set onclickAction(onclickFunction) {
    this.action = onclickFunction;
    this.element.addEventListener('click', onclickFunction);
  }

  set onPressAction(onPressAction) {
    this.keyPressedAction = onPressAction;
    this.element.addEventListener("mousedown", onPressAction);
  }

  set onReleaseAction(onReleaseAction) {
    this.element.addEventListener("mouseup", onReleaseAction);
    document.addEventListener("keyup", onReleaseAction);
  }

  getKeyLabel(language) {
    return language === "en" ? this.name.toLowerCase() : this.ruName.toLowerCase();
  }

  setTextContext(language, capsLock) {
    if (capsLock) {
      this.element.textContent = this.getKeyLabel(language).toUpperCase();
    } else {
      this.element.textContent = this.getKeyLabel(language).toLowerCase();
    }
  }

  createKeyButton(iconName, ...classes) {
    const keyElement = document.createElement("button");

    keyElement.setAttribute("type", "button");
    keyElement.setAttribute("data-key", this.keyCode);
    keyElement.classList.add("keyboard__key");

    if (classes !== undefined) {
      keyElement.classList.add(...classes);
    }

    if (iconName !== undefined) {
      keyElement.innerHTML = this.createKeyIconHTML(iconName);
    }

    this.element = keyElement;
    return keyElement;
  }

  createKeyIconHTML(iconName) {
    return `<i class="material-icons">${iconName}</i>`;
  }
}