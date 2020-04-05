export class ColorGenerator {
  constructor() {
    this.rgb = this.getRGB();
  }

  getRGB() {
    let rgb = [];

    rgb[0] = Math.round(Math.random() * 255);
    rgb[1] = Math.round(Math.random() * 255);
    rgb[2] = Math.round(Math.random() * 255);

    return rgb;
  }

  getBackgroundColor() {
    const backgroundColour = `rgb(${this.rgb[0]},${this.rgb[1]},${this.rgb[2]})`;

    return backgroundColour;
  }

  getTextColor() {
    let brightness = Math.round(((parseInt(this.rgb[0]) * 299) + (parseInt(this.rgb[1]) * 587) + (parseInt(this.rgb[2]) * 114)) / 1000);
    let textColor = (brightness > 125) ? 'black' : 'white';

    return textColor;
  }
}