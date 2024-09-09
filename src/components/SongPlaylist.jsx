import { createRandomSong } from '../data/data-access.js';

function SongPlaylist() {
  // To Do:
  // Get a list of songs
  const songPlaylist = [];

  const handleSongAdd = (song) => {
    console.log(song);
    // To Do:
    // Add song to list of songs
  };
  const handleSongRemove = (song) => {
    // To Do:
    // Remove song from a list of songs
  };

  const renderedSongs = songPlaylist.map((song) => {
    return (
      <li key={song}>
        {song}
        <button
          onClick={() => handleSongRemove(song)}
          className="button buttonRemove"
        >
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Song Playlist</h3>
        <div className="buttons buttonRemove">
          <button
            onClick={() => handleSongAdd(createRandomSong())}
            className="button text-color"
          >
            + Add Song to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedSongs}</ul>
    </div>
  );
}

export default SongPlaylist;
