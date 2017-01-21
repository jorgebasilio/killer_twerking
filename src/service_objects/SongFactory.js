import config from '../config'
import Song from '../game_objects/Song'

export default class SongFactory {
  constructor(game) {
    this.game = game;
    this.songs = config.songs.map((song, index) => {
      return new Song(song, {game:this});
    });
    this._addToGame();
  }

  _addToGame() {
    for (let song of this.songs) {
      this.game.add.group(song);
    }
  }
}
