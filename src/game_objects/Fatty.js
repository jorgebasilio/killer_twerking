import Phaser from 'phaser'
import Row from './Row'
import LeftCheek from './Cheek'
import RightCheek from './Cheek'

export default class Fatty extends Phaser.Group {
  constructor({game, parent, name, addToStage, enableBody, physicsBodyType}) {
    super(game, parent, name, addToStage, enableBody, physicsBodyType);
    this._createSprites();
  }

  _createSprites() {
    this.fattyBody = new Phaser.Sprite(game, this.game.world.centerX-80, 80, 'fatty');
    this.add(this.fattyBody);

    this.leftCheek = new Phaser.Sprite(game, this.game.world.centerX-80, this.game.world.centerY-60, 'left_cheek');
    this.add(this.leftCheek);

    this.rightCheek = new Phaser.Sprite(game, this.game.world.centerX+160, this.game.world.centerY-50, 'right_cheek');
    this.add(this.rightCheek);
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
