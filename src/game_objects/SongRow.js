import Phaser from 'phaser'
import config from '../config'
import Row from './Row'


export default class SongRow extends Phaser.Group {

  constructor(note, index, {game, parent, name, addToStage, enableBody, physicsBodyType}) {
    super(game, parent, name, addToStage, enableBody, physicsBodyType);
    this.note = note;
    this.index = index;
    this._defaultValues();
    this._createBackground();
    this._createSprite();
  }

  _defaultValues() {
    this.width = 400;
    this.height = 150;
  }

  _createSprite() {
    let { note, sprite } = this;
    if(note) {
      if(note.symbol == 'l') {
        sprite = new Phaser.Sprite(game, 20, this._setHeight(), 'mushroom');
      } else if(note.symbol == 'r') {
        sprite = new Phaser.Sprite(game, 120, this._setHeight(), 'mushroom');
      } else if(note.symbol == 'n') {
        sprite = new Phaser.Sprite(game, 220, this._setHeight(), 'mushroom');
      }
      this.add(sprite);
    }
  }

  _setHeight() {
    return this.index*80
  }

  _createBackground() {
    let graphics;
    graphics = new Row(game, 0, this._setHeight(), 300, 80, 0x028231);
    this.add(graphics);
  }

}
