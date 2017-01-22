import Phaser from 'phaser'

export default class Finish extends Phaser.State {
  init (score) {
    this.score = score;
  }
  preload () {}

  create () {
    this.banner = this.add.text(this.world.centerX, 100, `Score: ${this.score}`)
    this.banner.font = 'Bangers'
    this.banner.padding.set(10, 16)
    this.banner.fontSize = 40
    this.banner.fill = '#77BFA3'
    this.banner.smoothed = false
    this.banner.anchor.setTo(0.5)
    let start = this.add.text(this.world.centerX, 200, 'Reiniciar?')
    start.anchor.setTo(0.5)
    start.inputEnabled = true
    start.events.onInputUp.add(this.startOnClick, this)
    let credits = this.add.text(this.world.centerX, 300, 'Credits')
    credits.anchor.setTo(0.5)
    credits.inputEnabled = true
    credits.events.onInputUp.add(this.creditsOnClick, this)

  }

  startOnClick () {
    this.state.start('Game')
  }
  creditsOnClick () {
    this.state.start('Credits')
  }
  render () {
  }
}
