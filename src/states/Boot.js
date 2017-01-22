import Phaser from 'phaser'
import WebFont from 'webfontloader'

export default class Boot extends Phaser.State {
  init () {
    this.stage.backgroundColor = '#EDEEC9'
    this.fontsReady = false
    this.fontsLoaded = this.fontsLoaded.bind(this)
  }

  preload () {
    this.load.image('cheeks', './assets/images/nalgas.png');
    this.load.spritesheet('end', './assets/images/end.png', 1366, 768, 5);
    this.load.image('end_screen', './assets/images/end_screen.png');
    this.load.image('retry_button', './assets/images/retry.png');
    this.load.image('credits_button', './assets/images/credits_button.png');
    this.load.image('mushroom', './assets/images/mushroom2.png');
    this.load.image('beach', './assets/images/background.png');
    this.load.image('fatty', './assets/images/bodilicious.png');
    this.load.image('left_cheek', './assets/images/nalga_l.png');
    this.load.image('right_cheek', './assets/images/nalga_r.png');
    this.load.image('loaderBar', './assets/images/loader-bar.png')

    this.load.image('gui_hud', './assets/images/gui_hud.png');
    this.load.image('gui_channel', './assets/images/gui_channel.png');

    this.load.image('arrow', './assets/images/flecha.png');

    this.load.image('sea_frontlevel', './assets/images/sea_frontlevel.png');
    this.load.image('waves', './assets/images/waves_1.png');

    this.load.spritesheet('people', './assets/images/people.png', 937, 260, 2);
    this.load.spritesheet('instructor', './assets/images/instructor.png', 152, 192, 2);
    this.load.spritesheet('sea', './assets/images/sea.png', 1366, 768, 3);

    this.load.audio('clap', 'assets/sounds/clap.wav');
    this.load.audio('song', 'assets/sounds/song.mp3');
    this.load.image('intro1', './assets/images/intro1.png');
    this.load.image('intro2', './assets/images/intro2.png');
    this.load.image('intro3', './assets/images/intro3.png');
    this.load.image('intro4', './assets/images/intro4.png');
    this.load.image('intro5', './assets/images/intro5.png');
    this.load.audio('introSound', 'assets/sounds/song.mp3');
    this.load.image('start_screen', './assets/images/start_screen.png');
    this.load.image('start_button', './assets/images/start_button.png');
    this.load.image('credits_button', './assets/images/credits_button.png');
    WebFont.load({
      google: {
        families: ['Bangers']
      },
      active: this.fontsLoaded
    })

    let text = this.add.text(this.world.centerX, this.world.centerY, 'loading fonts', { font: '16px Arial', fill: '#dddddd', align: 'center' })
    text.anchor.setTo(0.5, 0.5)

    this.load.image('loaderBg', './assets/images/loader-bg.png')
    this.load.image('loaderBar', './assets/images/loader-bar.png')
  }

  render () {
    if (this.fontsReady) {
      this.state.start('Splash')
    }
  }

  fontsLoaded () {
    this.fontsReady = true
  }

}
