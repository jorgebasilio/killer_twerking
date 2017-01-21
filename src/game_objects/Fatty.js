import Phaser from 'phaser'
import Row from './Row'
import LeftCheek from './Cheek'
import RightCheek from './Cheek'

export default class Fatty extends Phaser.Group {
  constructor({game, parent, name, addToStage, enableBody, physicsBodyType}) {
    super(game, parent, name, addToStage, enableBody, physicsBodyType);
    this._createBackground();
    //this._createSprites();
  }

  _createSprites() {
    this.leftCheek = new Phaser.Sprite(game, 20, 10, 'mushroom');
    this.add(this.hudLeft);

    this.hudMiddle = new Phaser.Sprite(game, 120, 10, 'mushroom');
    this.add(this.hudMiddle);

    this.hudRight = new Phaser.Sprite(game, 220, 10, 'mushroom');
    this.add(this.hudRight);
  }

  _createBackground() {
    let fattyBody, leftCheek, rightCheek;
    fattyBody = new Row(game, this.game.world.centerX-80, 50, 300, 500, 0x712871);
    this.add(fattyBody);
    leftCheek = new Row(game, this.game.world.centerX-180, this.game.world.centerY-50, 250, 250, 0x712871);
    this.add(leftCheek);
    rightCheek = new Row(game, this.game.world.centerX+80, this.game.world.centerY-50, 250, 250, 0x712871);
    this.add(rightCheek);
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