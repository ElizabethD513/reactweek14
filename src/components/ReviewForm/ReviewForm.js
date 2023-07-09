import React from 'react';
import Stars from '../Stars/Stars'


function ReviewForm(props) {

    function onSubmitHandler(e) {  
        e.preventDefault()          //This prevents the page from re-loading when the form is submitted
        let userReview = e.currentTarget.elements.userreview.value  //this is setting a variable = whatever is written in the text area
        let starRating = e.currentTarget.elements.stars.value   //this is setting a variable = whatever star rating is given
        props.updateMovie(userReview, starRating)   //this passes userReview and starRating to the updateMovie function
        e.currentTarget.reset()             //this resets the form
        
    }

    return (
        <form className="review-form" onSubmit={onSubmitHandler}>  {/*the event listener is onSubmit. It is called when the form is submitted */}
            <h4>Movie Review</h4>
            <div className="mb-3">
                <textarea className="form-control" name="userreview" id="userreview" rows="3"></textarea>
            </div>
            
       
            <div className="mb-3">
                <label className="form-label">Rate the movie</label>
                <Stars id={props.movie.id}/>
            </div>
            <button type="submit" className="btn btn-primary">Enter Review</button>
        </form>
		
	);
}


export default ReviewForm