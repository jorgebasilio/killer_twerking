import Phaser from 'phaser'

export default class extends Phaser.State {
  init () {}
  preload () {


  }

  create () {
    this.song = game.add.audio('introSound');
    this.song.play()
    this.current = 3
    this.intro1 = this.game.add.sprite(game.world.centerX, game.world.centerY, 'intro1');
    this.intro1.anchor.setTo(0.5, 0.5);
    this.intro1.scale.setTo(0.78, 0.78);
    this.intro2 = this.game.add.sprite(game.world.centerX, game.world.centerY, 'intro2');
    this.intro2.anchor.setTo(0.5, 0.5);
    this.intro2.scale.setTo(0.78, 0.78);
    this.intro2.alpha = 0
    this.timer = game.time.create(false);
    //  Set a TimerEvent to occur after 3 seconds
    this.timer.add(1000, this.fadePictures, this);

    //  Start the timer running - this is important!
    //  It won't start automatically, allowing you to hook it to button events and the like.
    this.timer.start();
    //this.game.time.events.add(Phaser.Timer.SECOND * 20, this.timed, this)
  }

  fadePictures() {

    var tween;

    if (this.intro1.alpha === 1)
    {
      tween = game.add.tween(this.intro1).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
      game.add.tween(this.intro2).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true);
    }
    else
    {
      game.add.tween(this.intro1).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true);
      tween = game.add.tween(this.intro2).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
    }

    //  When the cross-fade is complete we swap the image being shown by the now hidden picture
    tween.onComplete.add(this.changePicture, this);

  }

  changePicture() {

    if (this.intro1.alpha === 0)
    {
      this.intro1.loadTexture('intro' + this.current);
    }
    else
    {
      this.intro2.loadTexture('intro' + this.current);
    }

    this.current++;

    if (this.current > 6)
    {
      this.game.time.events.add(Phaser.Timer.SECOND * 1, this.timed, this)
    }

    //  And set a new TimerEvent to occur after 3 seconds
    this.timer.add(1000, this.fadePictures, this);

  }

  timed (){
    this.song.stop()
    this.state.start('Game')
  }
  render () {

  }
}
