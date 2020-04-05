import {Keyboard} from './Keyboard';


window.addEventListener("DOMContentLoaded", () => {
  paintKeyboard();
});

let paintKeyboard = () => {
  // const color = getRandomColor();
  const rgb = getRGB();
  const textColor = getTextColor(rgb);
  const backgroundColor = getBackgroundColor(rgb);

  const keyboard = document.querySelector(".keyboard");
  keyboard.style.backgroundColor = backgroundColor;

  const keys = document.querySelectorAll(".keyboard__key");
  keys.forEach((el) => {
    el.style.color = textColor;
  });
};

let getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
};

let getBackgroundColor = (rgb) => {
  const backgroundColour = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;

  return backgroundColour;
};

let getTextColor = (rgb) => {
  const brightness = Math.round(((parseInt(rgb[0]) * 299) + (parseInt(rgb[1]) * 587) + (parseInt(rgb[2]) * 114)) / 1000);
  const textColor = (brightness > 125) ? 'black' : 'white';

  return textColor;
};

let getRGB = () => {
  let rgb = [];

  rgb[0] = Math.round(Math.random() * 255);
  rgb[1] = Math.round(Math.random() * 255);
  rgb[2] = Math.round(Math.random() * 255);

  return rgb;
};