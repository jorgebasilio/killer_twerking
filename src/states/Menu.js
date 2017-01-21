import Phaser from 'phaser'

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    const bannerText = 'Menu de Killer-Twrk'
    let banner = this.add.text(this.world.centerX, 100, bannerText)
    banner.font = 'Bangers'
    banner.padding.set(10, 16)
    banner.fontSize = 40
    banner.fill = '#77BFA3'
    banner.smoothed = false
    banner.anchor.setTo(0.5)
    let start = this.add.text(this.world.centerX, 200, 'Start Game')
    start.anchor.setTo(0.5)
    start.inputEnabled = true
    start.events.onInputUp.add(this.startOnClick, this)
    let credits = this.add.text(this.world.centerX, 300, 'Credits')
    credits.anchor.setTo(0.5)
    credits.inputEnabled = true
    credits.events.onInputUp.add(this.creditsOnClick, this)

  }

  startOnClick () {
    this.state.start('Intro')
  }
  creditsOnClick () {
    this.state.start('Credits')
  }
  render () {
  }
}