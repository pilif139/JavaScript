import './App.css';
import { useEffect, useState } from 'react';
import searchIcon from './search.svg';
import MovieCard from './MovieCard.jsx';

//API key: 1519aa7a
const API_URL = "http://www.omdbapi.com?apikey=1519aa7a";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies("Superman")
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          value={searchTerm}
          placeholder='Search for movies'
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
        <img src={searchIcon} alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}

    </div>
  )
}

export default App
