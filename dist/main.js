/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/colorGenerator.js":
/*!*******************************!*\
  !*** ./src/colorGenerator.js ***!
  \*******************************/
/*! exports provided: ColorGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ColorGenerator\", function() { return ColorGenerator; });\nclass ColorGenerator {\r\n  constructor() {\r\n    this.rgb = this.getRGB();\r\n  }\r\n\r\n  getRGB() {\r\n    const rgb = [];\r\n\r\n    rgb[0] = Math.round(Math.random() * 255);\r\n    rgb[1] = Math.round(Math.random() * 255);\r\n    rgb[2] = Math.round(Math.random() * 255);\r\n\r\n    return rgb;\r\n  }\r\n\r\n  getBackgroundColor() {\r\n    const backgroundColour = `rgb(${this.rgb[0]},${this.rgb[1]},${this.rgb[2]})`;\r\n\r\n    return backgroundColour;\r\n  }\r\n\r\n  getTextColor() {\r\n    const brightness = Math.round(((parseInt(this.rgb[0]) * 299)\r\n     + (parseInt(this.rgb[1]) * 587)\r\n     + (parseInt(this.rgb[2]) * 114)) / 1000);\r\n    const textColor = (brightness > 125) ? 'black' : 'white';\r\n\r\n    return textColor;\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/colorGenerator.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyboard */ \"./src/keyboard.js\");\n/* harmony import */ var _textArea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./textArea */ \"./src/textArea.js\");\n/* harmony import */ var _keyLayouts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keyLayouts */ \"./src/keyLayouts.js\");\n\r\n\r\n\r\n\r\nwindow.addEventListener(\"DOMContentLoaded\", () => {\r\n  const textArea = new _textArea__WEBPACK_IMPORTED_MODULE_1__[\"TextArea\"]();\r\n  const texAreaElement = textArea.createTextArea();\r\n\r\n  const keyboard = new _keyboard__WEBPACK_IMPORTED_MODULE_0__[\"Keyboard\"](textArea);\r\n  const keyboardElement = keyboard.createKeyboard();\r\n\r\n  document.body.append(texAreaElement);\r\n  document.body.append(keyboardElement);\r\n\r\n  keyboard.paintKeyboard();\r\n\r\n  texAreaElement.addEventListener(\"keydown\", (e) => {\r\n    keyboard.handleKeyPress(e);\r\n  });\r\n\r\n  document.addEventListener(\"keyup\", () => {\r\n    undefined.keyboard.hadleKeyRelease();\r\n  });\r\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/key.js":
/*!********************!*\
  !*** ./src/key.js ***!
  \********************/
/*! exports provided: Key */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Key\", function() { return Key; });\nclass Key {\r\n  constructor(name, ruName, keyCode) {\r\n    this.name = name;\r\n    this.ruName = ruName;\r\n    this.keyCode = keyCode;\r\n    this.element = null;\r\n    this.action = null;\r\n    this.keyPressedAction = null;\r\n  }\r\n\r\n  set onclickAction(onclickFunction) {\r\n    this.action = onclickFunction;\r\n    this.element.addEventListener('click', onclickFunction);\r\n  }\r\n\r\n  set onPressAction(onPressAction) {\r\n    this.keyPressedAction = onPressAction;\r\n    this.element.addEventListener(\"mousedown\", onPressAction);\r\n  }\r\n\r\n  set onReleaseAction(onReleaseAction) {\r\n    document.addEventListener(\"mouseup\", onReleaseAction);\r\n    document.addEventListener(\"keyup\", onReleaseAction);\r\n  }\r\n\r\n  getKeyLabel(language) {\r\n    return language === \"EN\" ? this.name.toLowerCase() : this.ruName.toLowerCase();\r\n  }\r\n\r\n  setTextContext(language) {\r\n    this.element.textContent = this.getKeyLabel(language);\r\n  }\r\n\r\n  createKeyButton(iconName, ...classes) {\r\n    const keyElement = document.createElement(\"button\");\r\n\r\n    keyElement.setAttribute(\"type\", \"button\");\r\n    keyElement.setAttribute(\"data-key\", this.keyCode);\r\n    keyElement.classList.add(\"keyboard__key\");\r\n\r\n    if (classes !== undefined) {\r\n      keyElement.classList.add(...classes);\r\n    }\r\n\r\n    if (iconName !== undefined) {\r\n      keyElement.innerHTML = this.createKeyIconHTML(iconName);\r\n    }\r\n\r\n    this.element = keyElement;\r\n    return keyElement;\r\n  }\r\n\r\n  createKeyIconHTML(iconName) {\r\n    return `<i class=\"material-icons\">${iconName}</i>`;\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/key.js?");

