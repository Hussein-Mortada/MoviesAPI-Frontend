import React, { useEffect, useState } from 'react';
import NavBar from "../components/NavBar";
import '../App.css';
import axios from 'axios';
import MovieCard from '../components/MovieCard';
import "../css/search.css";
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';


function SearchPage() {
    const { searchQuery } = useParams();
    const [searchMovies, setSearchMovies] = useState([]);

    useEffect(() => {
        loadSearch();
    }, [searchQuery]);

    const loadSearch = async () => {
        const result = await axios.get(`http://localhost:8080/api/movies/search/${searchQuery}`);
        setSearchMovies(result.data);
    };
    return (
        <div className="search-page-container">
          <NavBar />
          You searched for: {searchQuery}
          {searchMovies.length > 0 ? (
            <div className="searched-movies">
              {searchMovies.map((movie) => (
                <div key={movie.imdbId} className="movie-card">
                  <MovieCard movie={movie} />
                </div>
              ))}
            </div>
          ) : (
            <p className="no-movies-found">No movies found.</p>
          )}
          <Footer />
        </div>
      );
}

export default SearchPage;
