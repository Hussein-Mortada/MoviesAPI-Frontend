import React, { useState } from 'react';
import '../css/moviecard.css'; 

function MovieCard({ movie }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`movie-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      
      <img src={movie.img} alt={movie.title} />
      
      <div className='movie-info-container'>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <a href={`/movie/${movie.netflix_id}`}>Visit</a>
        <p>{movie.synopsis}</p>
        <p>Rating: {movie.rating}</p>
        
      </div>
    </div>
    </div>
  );
}

export default MovieCard;
