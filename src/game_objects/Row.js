import Phaser from 'phaser'

export default class Row extends Phaser.Graphics {

  constructor(game, x, y, width, height, background) {
    super(game, x, y);
    this.lineStyle(2, 0x000000, 1);
    this.beginFill(background);
    this._createRect(width, height);
    this.endFill();
  }

  _createRect(width, height) {
    this.moveTo(0, 0);
    this.lineTo(width, 0);
    this.lineTo(width, height);
    this.lineTo(0, height);
    this.lineTo(0, 0);
  }
}
