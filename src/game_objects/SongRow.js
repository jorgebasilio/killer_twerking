import Phaser from 'phaser'
import config from '../config'
import Row from './Row'


export default class SongRow extends Phaser.Group {

  constructor(note, {game, parent, name, addToStage, enableBody, physicsBodyType}) {
    super(game, parent, name, addToStage, enableBody, physicsBodyType);
    this.note = note;
    this._defaultValues();
    this._createBackground();
    this._createSprite();
  }

  _defaultValues() {
    this.width = 400;
    this.height = 300;
  }

  _createSprite() {
    if(this.note) {
      if(this.note.symbol == 'l') {
        this.sprite = new Phaser.Sprite(game, 0, 0, 'mushroom');
      } else if(this.note.symbol == 'r') {
        this.sprite = new Phaser.Sprite(game, 100, 0, 'mushroom');
      } else if(this.note.symbol == 'n') {
        this.sprite = new Phaser.Sprite(game, 200, 0, 'mushroom');
      }
      this.add(this.sprite);
    }
  }

  _createBackground() {
    let graphics;
    graphics = new Row(game, 0, 0, 300, 100, 0x028231);
    this.add(graphics);
  }

}
