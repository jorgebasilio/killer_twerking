import Phaser from 'phaser'

export default class extends Phaser.State {
  init () {}
  preload () {
    this.load.image('end_screen', './assets/images/end_screen.png');
  }

  create () {
    let endScreen;

    endScreen = this.game.add.sprite(0, 0, 'end_screen');
    endScreen.width = this.world.width;
    endScreen.height = this.world.height;
    const bannerText = 'Credits'
    let banner = this.add.text(this.world.centerX, 50, bannerText)
    banner.font = 'Bangers'
    banner.padding.set(10, 16)
    banner.fontSize = 40
    banner.fill = '#77BFA3'
    banner.smoothed = false
    banner.anchor.setTo(0.5)
    let menu = this.add.text(this.world.width - 100, 50, 'Back')
    
    menu.anchor.setTo(0.5)
    menu.inputEnabled = true
    menu.events.onInputUp.add(this.menuOnClick, this)

    let cbanner = this.add.text(this.world.centerX, 90, 'Conceptualizacion')
    let ctext = this.add.text(this.world.centerX, 120, 'Todos')
    let dbanner = this.add.text(this.world.centerX, 150, 'Development')
    let dtext = this.add.text(this.world.centerX, 230,' Romer Ramos / Jorge Basilio\nNelson Marcano / Jose de Leon\n     Victor Padula')
    let dsbanner = this.add.text(this.world.centerX, 315,'Ilustration')
    let dstext = this.add.text(this.world.centerX, 350,' Dagriz Noguera / Densel Gutierrez')
    let mbanner = this.add.text(this.world.centerX, 395, 'Music')
    let mtext = this.add.text(this.world.centerX, 435,'Juan Manrique\nDensel Gutierrez')
    let abanner = this.add.text(this.world.centerX, 475, 'Special Thanks')
    let atext = this.add.text(this.world.centerX, 500,'Anais Legonia  Maria Romero  Jorge Fuentes  Academia DevToHack')

    let textarray = [ctext,dtext,dstext,mtext,atext]
    for(let text of textarray){
      text.fontSize = 20
      text.anchor.setTo(0.5)
    }
    let bannerarray = [cbanner,dbanner,dsbanner,mbanner, abanner]
    for(let bnr of bannerarray){
      bnr.font = 'Bangers'
      bnr.anchor.setTo(0.5)
      bnr.padding.set(10, 16)
      //bnr.fill = '#77BFA3'
      bnr.smoothed = false 
    }
  }
  menuOnClick(){
    this.state.start('Menu')
  }
  render () {
  }
}