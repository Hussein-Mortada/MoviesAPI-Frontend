import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import ReviewBox from '../components/ReviewBox';
import "../css/moviedetailpage.css";
import Footer from '../components/Footer';
import { useAuth } from '../context/AuthContext';
import CreateReviewBox from '../components/CreateReviewBox';

function MovieDetailsPage() {
  const { netflixId } = useParams();
  const [movie, setmovie] = useState([]);

  const { isLoggedIn } = useAuth();

  useEffect(() => {
    loadMovie();
  }, [netflixId]);

  const loadMovie = async () => {
    const result = await axios.get(`http://localhost:8080/api/movies/movieid/${netflixId}`);
    setmovie(result.data);
    console.log(result.data);
  };

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    loadReviews();
  }, []);

  const loadReviews = async () => {
    const result = await axios.get(`http://localhost:8080/api/reviews/movieid/${netflixId}`);
    setReviews(result.data);
    console.log(result.data);
  };

  return (
    <div className='movie-detail-page'>
      <NavBar />
      <h1 className='main-header'>Movie Details</h1>
      <h2 className='title'>{movie.title}</h2>
      {movie.type && <p>Type: {movie.titleType}</p>}
      <img src={movie.large_image}></img>
      <p className='date'>{movie.start_date}</p>
      <p className='synopsis'>{movie.synopsis}</p>
      <p>Maturity: {movie.maturity_label}</p>
      
      <div className='reviews-container'>
      <div className='create-review-box'>
          {isLoggedIn?  <CreateReviewBox netflixId={netflixId}/>:"You must be logged in to write a review!" }
          </div>
      <div className='reviews'>
        {reviews.map(review => (
          <div key={review.reviewId}>
            <ReviewBox review={review} />
          </div>
        ))}
      </div>
      
          </div>
      <Footer/>
    </div>
  );
}

export default MovieDetailsPage;
