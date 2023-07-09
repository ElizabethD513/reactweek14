import React from 'react'
import './Stars.css' 

export default function Stars(props) { //The star component lets us choose the star rating. I followed a tutorial from this site:https://medium.com/codex/create-a-star-rating-widget-with-css-in-9-steps-fe323352dba4
    
    return (
        <div className="star-rating">
            <input type="radio" name="stars" id={"star-a" + props.id}  value="5"/>
            <label htmlFor={"star-a" + props.id}></label>

            <input type="radio" name="stars" id={"star-b" + props.id} value="4"/>
            <label htmlFor={"star-b" + props.id}></label>
        
            <input type="radio" name="stars" id={"star-c" + props.id} value="3"/>
            <label htmlFor={"star-c" + props.id}></label>
        
            <input type="radio" name="stars" id={"star-d" + props.id} value="2"/>
            <label htmlFor={"star-d" + props.id}></label>
        
            <input type="radio" name="stars" id={"star-e" + props.id} value="1"/>
            <label htmlFor={"star-e" + props.id}></label>
        </div>
    )
}