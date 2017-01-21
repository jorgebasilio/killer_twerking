/* globals __DEV__ */
import Phaser from 'phaser'
import Mushroom from '../sprites/Mushroom'

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    const bannerText = 'Killer Twerking'
    let banner = this.add.text(this.world.centerX, this.game.height - 80, bannerText)
    banner.font = 'Bangers'
    banner.padding.set(10, 16)
    banner.fontSize = 40
    banner.fill = '#77BFA3'
    banner.smoothed = false
    banner.anchor.setTo(0.5)
    let menu = this.add.text(this.world.centerX, 200, 'Menu')
    menu.anchor.setTo(0.5)
    menu.inputEnabled = true
    menu.events.onInputUp.add(this.menuOnClick, this)

    this.mushroom = new Mushroom({
      game: this,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'mushroom'
    })

    this.game.add.existing(this.mushroom)
    console.log(this.world.top)
  }
  menuOnClick(){
    this.state.start('Menu')
  }
  render () {

  }
}
