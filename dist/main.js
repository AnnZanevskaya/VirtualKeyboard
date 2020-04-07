!function(e){var t={};function a(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)a.d(r,s,function(t){return e[t]}.bind(null,s));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=0)}([function(e,t,a){"use strict";a.r(t);class r{constructor(){this.textArea=null}createTextArea(){return this.textArea=document.createElement("textarea"),this.textArea.classList.add("keyboard-input"),this.textArea}getValue(){return this.textArea.value}setValue(e){this.textArea.value=e}setKey(e){const t=this.getValue(),a=this.textArea.selectionStart,r=t.substr(0,a)+e+t.substr(a);this.setValue(r),r.length===a+1?this.setCursor(r.length):this.setCursor(a+1)}removeKey(){const e=this.getValue(),t=this.textArea.selectionStart,a=e.substring(0,t-1)+e.substring(t,e.length);this.setValue(a),a.length===t+1?this.setCursor(a.length):0!==t?this.setCursor(t-1):this.setCursor(t)}setCursor(e){this.textArea.focus(),this.textArea.selectionStart=e,this.textArea.selectionEnd=e}}class s{constructor(e,t,a){this.name=e,this.ruName=t,this.keyCode=a,this.element=null,this.action=null,this.keyPressedAction=null}set onclickAction(e){this.action=e,this.element.addEventListener("click",e)}set onPressAction(e){this.keyPressedAction=e,this.element.addEventListener("mousedown",e)}set onReleaseAction(e){this.element.addEventListener("mouseup",e),document.addEventListener("keyup",e)}getKeyLabel(e){return"en"===e?this.name.toLowerCase():this.ruName.toLowerCase()}setTextContext(e,t){this.element.textContent=t?this.getKeyLabel(e).toUpperCase():this.getKeyLabel(e).toLowerCase()}createKeyButton(e,...t){const a=document.createElement("button");return a.setAttribute("type","button"),a.setAttribute("data-key",this.keyCode),a.classList.add("keyboard__key"),void 0!==t&&a.classList.add(...t),void 0!==e&&(a.innerHTML=this.createKeyIconHTML(e)),this.element=a,a}createKeyIconHTML(e){return`<i class="material-icons">${e}</i>`}}const n=["backspace","]","enter","?"],o=["backspace","tab","capslock","tab","shift","space","enter"],i=[{name:"color",codes:[16,18]},{name:"language",codes:[17,18]}],c=[{name:"1",ruName:"1",keyCode:49},{name:"2",ruName:"2",keyCode:50},{name:"3",ruName:"3",keyCode:51},{name:"4",ruName:"4",keyCode:52},{name:"5",ruName:"5",keyCode:53},{name:"6",ruName:"6",keyCode:54},{name:"7",ruName:"7",keyCode:55},{name:"8",ruName:"8",keyCode:56},{name:"9",ruName:"9",keyCode:57},{name:"0",ruName:"0",keyCode:48},{name:"backspace",ruName:"backspace",keyCode:8},{name:"tab",ruName:"tab",keyCode:9},{name:"q",ruName:"й",keyCode:81},{name:"w",ruName:"ц",keyCode:87},{name:"e",ruName:"у",keyCode:69},{name:"r",ruName:"к",keyCode:82},{name:"t",ruName:"е",keyCode:84},{name:"y",ruName:"н",keyCode:89},{name:"u",ruName:"г",keyCode:85},{name:"i",ruName:"ш",keyCode:73},{name:"o",ruName:"щ",keyCode:79},{name:"p",ruName:"з",keyCode:80},{name:"[",ruName:"х",keyCode:219},{name:"]",ruName:"ъ",keyCode:221},{name:"capslock",ruName:"capslock",keyCode:20},{name:"a",ruName:"ф",keyCode:65},{name:"s",ruName:"ы",keyCode:83},{name:"d",ruName:"в",keyCode:68},{name:"f",ruName:"а",keyCode:70},{name:"g",ruName:"п",keyCode:71},{name:"h",ruName:"р",keyCode:72},{name:"j",ruName:"о",keyCode:74},{name:"k",ruName:"л",keyCode:75},{name:"l",ruName:"д",keyCode:76},{name:";",ruName:"э",keyCode:222},{name:"\\",ruName:"\\",keyCode:220},{name:"enter",ruName:"enter",keyCode:13},{name:"shift",ruName:"shift",keyCode:16},{name:"z",ruName:"я",keyCode:90},{name:"x",ruName:"ч",keyCode:88},{name:"c",ruName:"с",keyCode:67},{name:"v",ruName:"м",keyCode:86},{name:"b",ruName:"и",keyCode:66},{name:"n",ruName:"т",keyCode:78},{name:"m",ruName:"ь",keyCode:77},{name:",",ruName:"б",keyCode:188},{name:".",ruName:"ю",keyCode:190},{name:"?",ruName:".",keyCode:191},{name:"ctrl",ruName:"ctrl",keyCode:17},{name:"alt",ruName:"alt",keyCode:18},{name:"space",ruName:"space",keyCode:32}];class d{static isLanguageChange(e){const{codes:t}=i.filter(e=>"language"===e.name)[0];let a=!0;return t.forEach(t=>{e.has(t)||(a=!1)}),!!a}static isColorChange(e){const{codes:t}=i.filter(e=>"color"===e.name)[0];let a=!0;return t.forEach(t=>{e.has(t)||(a=!1)}),!!a}}class u{constructor(e,t){this.keyboardPainter=t,this.textArea=e,this.isShiftActive=!1,this.properties={value:"",capsLock:!1,language:null,source:[],pressed:new Set}}setLanguage(e){this.properties.language=e,window.localStorage.setItem("language",e)}getLanguage(){return window.localStorage.getItem("language")}createKeys(){let e=document.createDocumentFragment();return c.forEach(t=>{const a=new s(t.name,t.ruName,t.keyCode);switch(t.name){case"backspace":a.createKeyButton("backspace","keyboard__key_wide"),a.onclickAction=()=>{this.handleBackspaceAction()};break;case"tab":a.createKeyButton("keyboard_tab","keyboard__key_wide"),a.onclickAction=()=>{this.handleTabAction()};break;case"capslock":a.createKeyButton("keyboard_capslock","keyboard__key_wide","keyboard__key_activatable"),a.onclickAction=()=>{this.handleCapsLockAction()};break;case"shift":{a.createKeyButton("vertical_align_top","keyboard__key_wide");let e=!1;a.onclickAction=()=>{this.handleShiftAction(e),e=!0},a.onReleaseAction=()=>{this.isShiftActive=!1,e=!1,this.handleReleaseShiftAction()};break}case"enter":a.createKeyButton("keyboard_return","keyboard__key_wide"),a.onclickAction=()=>{this.handleEnterAction()};break;case"space":a.createKeyButton("space_bar","keyboard__key_extra-wide"),a.onclickAction=()=>{this.handleSpaceAction()};break;case"ctrl":case"alt":a.createKeyButton("keyboard__key_wide"),a.onclickAction=()=>{},a.setTextContext(this.properties.language);break;default:a.createKeyButton(),a.onclickAction=()=>{this.handleKeyAction(a)},a.setTextContext(this.properties.language,this.properties.capsLock)}a.onPressAction=()=>{"white"===this.keyboardPainter.textColor?a.element.classList.add("keyboard__key_pressed","keyboard__key_pressed-light"):a.element.classList.add("keyboard__key_pressed","keyboard__key_pressed-dark")},a.onReleaseAction=()=>{a.element.classList.remove("keyboard__key_pressed","keyboard__key_pressed-light","keyboard__key_pressed-dark")},e.append(a.element),e=this.checkLineBreak(e,t.name),this.properties.source.push(a)}),e}handleKeyPress(e){this.properties.pressed.add(e.keyCode),d.isLanguageChange(this.properties.pressed)?this.changeLanguage(e):d.isColorChange(this.properties.pressed)?this.changeColor(e):this.handleKeyboardTyping(e)}handleKeyRelease(){this.properties.pressed.clear()}handleKeyboardTyping(e){const t=this.properties.source.filter(t=>t.keyCode===e.keyCode);if(0===t.length)return;const a=t[0];e.preventDefault(),a.keyPressedAction(),a.action()}checkLineBreak(e,t){return-1!==n.indexOf(t)&&e.append(document.createElement("br")),e}updateInputValue(){this.textArea.setValue(this.properties.value)}getInputValue(){return this.textArea.getValue()}handleBackspaceAction(){this.textArea.removeKey()}handleTabAction(){this.properties.value=`${this.getInputValue()}   `,this.updateInputValue()}handleCapsLockAction(){this.toggleCapsLock();const e=this.properties.source.filter(e=>20===e.keyCode)[0].element;"white"===this.keyboardPainter.textColor?(e.classList.toggle("keyboard__key_active-light",this.properties.capsLock),e.classList.remove("keyboard__key_active-dark")):(e.classList.toggle("keyboard__key_active-dark",this.properties.capsLock),e.classList.remove("keyboard__key_active-light")),this.updateInputValue()}toggleCapsLock(){this.properties.capsLock=!this.properties.capsLock,this.rerenderKeys()}handleShiftAction(e){if(!e){this.isShiftActive=!0;const e=!this.properties.capsLock;this.properties.source.forEach(t=>{-1===o.indexOf(t.name)&&t.setTextContext(this.properties.language,e)})}}handleReleaseShiftAction(){const e=this.properties.capsLock;this.properties.source.forEach(t=>{-1===o.indexOf(t.name)&&t.setTextContext(this.properties.language,e)})}handleEnterAction(){this.properties.value=`${this.getInputValue()}\n`,this.updateInputValue()}handleSpaceAction(){this.properties.value=`${this.getInputValue()} `,this.updateInputValue()}handleKeyAction(e){const t=e.getKeyLabel(this.properties.language);let a=this.properties.capsLock;this.isShiftActive&&(a=!this.properties.capsLock);let r=t;a?(this.properties.value=this.getInputValue()+t.toUpperCase(),r=t.toUpperCase()):(this.properties.value=this.getInputValue()+t.toLowerCase(),r=t.toLowerCase()),this.textArea.setKey(r)}changeLanguage(e){const t="en"===this.getLanguage()?"ru":"en";this.setLanguage(t),this.rerenderKeys(),this.handleKeyboardTyping(e),this.properties.pressed.clear()}changeColor(e){this.handleKeyboardTyping(e),this.keyboardPainter.paintKeyboard(),this.keyboardPainter.paintKeyboardInfo(),this.properties.pressed.clear()}rerenderKeys(){this.properties.source.forEach(e=>{-1===o.indexOf(e.name)&&e.setTextContext(this.properties.language,this.properties.capsLock)})}}class l{constructor(){this.rgb=this.getRGB()}getRGB(){const e=[];return e[0]=Math.round(255*Math.random()),e[1]=Math.round(255*Math.random()),e[2]=Math.round(255*Math.random()),e}getBackgroundColor(){return`rgb(${this.rgb[0]},${this.rgb[1]},${this.rgb[2]})`}getTextColor(){return Math.round((299*parseInt(this.rgb[0])+587*parseInt(this.rgb[1])+114*parseInt(this.rgb[2]))/1e3)>125?"black":"white"}}class h{constructor(){this.textColor=null}paintKeyboard(e,t){const a=new l,r=a.getTextColor();this.textColor=r;const s=a.getBackgroundColor();void 0===e&&(e=document.querySelector(".keyboard")),e.style.backgroundColor=s,void 0===t&&(t=document.querySelectorAll(".keyboard__key")),t.forEach(e=>{e.style.color=r})}paintKeyboardInfo(e){void 0===e&&(e=document.querySelector(".keyboard__info")),e.style.color=this.textColor}}class y{constructor(e){this.textArea=e,this.keysContainer=null,this.keyboard=null,this.main=null,this.textColor=null,this.painter=new h}createKeyboardElement(){return this.keyboard=new u(this.textArea,this.painter),this.createKeyboard(),this.setKeyboardLanguage(),this.setEventListeners(),this.main}createKeyboard(){this.main=document.createElement("div"),this.main.classList.add("keyboard"),this.keysContainer=document.createElement("div"),this.keysContainer.classList.add("keyboard__keys"),this.keysContainer.append(this.keyboard.createKeys()),this.main.append(this.keysContainer);const e=this.createKeboardInfo();return this.main.append(e),this.painter.paintKeyboard(this.main,this.keysContainer.childNodes),this.painter.paintKeyboardInfo(e),this.main}createKeboardInfo(){const e=document.createElement("div");e.classList.add("keyboard__info");const t=document.createElement("p");t.innerText="Press 'Shift' + 'Alt' to change keyboard color to your favorite";const a=document.createElement("p");a.innerText="Press 'Ctrl' + 'Alt' to change language";const r=document.createElement("p");return r.innerText="Made at home isolation in Windows OS",e.append(t),e.append(a),e.append(r),e}setKeyboardLanguage(){let e=this.keyboard.getLanguage();null!==e&&""!==e||(e="en"),this.keyboard.setLanguage(e)}setEventListeners(){this.textArea.textArea.addEventListener("keydown",e=>{this.keyboard.handleKeyPress(e)}),document.addEventListener("keyup",()=>{this.keyboard.handleKeyRelease()})}}window.addEventListener("DOMContentLoaded",()=>{const e=new r,t=e.createTextArea(),a=new y(e).createKeyboardElement();document.body.append(t),document.body.append(a)})}]);