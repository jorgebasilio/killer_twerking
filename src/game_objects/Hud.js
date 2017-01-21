import Phaser from 'phaser'
import Row from './Row'

export default class Hud extends Phaser.Group {
  constructor({game, parent, name, addToStage, enableBody, physicsBodyType}) {
    super(game, parent, name, addToStage, enableBody, physicsBodyType);
    this._createBackground();
    this._createSprites();
  }

  _createSprites() {
    this.hudLeft = new Phaser.Sprite(game, 20, 10, 'mushroom');
    this.add(this.hudLeft);

    this.hudMiddle = new Phaser.Sprite(game, 120, 10, 'mushroom');
    this.add(this.hudMiddle);

    this.hudRight = new Phaser.Sprite(game, 220, 10, 'mushroom');
    this.add(this.hudRight);
  }

  _createBackground() {
    let graphics;
    graphics = new Row(game, 0, 0, 300, 80, 0x712871);
    graphics.alpha = 0.5;
    this.add(graphics);
  }

  _spriteByNote(note) {
    if(note.symbol == 'l') {
      return this.hudLeft;
    } else if(note.symbol == 'r') {
      return this.hudRight;
    } else if(note.symbol == 'n') {
      return this.hudMiddle;
    }
  }
}
