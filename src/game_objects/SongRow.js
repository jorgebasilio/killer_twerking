import Phaser from 'phaser'
import config from '../config'
import Row from './Row'


export default class SongRow extends Phaser.Group {

  constructor(note, index, marginTop, {game, parent, name, addToStage, enableBody, physicsBodyType}) {
    super(game, parent, name, addToStage, enableBody, physicsBodyType);

    this.note = note;
    this.index = index;
    this.marginTop = marginTop

    this._createBackground();
    this._createSprite();
  }

  _createSprite() {
    if(this.note) {
      if(this.note.symbol == 'l') {
        this.sprite = new Phaser.Sprite(game, 20, this._setHeight() + 10, 'mushroom');
      } else if(this.note.symbol == 'r') {
        this.sprite = new Phaser.Sprite(game, 220, this._setHeight() + 10, 'mushroom');
      } else if(this.note.symbol == 'n') {
        this.sprite = new Phaser.Sprite(game, 120, this._setHeight() + 10, 'mushroom');
      }
      this.sprite.data = this.note;
      this.add(this.sprite);
    }
  }

  _setHeight() {
    return (this.index*80) + this.marginTop;
  }

  _createBackground() {
    let graphics;
    graphics = new Row(game, 0, this._setHeight(), 300, 80, 0x0282310);
    this.add(graphics);
  }

}