/***/ }),

/***/ "./src/keyLayouts.js":
/*!***************************!*\
  !*** ./src/keyLayouts.js ***!
  \***************************/
/*! exports provided: EN_LINE_BREAK, HOT_KEYS, KEY_LAYOUTS1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EN_LINE_BREAK\", function() { return EN_LINE_BREAK; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HOT_KEYS\", function() { return HOT_KEYS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"KEY_LAYOUTS1\", function() { return KEY_LAYOUTS1; });\nconst EN_LINE_BREAK = [\"backspace\", \"p\", \"enter\", \"?\"];\r\n\r\nconst HOT_KEYS = [\r\n  { name: \"color\", codes: [16, 18] },\r\n  { name: \"language\", codes: [16, 17] }]\r\n\r\nconst KEY_LAYOUTS1 = [\r\n  { name: \"1\", ruName: \"1\", keyCode: 49 },\r\n  { name: \"2\", ruName: \"2\", keyCode: 50 },\r\n  { name: \"3\", ruName: \"3\", keyCode: 51 },\r\n  { name: \"4\", ruName: \"4\", keyCode: 52 },\r\n  { name: \"5\", ruName: \"5\", keyCode: 53 },\r\n  { name: \"6\", ruName: \"6\", keyCode: 54 },\r\n  { name: \"7\", ruName: \"7\", keyCode: 55 },\r\n  { name: \"8\", ruName: \"8\", keyCode: 56 },\r\n  { name: \"9\", ruName: \"9\", keyCode: 57 },\r\n  { name: \"0\", ruName: \"0\", keyCode: 48 },\r\n  { name: \"backspace\", ruName: \"backspace\", keyCode: 8 },\r\n  { name: \"tab\", ruName: \"tab\", keyCode: 9 },\r\n  { name: \"q\", ruName: \"й\", keyCode: 81 },\r\n  { name: \"w\", ruName: \"ц\", keyCode: 87 },\r\n  { name: \"e\", ruName: \"у\", keyCode: 69 },\r\n  { name: \"r\", ruName: \"к\", keyCode: 82 },\r\n  { name: \"t\", ruName: \"е\", keyCode: 84 },\r\n  { name: \"y\", ruName: \"н\", keyCode: 89 },\r\n  { name: \"u\", ruName: \"г\", keyCode: 85 },\r\n  { name: \"i\", ruName: \"ш\", keyCode: 73 },\r\n  { name: \"o\", ruName: \"щ\", keyCode: 79 },\r\n  { name: \"p\", ruName: \"з\", keyCode: 80 },\r\n  { name: \"capslock\", ruName: \"capslock\", keyCode: 20 },\r\n  { name: \"a\", ruName: \"ф\", keyCode: 65 },\r\n  { name: \"s\", ruName: \"ы\", keyCode: 83 },\r\n  { name: \"d\", ruName: \"в\", keyCode: 68 },\r\n  { name: \"f\", ruName: \"а\", keyCode: 70 },\r\n  { name: \"g\", ruName: \"п\", keyCode: 71 },\r\n  { name: \"h\", ruName: \"р\", keyCode: 72 },\r\n  { name: \"j\", ruName: \"о\", keyCode: 74 },\r\n  { name: \"k\", ruName: \"л\", keyCode: 75 },\r\n  { name: \"l\", ruName: \"д\", keyCode: 76 },\r\n  { name: \"enter\", ruName: \"enter\", keyCode: 13 },\r\n  { name: \"shift\", ruName: \"shift\", keyCode: 16 },\r\n  { name: \"z\", ruName: \"я\", keyCode: 90 },\r\n  { name: \"x\", ruName: \"ч\", keyCode: 88 },\r\n  { name: \"c\", ruName: \"с\", keyCode: 67 },\r\n  { name: \"v\", ruName: \"м\", keyCode: 86 },\r\n  { name: \"b\", ruName: \"и\", keyCode: 66 },\r\n  { name: \"n\", ruName: \"т\", keyCode: 78 },\r\n  { name: \"m\", ruName: \"ь\", keyCode: 77 },\r\n  { name: \",\", ruName: \"б\", keyCode: 188 },\r\n  { name: \".\", ruName: \"ю\", keyCode: 190 },\r\n  { name: \"?\", ruName: \".\", keyCode: 191 },\r\n  { name: \"ctrl\", ruName: \"ctrl\", keyCode: 17 },\r\n  { name: \"alt\", ruName: \"alt\", keyCode: 18 },\r\n  { name: \"space\", ruName: \"space\", keyCode: 32 }\r\n];\n\n//# sourceURL=webpack:///./src/keyLayouts.js?");

/***/ }),

