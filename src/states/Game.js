/* globals __DEV__ */
import Phaser from 'phaser'
import SongFactory from '../service_objects/SongFactory'
import Hud from '../game_objects/Hud'
import Fatty from '../game_objects/Fatty'

export default class Game extends Phaser.State {
  init () {}
  preload () {
    this.load.image('mushroom', './assets/images/mushroom2.png');
    this.load.image('beach', './assets/images/background.png');
    this.load.image('fatty', './assets/images/bodilicious.png');
    this.load.image('left_cheek', './assets/images/nalga_l.png');
    this.load.image('right_cheek', './assets/images/nalga_r.png');
    this.load.image('loaderBar', './assets/images/loader-bar.png')

    this.load.image('gui_hud', './assets/images/gui_hud.png');
    this.load.image('gui_channel', './assets/images/gui_channel.png');

    this.load.image('arrow', './assets/images/flecha.png');
    this.load.image('cheeks', './assets/images/nalgas.png');
    this.load.image('sea_frontlevel', './assets/images/sea_frontlevel.png');
    this.load.image('waves', './assets/images/waves_1.png');

    this.load.spritesheet('people', './assets/images/people.png', 937, 260, 2);
    this.load.spritesheet('instructor', './assets/images/instructor.png', 152, 192, 2);
    this.load.spritesheet('sea', './assets/images/sea.png', 1366, 768, 3);

    this.load.audio('clap', 'assets/sounds/clap.wav');
    this.load.audio('song', 'assets/sounds/song.mp3');
  }

  create () {
    let  factory;
    let currentSong;
    let fatty;
    let people;
    let instructor;
    let sea;
    let gui_channel;
    let sea_frontlevel;
    let waves;

    this.claped = false;

    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.physics.arcade.gravity.y = 600;
    this.game.add.sprite(0, 0, 'beach');

    this.clap = game.add.audio('clap');
    this.song = game.add.audio('song');
    this.song.onDecoded.add(() => {
      this.song.fadeIn(3000)
    }, this);

    //this.song.play();
    // this.clap.allowMultiple = true;
    // this.clap.addMarker('clap', 0, 0.5);

    people = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'people');
    people.animations.add('dance')
    people.animations.play('dance', 5, true)
    people.anchor.setTo(0.5);

