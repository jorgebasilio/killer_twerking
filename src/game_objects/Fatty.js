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
  }

}