/***/ "./src/keyboard.js":
/*!*************************!*\
  !*** ./src/keyboard.js ***!
  \*************************/
/*! exports provided: Keyboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Keyboard\", function() { return Keyboard; });\n/* harmony import */ var _colorGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colorGenerator */ \"./src/colorGenerator.js\");\n/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./key */ \"./src/key.js\");\n/* harmony import */ var _keyLayouts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keyLayouts */ \"./src/keyLayouts.js\");\n\r\n\r\n\r\n\r\nclass Keyboard {\r\n  constructor(textArea) {\r\n    this.keyboardElements = {\r\n      main: null,\r\n      keysContainer: null,\r\n      keys: [],\r\n      textColor: null\r\n    };\r\n\r\n    this.textArea = textArea;\r\n\r\n    this.properties = {\r\n      value: \"\",\r\n      capsLock: false,\r\n      language: \"EN\",\r\n      source: [],\r\n      pressed: new Set()\r\n    };\r\n  }\r\n\r\n  createKeyboard() {\r\n    this.keyboardElements.main = document.createElement(\"div\");\r\n    this.keyboardElements.main.classList.add(\"keyboard\");\r\n\r\n    this.keyboardElements.keysContainer = document.createElement(\"div\");\r\n    this.keyboardElements.keysContainer.classList.add(\"keyboard__keys\");\r\n    this.keyboardElements.keysContainer.append(this.createKeys());\r\n\r\n    this.keyboardElements.keys = this.keyboardElements.keysContainer.querySelectorAll(\".keyboard__key\");\r\n\r\n    this.keyboardElements.main.append(this.keyboardElements.keysContainer);\r\n\r\n    const keyboardInfo = this.createKeboardInfo();\r\n    this.keyboardElements.main.append(keyboardInfo);\r\n\r\n    return this.keyboardElements.main;\r\n  }\r\n\r\n  createKeboardInfo() {\r\n    const keyBoardInfo = document.createElement(\"div\");\r\n    keyBoardInfo.classList.add(\"keyboard__info\");\r\n\r\n    const colorInfo = document.createElement(\"p\");\r\n    colorInfo.innerText = \"Press 'Shift' + 'Alt' to change keyboard color to your favorite\";\r\n\r\n    const languageInfo = document.createElement(\"p\");\r\n    languageInfo.innerText = \"Press 'Shift' + 'Ctrl' to change language\";\r\n\r\n    const systemInfo = document.createElement(\"p\");\r\n    systemInfo.innerText = \"Made at home isolation in Windows OS\";\r\n\r\n    keyBoardInfo.append(colorInfo);\r\n    keyBoardInfo.append(languageInfo);\r\n    keyBoardInfo.append(systemInfo);\r\n\r\n    return keyBoardInfo;\r\n  }\r\n\r\n  paintKeyboard() {\r\n    const colorGenerator = new _colorGenerator__WEBPACK_IMPORTED_MODULE_0__[\"ColorGenerator\"]();\r\n\r\n    const textColor = colorGenerator.getTextColor();\r\n    this.keyboardElements.textColor = textColor;\r\n\r\n    const backgroundColor = colorGenerator.getBackgroundColor();\r\n    this.keyboardElements.main.style.backgroundColor = backgroundColor;\r\n\r\n    const keys = document.querySelectorAll(\".keyboard__key\");\r\n\r\n    keys.forEach((el) => {\r\n      el.style.color = textColor;\r\n    });\r\n\r\n    this.paintKeyboardInfo();\r\n  }\r\n\r\n  paintKeyboardInfo() {\r\n    const keyboardInfo = document.querySelector(\".keyboard__info\");\r\n    keyboardInfo.style.color = this.keyboardElements.textColor;\r\n  }\r\n\r\n  createKeys() {\r\n    let fragment = document.createDocumentFragment();\r\n\r\n    _keyLayouts__WEBPACK_IMPORTED_MODULE_2__[\"KEY_LAYOUTS1\"].forEach((keyLayout) => {\r\n      const key = new _key__WEBPACK_IMPORTED_MODULE_1__[\"Key\"](keyLayout.name, keyLayout.ruName, keyLayout.keyCode);\r\n\r\n      switch (keyLayout.name) {\r\n        case \"backspace\": {\r\n          key.createKeyButton(\"backspace\", \"keyboard__key_wide\");\r\n          key.onclickAction = () => {\r\n            this.handleBackspaceAction();\r\n          };\r\n\r\n          break;\r\n        }\r\n\r\n        case \"tab\": {\r\n          key.createKeyButton(\"keyboard_tab\", \"keyboard__key_wide\");\r\n          key.onclickAction = () => {\r\n            this.handleTabAction();\r\n          };\r\n\r\n          break;\r\n        }\r\n\r\n        case \"capslock\": {\r\n          key.createKeyButton(\"keyboard_capslock\", \"keyboard__key_wide\", \"keyboard__key_activatable\");\r\n          key.onclickAction = () => {\r\n            this.handleCapsLockAction();\r\n          };\r\n\r\n          break;\r\n        }\r\n\r\n        case \"shift\": {\r\n          key.createKeyButton(\"vertical_align_top\", \"keyboard__key_wide\");\r\n          key.onclickAction = () => {};\r\n\r\n          break;\r\n        }\r\n\r\n        case \"enter\": {\r\n          key.createKeyButton(\"keyboard_return\", \"keyboard__key_wide\");\r\n          key.onclickAction = () => {\r\n            this.handleEnterAction();\r\n          };\r\n\r\n          break;\r\n        }\r\n\r\n        case \"space\": {\r\n          key.createKeyButton(\"space_bar\", \"keyboard__key_extra-wide\");\r\n          key.onclickAction = () => {\r\n            this.handleSpaceAction();\r\n          };\r\n\r\n          break;\r\n        }\r\n\r\n        case \"ctrl\": {\r\n          key.createKeyButton(\"keyboard__key_wide\");\r\n          key.onclickAction = () => {};\r\n          key.setTextContext(this.properties.language);\r\n\r\n          break;\r\n        }\r\n\r\n        case \"alt\": {\r\n          key.createKeyButton(\"keyboard__key_wide\");\r\n          key.onclickAction = () => {};\r\n          key.setTextContext(this.properties.language);\r\n\r\n          break;\r\n        }\r\n\r\n        default: {\r\n          key.createKeyButton();\r\n          key.onclickAction = () => {\r\n            this.handleKeyAction(key);\r\n          };\r\n\r\n          key.setTextContext(this.properties.language);\r\n\r\n          break;\r\n        }\r\n      }\r\n\r\n      key.onPressAction = () => {\r\n        if (this.keyboardElements.textColor === 'white') {\r\n          key.element.classList.add(\"keyboard__key_pressed\", \"keyboard__key_pressed-light\");\r\n        } else {\r\n          key.element.classList.add(\"keyboard__key_pressed\", \"keyboard__key_pressed-dark\");\r\n        }\r\n      };\r\n\r\n      key.onReleaseAction = () => {\r\n        key.element.classList.remove(\"keyboard__key_pressed\", \"keyboard__key_pressed-light\", \"keyboard__key_pressed-dark\");\r\n      };\r\n\r\n      fragment.append(key.element);\r\n      fragment = this.checkLineBreak(fragment, keyLayout.name);\r\n\r\n      this.properties.source.push(key);\r\n    });\r\n\r\n    return fragment;\r\n  }\r\n\r\n  handleKeyPress(e) {\r\n    this.properties.pressed.add(e.keyCode);\r\n\r\n    const {\r\n      codes\r\n    } = _keyLayouts__WEBPACK_IMPORTED_MODULE_2__[\"HOT_KEYS\"].filter((hotKey) => hotKey.name === \"color\")[0];\r\n\r\n    let isHandle = false;\r\n\r\n    codes.forEach((code) => {\r\n      if (!this.properties.pressed.has(code) && !isHandle) {\r\n        this.handleKeyboardTyping(e);\r\n        isHandle = true;\r\n      }\r\n    });\r\n\r\n    if (!isHandle) {\r\n      this.handleKeyboardTyping(e);\r\n      this.paintKeyboard();\r\n      this.properties.pressed.clear();\r\n    }\r\n  }\r\n\r\n  handleKeyRelease() {\r\n    this.properties.pressed.clear();\r\n  }\r\n\r\n  handleKeyboardTyping(e) {\r\n    const keys = this.properties.source.filter((el) => el.keyCode === e.keyCode);\r\n\r\n    if (keys.length === 0) {\r\n      return;\r\n    }\r\n\r\n    const key = keys[0];\r\n\r\n    e.preventDefault();\r\n    key.keyPressedAction();\r\n    key.action();\r\n  }\r\n\r\n  checkLineBreak(fragment, key) {\r\n    const lineBreak = _keyLayouts__WEBPACK_IMPORTED_MODULE_2__[\"EN_LINE_BREAK\"].indexOf(key) !== -1;\r\n\r\n    if (lineBreak) {\r\n      fragment.append(document.createElement(\"br\"));\r\n    }\r\n\r\n    return fragment;\r\n  }\r\n\r\n  updateInputValue() {\r\n    this.textArea.setValue(this.properties.value);\r\n  }\r\n\r\n  getInputValue() {\r\n    return this.textArea.getValue();\r\n  }\r\n\r\n  handleBackspaceAction() {\r\n    const value = this.getInputValue();\r\n    this.properties.value = value\r\n      .substring(0, value.length - 1);\r\n\r\n    this.updateInputValue();\r\n  }\r\n\r\n  handleTabAction() {\r\n    this.properties.value = `${this.getInputValue()}   `;\r\n    this.updateInputValue();\r\n  }\r\n\r\n  handleCapsLockAction() {\r\n    this.toggleCapsLock();\r\n\r\n    const keyElement = this.properties.source.filter((key) => key.keyCode === 20)[0].element;\r\n\r\n    if (this.keyboardElements.textColor === 'white') {\r\n      keyElement.classList.toggle(\"keyboard__key_active-light\", this.properties.capsLock);\r\n    } else {\r\n      keyElement.classList.toggle(\"keyboard__key_active-dark\", this.properties.capsLock);\r\n    }\r\n\r\n    this.updateInputValue();\r\n  }\r\n\r\n  toggleCapsLock() {\r\n    this.properties.capsLock = !this.properties.capsLock;\r\n\r\n    this.keyboardElements.keys.forEach((key) => {\r\n      if (key.childElementCount === 0) {\r\n        key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();\r\n      }\r\n    });\r\n  }\r\n\r\n  handleEnterAction() {\r\n    this.properties.value = `${this.getInputValue()}\\n`;\r\n    this.updateInputValue();\r\n  }\r\n\r\n  handleSpaceAction() {\r\n    this.properties.value = `${this.getInputValue()} `;\r\n    this.updateInputValue();\r\n  }\r\n\r\n  handleKeyAction(key) {\r\n    const keyLabel = key.getKeyLabel(this.properties.language);\r\n\r\n    this.properties.value = this.properties.capsLock \r\n      ? this.getInputValue() + keyLabel.toUpperCase() \r\n      : this.getInputValue() + keyLabel.toLowerCase();\r\n      \r\n    this.updateInputValue();\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/keyboard.js?");

/***/ }),

/***/ "./src/textArea.js":
/*!*************************!*\
  !*** ./src/textArea.js ***!
  \*************************/
/*! exports provided: TextArea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TextArea\", function() { return TextArea; });\nclass TextArea {\r\n  constructor() {\r\n    this.textArea = null;\r\n  }\r\n\r\n  createTextArea() {\r\n    this.textArea = document.createElement(\"textarea\");\r\n    this.textArea.classList.add(\"keyboard-input\");\r\n\r\n    return this.textArea;\r\n  }\r\n\r\n  getValue() {\r\n    return this.textArea.value;\r\n  }\r\n\r\n  setValue(value) {\r\n    this.textArea.value = value;\r\n    this.setCursor(value.length);\r\n  }\r\n\r\n  setCursor(position) {\r\n    this.textArea.focus();\r\n    this.textArea.selectionStart = position;\r\n    this.textArea.selectionEnd = position;\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/textArea.js?");

/***/ })

/******/ });