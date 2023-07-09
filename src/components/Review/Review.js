import React from 'react'

export default function Review(props) {
    return (
            <div className="row review pb-3 mb-3">
                <div className="col-auto">
                    <div className="stars">{props.review.starRating} stars</div>
                </div>
                <div className="col">
                    <p>{props.review.review}</p>
                </div>
            </div>
    )
}