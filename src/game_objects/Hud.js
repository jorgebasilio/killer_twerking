import Phaser from 'phaser'
import Row from './Row'

export default class Hud extends Phaser.Group {
  constructor({game, parent, name, addToStage, enableBody, physicsBodyType}) {
    super(game, parent, name, addToStage, enableBody, physicsBodyType);
    this._createBackground();
    this._createSprites();
  }

  _createSprites() {
    this.hudLeft = new Phaser.Sprite(game, 50, 45, 'arrow');
    this.hudLeft.anchor.setTo(0.5);
    this.hudLeft.angle = -90;
    this.add(this.hudLeft);

    this.hudMiddle = new Phaser.Sprite(game, 175, 45, 'cheeks');
    this.hudMiddle.anchor.setTo(0.5);
    this.add(this.hudMiddle);

    this.hudRight = new Phaser.Sprite(game, 300, 45, 'arrow');
    this.hudRight.anchor.setTo(0.5);
    this.hudRight.angle = 90;
    this.add(this.hudRight);
  }

  _createBackground() {
    this.hud = new Phaser.Sprite(game, 0, 0, 'gui_hud');
    this.hud.alpha = 0.5;
    this.hud.width = 350;
    this.hud.height = 90;
    this.add(this.hud);
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
