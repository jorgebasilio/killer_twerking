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
        this.sprite = new Phaser.Sprite(game, 50, this._setHeight() + 45, 'arrow');
        this.sprite.anchor.setTo(0.5);
        this.sprite.angle = -90;
      } else if(this.note.symbol == 'r') {
        this.sprite = new Phaser.Sprite(game, 300, this._setHeight() + 45, 'arrow');
        this.sprite.anchor.setTo(0.5);
        this.sprite.angle = 90;
      } else if(this.note.symbol == 'n') {
        this.sprite = new Phaser.Sprite(game, 175, this._setHeight() + 45, 'cheeks');
        this.sprite.anchor.setTo(0.5);
      }
      this.sprite.data = this.note;
      this.add(this.sprite);
    }
  }

  _setHeight() {
    return (this.index*90) + this.marginTop;
  }

  _createBackground() {
    // let graphics;
    // graphics = new Row(game, 0, this._setHeight(), 350, 90, 0x272891);
    // graphics.alpha = 0.2;
    // this.add(graphics);
  }

}
