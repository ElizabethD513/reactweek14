import React, { useState } from 'react';
import ReviewList from '../ReviewList/ReviewList'
import ReviewForm from '../ReviewForm/ReviewForm'

function Movie(props) {  //props is an object, is what contains the data passed down from the parent
    const [movieReviews, setMovieReviews] = useState(props.movie.reviews)
    function updateMovie(review, starRating) {
        const newReview = {review:review, starRating:starRating}  //this is setting a variable newReview equal to a review object with the properties review and starRating
       const newMovieReviews = [...movieReviews, newReview]     //this is setting a variable newMovieReviews equal to a new array containing the previous movie reviews and the new movie review
       

        setMovieReviews(newMovieReviews)    //this sets the movieReviews state equal to the newMovieReviews array, and that causes the review list to re-render
     }

    
    return (
        <div className="movie container">
            <div className="row">
                <div className="col-auto">
                    <div className="movie-image-wrapper">
                        <img src={props.movie.image} className="movie-img"/>
                    </div>
                </div>
                <div className="col">
                    <h2>{props.movie.movieTitle}</h2>
                    <p className="mb-5 synopsis">{props.movie.synopsis}</p>
                    <ReviewList reviews={movieReviews}/>
                    <ReviewForm movie={props.movie} updateMovie={updateMovie}/> {/*The Movie data is passed down and the updateMovie function is passed down to ReviewForm*/ }
                </div>
            </div>
            
           
        </div>
		
	);
}


export default Movie