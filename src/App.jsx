import './styles.css';
import MoviePlaylist from './components/MoviePlaylist.jsx';
import SongPlaylist from './components/SongPlaylist.jsx';

export default function App() {
  const handleResetClick = () => {};

  return (
    <div className="container is-fluid">
      <button
        onClick={() => handleResetClick()}
        className="button buttonReset text-color"
      >
        Reset Both Playlists
      </button>
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlaylist />
    </div>
  );
}
