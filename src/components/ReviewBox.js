import React from 'react';
import '../css/reviewbox.css'; 

function ReviewBox({ review }) {

    const fullStars = Math.floor(review.rating);
    const halfStars = review.rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;
  
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star-icon">&#9733;</span>); 
    }
    if (halfStars === 1) {
      stars.push(<span key="half" className="star-icon">&#9734;</span>); 
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star-icon">&#9734;</span>);
    }



  return (
    <div
      className="review-box"
    >    
      <div className='review-info-container'>
      <div className="review-info">
        <h3>{review.createdAt.substring(0,10)}</h3>
        <p>{review.reviewText}</p>
        <div className="rating-stars">{stars}</div>
        
      </div>
    </div>
    </div>
  );
}

export default ReviewBox;
