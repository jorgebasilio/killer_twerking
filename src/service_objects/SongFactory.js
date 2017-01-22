import config from '../config'
import Song from '../game_objects/Song'

export default class SongFactory {
  constructor(game) {
    this.game = game;
    this.songs = config.songs.map((song, index) => {
      return new Song(song, {game:this.game});
    });
  }

  _startSong(song) {
    this.game.add.group(song);
  }

  _sprites(song) {
    return song.songRows.map((songRow, index) => {
      return songRow.sprite;
    })
  }
}
