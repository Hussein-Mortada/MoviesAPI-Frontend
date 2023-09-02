import React, { useState } from 'react';
import '../css/createreviewbox.css';
import axios from 'axios';


function CreateReviewBox({ netflixId }) {
    const [rating, setRating] = useState(null);
    const [reviewText, setReviewText] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);


    const handleRatingChange = (event) => {
        setRating(event.target.value);
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await axios.post('http://localhost:8080/api/reviews/createReview', {
                movie_api_id: netflixId,    
                rating,
                review_text: reviewText
                
            });

            if (response.data === "Review Created!") {
                alert('Review submitted successfully!');
                setRating(0);
                setReviewText('');
            } else {
                alert('Failed to submit review. Please try again later.');
            }
        } catch (error) {
            console.error('Error submitting review:', error);
            alert('An error occurred while submitting your review. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <div className="create-review-box">
            <div className="review-info-container">
                <div className="review-info">
                    <h3 className='main-header'>Create Your Review</h3><br></br>
                    <form onSubmit={handleSubmit}>
                        <div className="rating-stars-create">
                            <fieldset className="rating">
                                <input type="radio" id="star5" name="rating" value="5" onChange={handleRatingChange} />
                                <label htmlFor="star5">5 stars</label>
                                <input type="radio" id="star4" name="rating" value="4" onChange={handleRatingChange} />
                                <label htmlFor="star4">4 stars</label>
                                <input type="radio" id="star3" name="rating" value="3" onChange={handleRatingChange} />
                                <label htmlFor="star3">3 stars</label>
                                <input type="radio" id="star2" name="rating" value="2" onChange={handleRatingChange} />
                                <label htmlFor="star2">2 stars</label>
                                <input type="radio" id="star1" name="rating" value="1" onChange={handleRatingChange} />
                                <label htmlFor="star1">1 star</label>
                            </fieldset>
                        </div>
                        <textarea
                            className='text-area'
                            rows="4"
                            placeholder="Write your review here..."
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)}
                            required
                        />
                        <br></br>
                        <button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? 'Submitting...' : 'Submit Review'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateReviewBox;
