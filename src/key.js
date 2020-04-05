export class Key {
  static createKey(key) {
    let keyElement = null;

    switch (key) {
      case "backspace": {
        keyElement = this.createButton("backspace", "keyboard__key_wide");

        break;
      }

      case "tab": {
        keyElement = this.createButton("keyboard_tab", "keyboard__key_wide");

        break;
      }

      case "caps": {
        keyElement = this.createButton("keyboard_capslock", "keyboard__key_wide", "keyboard__key_activatable");

        break;
      }

      case "shift": {
        keyElement = this.createButton("vertical_align_top", "keyboard__key_wide");

        break;
      }

      case "enter": {
        keyElement = this.createButton("keyboard_return", "keyboard__key_wide");

        break;
      }

      case "space": {
        keyElement = this.createButton("space_bar", "keyboard__key_extra-wide");

        break;
      }

      default: {
        keyElement = this.createButton();
        keyElement.textContent = key.toLowerCase();

        break;
      }
    }

    return keyElement;
  }

  static createButton(iconName, ...classes) {
    const keyElement = document.createElement("button");

    keyElement.setAttribute("type", "button");
    keyElement.classList.add("keyboard__key");

    if (classes !== undefined) {
      keyElement.classList.add(...classes);
    }

    if (iconName !== undefined) {
      keyElement.innerHTML = this.createIconHTML(iconName);
    }

    return keyElement;
  }

  static createIconHTML(iconName) {
    return `<i class="material-icons">${iconName}</i>`;
  }
}