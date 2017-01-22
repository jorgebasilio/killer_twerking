import Phaser from 'phaser'

export default class extends Phaser.State {
  init (score) {
    this.score = score
  }
  preload () {
  }

  create () {
    let end;
    this.song = game.add.audio('waveSound');
    this.song.loop = true
    this.song.play()
    end = this.game.add.sprite(0, 0, 'end');
    end.scale.setTo(0.78, 0.78);
    end.animations.add('move')
    end.animations.play('move', 1, false)
    this.game.time.events.add(Phaser.Timer.SECOND * 6, this.timed, this)
  }

  timed (){
    this.song.stop()
    this.state.start('Finish', true, false, this.score)
  }
  render () {

  }
}
