import Phaser from 'phaser'
import SongRow from './SongRow'

export default class Song extends Phaser.Group {
  constructor(song, {game, parent, name, addToStage, enableBody, physicsBodyType}) {
    super(game, parent, name, addToStage, enableBody, physicsBodyType);
    this._createRows(song);
    this._addToSong();
    this.y = game.height
  }

  update(){
    this.y -= 2;
  }

  _addToSong() {
    for (let songRow of this.songRows) {
      this.add(songRow);
    }
  }

  _createRows(song) {
    this.songRows = song.notes.map((note, index) => {
      console.log(note);
      return new SongRow(note, index, {game:this});
    });
  }

}
