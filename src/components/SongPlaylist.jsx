import { useDispatch, useSelector } from 'react-redux';
import { addSong, removeSong } from '../store/index.js';
import { createRandomSong } from '../data/data-access.js';

function SongPlaylist() {
  const dispatch = useDispatch();
  const songPlaylist = useSelector((state) => {
    // console.log(state);
    return state.songs; //  songs `key` comes from the store reducer.
  });

  const handleSongAdd = (song) => {
    dispatch(addSong(song));
  };
  const handleSongRemove = (song) => {
    dispatch(removeSong(song));
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
      <ul className="list">{renderedSongs}</ul>
    </div>
  );
}

export default SongPlaylist;
