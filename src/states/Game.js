/* globals __DEV__ */
import Phaser from 'phaser'
import SongFactory from '../service_objects/SongFactory'
import Hud from '../game_objects/Hud'
import Fatty from '../game_objects/Fatty'

export default class Game extends Phaser.State {
  init () {}
  preload () {
    this.load.image('mushroom', './assets/images/mushroom2.png');
  }

  create () {
    let  factory;
    let currentSong;
    let fatty;
    factory = new SongFactory(this.game);

    currentSong = factory.songs[0];
    factory._startSong(currentSong);

    this.noteSprites = factory._sprites(currentSong);
    this.score = 0;
    this.hud = new Hud({game:this.game});
    this.game.add.group(this.hud);
    this.fatty = new Fatty({game:this.game});
    this.game.add.group(this.fatty);

    this.lastIndex = 0;
    this.songStatus = {
      index: 0,
      range: null,
      note: null,
      status: null
    }

    this.cursors = this.game.input.keyboard.createCursorKeys();
    this._createTitle('Killer Twerking');
  }

  _checkInput(key, symbol) {
    if (key.isDown) {
      if(this.songStatus.note && this.songStatus.note.symbol == symbol && this.songStatus.status != 'done') {
        //console.log("!!!!!!!")
        this.banner.text = this.songStatus.range;
        this.songStatus.status = 'done';
        this._updateScore(this.songStatus.range);
        //console.log(this.songStatus.range);
        //console.log("!!!!!!!")
      }
    }
  }

  update() {
    let sprite = this.noteSprites[0];
    if(sprite) {
      let hudSprite;
      hudSprite = this.hud._spriteByNote(sprite.data);
      this._check(sprite, hudSprite);
    }

    this._checkInput(this.cursors.left, 'l');
    this._checkInput(this.cursors.right, 'r');
    this._checkInput(this.cursors.down, 'n');

  }

  _createTitle(text) {
    this.banner;
    this.banner = this.add.text(this.world.centerX, this.world.centerY, text)
    this.banner.font = 'Bangers'
    this.banner.padding.set(10, 16)
    this.banner.fontSize = 40
    this.banner.fill = '#77BFA3'
    this.banner.smoothed = false
    this.banner.anchor.setTo(0.5)
  }

  _checkRange(sprite, hubSprite, range, name, callback) {
    let boundsSprite = sprite.getBounds();
    let boundsHubSprite= hubSprite.getBounds();

    let centerHub = {
      x: (boundsHubSprite.x + boundsHubSprite.width) / 2,
      y: (boundsHubSprite.height - boundsHubSprite.y) / 2
    }

    let centerSprite = {
      x: (boundsSprite.x + boundsSprite.width) / 2,
      y: (boundsSprite.height - boundsSprite.y) / 2
    }

    if(centerHub.y - range == centerSprite.y) {
      this.songStatus.range = name;
      this.songStatus.note = sprite.data;
      if (callback) callback();
    }
  }

  _updateScore(name){
    switch(name){
      case 'bad':
        this.score += 1;
      case 'good':
        this.score += 1;
      case 'perfect':
        this.score += 2;
      default: 
        console.log(this.score);  
    }
    console.log(name);
  }

  _check(sprite, hubSprite) {
    this._checkRange(sprite, hubSprite, 10, 'bad');
    this._checkRange(sprite, hubSprite, 8, 'good');
    this._checkRange(sprite, hubSprite, 4, 'perfect');
    this._checkRange(sprite, hubSprite, -8, 'good');
    this._checkRange(sprite, hubSprite, -10, 'bad');
    this._checkRange(sprite, hubSprite, -12, 'missed', () => {
      if(this.songStatus.status != 'done') {
        this.banner.text = 'missed';
      }
      this.songStatus = {
        index: 0,
        range: null,
        note: null,
        status: null
      }
      this.noteSprites.splice(0,1);
    });
  }

  render () {
    // if (__DEV__) {
    //   this.game.debug.spriteInfo(this.mushroom, 0, 0)
    // }
  }
}
