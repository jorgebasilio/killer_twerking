/* globals __DEV__ */
import Phaser from 'phaser'
import SongFactory from '../service_objects/SongFactory'
import Hud from '../game_objects/Hud'

export default class Game extends Phaser.State {
  init () {}
  preload () {
    this.load.image('mushroom', './assets/images/mushroom2.png');
  }

  create () {
    let  factory;
    let currentSong;

    factory = new SongFactory(this.game);

    currentSong = factory.songs[0];
    factory._startSong(currentSong);

    this.noteSprites = factory._sprites(currentSong);

    this.hud = new Hud({game:this.game});
    this.game.add.group(this.hud);

    this.songStatus = {
      index: 0,
      range: null,
      symbol: null,
      status: null
    }

    this._createTitle('Killer Twerking');
  }

  update() {
    for (let sprite of this.noteSprites) {
      let hudSprite;

      hudSprite = this.hud._spriteByNote(sprite.data);
      this._check(sprite, hudSprite);
    }
  }

  _createTitle(text) {
    let banner;
    banner = this.add.text(this.world.centerX, this.world.centerY, text)
    banner.font = 'Bangers'
    banner.padding.set(10, 16)
    banner.fontSize = 40
    banner.fill = '#77BFA3'
    banner.smoothed = false
    banner.anchor.setTo(0.5)
  }

  _checkRange(sprite, hubSprite, range, name) {
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
      console.log(name);
    }
  }

  _check(sprite, hubSprite) {
    //this._checkGood(sprite, hubSprite);
    this._checkRange(sprite, hubSprite, 8, 'bad');
    this._checkRange(sprite, hubSprite, 6, 'good');
    this._checkRange(sprite, hubSprite, 0, 'perfect');
    this._checkRange(sprite, hubSprite, -6, 'good');
    this._checkRange(sprite, hubSprite, -8, 'bad');
  }

  render () {
    // if (__DEV__) {
    //   this.game.debug.spriteInfo(this.mushroom, 0, 0)
    // }
  }
}
