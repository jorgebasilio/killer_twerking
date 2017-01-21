/* globals __DEV__ */
import Phaser from 'phaser'
import Mushroom from '../sprites/Mushroom'
import SongFactory from '../service_objects/SongFactory'

export default class extends Phaser.State {
  init () {}
  preload () {
    this.load.image('mushroom', './assets/images/mushroom2.png');
  }

  create () {
    const bannerText = 'Killer Twerking';
    let factory;
    let songs;
    let banner;

    factory = new SongFactory(this.game);

    banner = this.add.text(this.world.centerX, this.game.height - 80, bannerText)
    banner.font = 'Bangers'
    banner.padding.set(10, 16)
    banner.fontSize = 40
    banner.fill = '#77BFA3'
    banner.smoothed = false
    banner.anchor.setTo(0.5)
  }

  render () {
    // if (__DEV__) {
    //   this.game.debug.spriteInfo(this.mushroom, 0, 0)
    // }
  }
}
