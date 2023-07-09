import React from 'react'
import Review from '../Review/Review'

function ReviewList(props) {
    return (
        <div className="review-list mb-5">
          <h3>Reviews</h3>
          {props.reviews.map((review, index) => (
            <Review key={index} review={review}/> 
    
          ))}
        </div>
      );
}


export default ReviewList