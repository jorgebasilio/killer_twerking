import Phaser from 'phaser'

export default class Finish extends Phaser.State {
  init (score) {
    this.score = score;
  }
  preload () {
  }

  create () {
    let endScreen;

    endScreen = this.game.add.sprite(0, 0, 'end_screen');
    endScreen.width = this.world.width;
    endScreen.height = this.world.height;

    this.banner = this.add.text(this.world.centerX, 100, `Score: ${this.score}`)
    this.banner.font = 'Bangers'
    this.banner.padding.set(10, 16)
    this.banner.fontSize = 70
    this.banner.fill = '#E37F26'
    this.banner.strokeThickness = 3
    this.banner.smoothed = false
    this.banner.anchor.setTo(0.5)

    //let start = this.add.text(this.world.centerX, 200, 'Reiniciar?')
    let retry = this.game.add.sprite(this.world.centerX, this.world.centerY, 'retry_button');
    retry.anchor.setTo(0.5)
    retry.width = 200
    retry.height = 75
    retry.anchor.setTo(0.5)
    retry.inputEnabled = true
    retry.events.onInputUp.add(this.retryOnClick, this)

    //let credits = this.add.text(this.world.centerX, 300, 'Credits')
    let credits = this.game.add.sprite(this.world.centerX, retry.y + retry.height + 20, 'credits_button')
    credits.anchor.setTo(0.5)
    credits.width = 200
    credits.height = 75
    credits.inputEnabled = true
    credits.events.onInputUp.add(this.creditsOnClick, this)
  }

  retryOnClick () {
    this.state.start('Game')
  }
  creditsOnClick () {
    this.state.start('Credits')
  }
  render () {
  }
}
