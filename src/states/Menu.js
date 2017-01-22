import Phaser from 'phaser'

export default class extends Phaser.State {
  init () {}
  preload () {

  }

  create () {
    let startScreen;
    //const bannerText = 'Menu de Killer-Twrk'

    this.song = game.add.audio('menuSound');
    this.song.loop= true
    this.song.play()

    startScreen = this.game.add.sprite(0, 0, 'start_screen');
    startScreen.width = this.world.width;
    startScreen.height = this.world.height;

    //let start = this.add.text(this.world.centerX, this.world.centerY, 'Start Game')
    let start = this.game.add.sprite(this.world.centerX, this.world.centerY + 50, 'start_button');
    start.anchor.setTo(0.5)
    start.width = 200
    start.height = 75
    start.inputEnabled = true
    start.events.onInputUp.add(this.startOnClick, this)

    //let credits = this.add.text(this.world.centerX, start.y + start.height + 20, 'Credits')
    let credits = this.game.add.sprite(this.world.centerX, start.y + start.height + 20, 'credits_button')
    credits.anchor.setTo(0.5)
    credits.width = 200
    credits.height = 75
    credits.inputEnabled = true
    credits.events.onInputUp.add(this.creditsOnClick, this)
  }

  startOnClick () {
    this.song.stop()
    this.state.start('Intro')
  }
  creditsOnClick () {
    this.state.start('Credits')
  }
  render () {
  }
}
