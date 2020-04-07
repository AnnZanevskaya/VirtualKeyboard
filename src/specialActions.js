import {
  LINE_BREAK,
  KEY_LAYOUTS,
  SPECIALKEYS,
  HOT_KEYS
} from './keyLayouts';

export class SpecialActions {
  static isLanguageChange(pressedKeys) {
    const {
      codes
    } = HOT_KEYS.filter((hotKey) => hotKey.name === "language")[0];

    let isMatchFilter = true;

    codes.forEach((code) => {
      if (!pressedKeys.has(code)) {
        isMatchFilter = false;
      }
    });

    if (!isMatchFilter) {
      return false;
    }

    return true;
  }

  static isColorChange(pressedKeys) {
    const {
      codes
    } = HOT_KEYS.filter((hotKey) => hotKey.name === "color")[0];

    let isMatchFilter = true;

    codes.forEach((code) => {
      if (!pressedKeys.has(code)) {
        isMatchFilter = false;
      }
    });

    if (!isMatchFilter) {
      return false;
    }

    return true;
  }
}