import React, { useEffect, useRef, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import NavBar from "../components/NavBar";
import '../App.css';
import Slider from "../components/Slider";

import axios from 'axios';
import MovieCard from '../components/MovieCard';
import "../css/home.css";
import Footer from '../components/Footer';


function Home() {
    //recent movies
    const [recentMovies, setRecentMovies] = useState([]);

    useEffect(() => {
        loadRecent();
    }, []);

    const loadRecent = async () => {
        const result = await axios.get("http://localhost:8080/api/movies/recent");
        setRecentMovies(result.data);
    };

    //explore movies
    const [exploreMovies, setexploreMovies] = useState([]);

    useEffect(() => {
        loadExplore();
    }, []);

    const loadExplore = async () => {
        const result = await axios.get("http://localhost:8080/api/movies/random");
        setexploreMovies(result.data);
    };


    return (
        <div className="home">

            <NavBar />
            <Slider />
            <div className='recent-movies'>
                <h2 className='movie-header'>Recent Movies</h2><br></br>
                <div className='movie-section'>
                {recentMovies.map(movie => (
                    <div key={movie.imdbId} className="movie-card">
                        <MovieCard movie={movie} />
                    </div>
                ))}
                </div>
            </div>
            <div className='explore-movies'>
                <h2 className='movie-header'>Explore Movies</h2>
                <div className='movie-section'>
                {exploreMovies.map(movie => (
                    <div key={movie.imdbId} className="movie-card">
                        <MovieCard movie={movie} />
                    </div>
                ))}
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;