    instructor = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY - 200, 'instructor');
    instructor.animations.add('dance')
    instructor.animations.play('dance', 5, true)
    instructor.anchor.setTo(0.5);

    sea = this.game.add.sprite(0, this.game.world.height - 780, 'sea');
    sea.animations.add('move')
    sea.animations.play('move', 3, true)

    sea_frontlevel = this.game.add.sprite(0, this.game.world.height - 100, 'sea_frontlevel');
    //waves = this.game.add.sprite(0, this.game.world.height - 100, 'waves');

    gui_channel = this.game.add.sprite(0, 90, 'gui_channel');
    gui_channel.width = 350;
    gui_channel.height = this.game.world.height - 90;

    factory = new SongFactory(this.game);

    currentSong = factory.songs[0];
    factory._startSong(currentSong);

    this.noteSprites = factory._sprites(currentSong);
    this.score = 0;
    this.hud = new Hud({game:this.game});
    this.game.add.group(this.hud);
    this.ldr = this.game.add.sprite(this.game.world.centerX,this.game.world.height - 70, 'loaderBar');
    this.fatty = new Fatty({game:this.game});
    this.game.add.group(this.fatty);

    this.lc = this.game.add.sprite(this.game.world.centerX-80, this.game.world.centerY-60, 'left_cheek');
    this.rc = this.game.add.sprite(this.game.world.centerX+160, this.game.world.centerY-60, 'right_cheek');
    this.game.physics.arcade.enable([this.lc,this.ldr,this.rc]);
    this.ldr.body.allowGravity = false;
    this.lc.body.bounce.y = 0.7;
    this.rc.body.bounce.y = 0.7;
    this.ldr.body.immovable = true;
    // this.ldr.alpha = 0;
    this.lc.body.collideWorldBounds = true;
    this.rc.body.collideWorldBounds = true;
    console.log(this.ldr);

    this.lastIndex = 0;
    this.songStatus = {
      index: 0,
      range: null,
      note: null,
      status: null
    }
    this._createTitle('');
    this._createScore(0);

    this.cursors = this.game.input.keyboard.createCursorKeys();
    //console.log(this.fatty.leftCheek);
    this.spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    this.spaceKey.onDown.add(() => { 
      if(this.game.paused) {
        this.game.paused = false;
        this.song.resume();
      } else {
        this.game.paused = true;
        this.song.pause();
      }
    }, this);
  }

  _checkInput(key, symbol) {
    if (key.isDown) {
      if(this.songStatus.note && this.songStatus.note.symbol == symbol && this.songStatus.status != 'done') {
        //console.log("!!!!!!!")

        // if(this.songStatus.range == 'perfect') {
        //   this.clap.play();
        // }
        this.banner.text = this.songStatus.range;
        this.songStatus.status = 'done';
        this._updateScore(this.songStatus.range);
        switch(symbol){
          case 'l':
            console.log('Switch')
            this.lc.y -= 15;
            //this._moveLeftCheek
            break;
          case 'r':
            this.rc.y -= 15;
            break;
          case 'n':
          if (this.songStatus.range == 'perfect') this.game.camera.shake(0.005, 200);
            this.lc.y -= 15;
            this.rc.y -= 15;
            break;
          default:
        }
        //console.log(this.songStatus.range);
        //console.log("!!!!!!!")
      }
    }
  }

  update() {
    this.game.physics.arcade.collide([this.lc,this.rc], this.ldr)
    let sprite = this.noteSprites[0];

    if(sprite) {
      let hudSprite;
      hudSprite = this.hud._spriteByNote(sprite.data);
      this._check(sprite, hudSprite);
    } else {
      console.log('VOLUMEN!',this.song.volume);
      this.song.volume = this.song.volume * 0.95;
      game.time.events.add(1300, () =>{
        this.song.stop();
        this.state.start('Autro', true, false, this.score);
      });
    }

    this._checkInput(this.cursors.left, 'l');
    this._checkInput(this.cursors.right, 'r');
    this._checkInput(this.cursors.down, 'n');
  }

  _createScore(score) {
    this.scoreText;
    this.scoreText = this.add.text(this.world.width - 100, 50, `Score: ${score}`)
    this.scoreText.font = 'Bangers'
    this.scoreText.padding.set(10, 16)
    this.scoreText.fontSize = 30
    this.scoreText.fill = '#DDD'
    this.scoreText.strokeThickness = 1
    this.scoreText.smoothed = false
    this.scoreText.anchor.setTo(0.5)
  }

  _createTitle(text) {
    this.banner;
    this.banner = this.add.text(180, this.world.centerY - 50, text)
    this.banner.font = 'Bangers'
    this.banner.padding.set(10, 16)
    this.banner.fontSize = 70
    this.banner.fill = '#E37F26'
    this.banner.strokeThickness = 3
    this.banner.smoothed = false
    this.banner.anchor.setTo(0.5)
  }

  _checkRange(sprite, hubSprite, range, name, callback) {
    let boundsSprite = sprite.getBounds();
    let boundsHubSprite= hubSprite.getBounds();

    let centerHub = {
      x: (boundsHubSprite.x + boundsHubSprite.width) / 2,
      y: (boundsHubSprite.height - boundsHubSprite.y) / 2
    }

    let centerSprite = {
      x: (boundsSprite.x + boundsSprite.width) / 2,
      y: (boundsSprite.height - boundsSprite.y) / 2
    }

    if(centerHub.y - range < centerSprite.y) {
      if(this.songStatus.range == 'perfect' && !this.claped) {
        //this.clap.play();
        this.claped = true;
      }
      this.songStatus.range = name;
      this.songStatus.note = sprite.data;
      if (callback) callback();
    }
  }
  _moveLeftCheek(){
    this.fatty.set(this.fatty.leftCheek,'y',5,false,false,1);
    console.log('Hola')
    //setTimeout(this.fatty.set(this.fatty.leftCheek,'y',5,false,false,2), 500);
  }
  _updateScore(name){
    switch(name){
      case 'bad':
        this.score += 1;
        break;
      case 'good':
        this.score += 2;
        break;
      case 'perfect':
        this.score += 3;
        break;
      default:
        console.log(this.score);
    }
    this.scoreText.text = `Score: ${this.score}`;
    console.log(this.score);
    console.log(name);
  }

  _check(sprite, hubSprite) {
    this._checkRange(sprite, hubSprite, 10, 'bad');
    this._checkRange(sprite, hubSprite, 8, 'good');
    this._checkRange(sprite, hubSprite, 4, 'perfect');
    this._checkRange(sprite, hubSprite, -8, 'good');
    this._checkRange(sprite, hubSprite, -10, 'bad');
    this._checkRange(sprite, hubSprite, -12, 'missed', () => {
      if(this.songStatus.status != 'done') {
        this.banner.text = 'missed';
      }
      this.songStatus = {
        index: 0,
        range: null,
        note: null,
        status: null
      }
      this.noteSprites.splice(0,1);
      this.claped = false;
    });
  }

  menuOnClick(){
    this.state.start('Menu')
  }
  render () {

  }
}
