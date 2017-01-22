import Phaser from 'phaser'
import { centerGameObjects } from '../utils'

export default class Splash extends Phaser.State {
  init () {}

  preload () {
  }

  create () {
    this.state.start('Menu')
  }

}
