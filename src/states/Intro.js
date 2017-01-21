import Phaser from 'phaser'

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    const bannerText = 'Introduction.'
    let banner = this.add.text(this.world.centerX, this.game.height - 80, bannerText)
    banner.font = 'Bangers'
    banner.padding.set(10, 16)
    banner.fontSize = 40
    banner.fill = '#77BFA3'
    banner.smoothed = false
    banner.anchor.setTo(0.5)
    this.game.time.events.add(Phaser.Timer.SECOND * 5, this.timed, this)
  }

  timed (){
    this.state.start('Game')
  }
  render () {

  }
}