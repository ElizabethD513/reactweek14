import React, { useState } from 'react';
import Movie from '../Movie/Movie'


function MovieList() {
    
     //useState- react hook used to save data to the current state
    
     const [movieListData, setMovieListData] = useState( 
        [
            {
                id:1,   //properties
                movieTitle:"Jurassic Park",
                image: "/images/jurassicpark.jpg",
                synopsis: "In Steven Spielberg's massive blockbuster, paleontologists Alan Grant (Sam Neill) and Ellie Sattler (Laura Dern) and mathematician Ian Malcolm (Jeff Goldblum) are among a select group chosen to tour an island theme park populated by dinosaurs created from prehistoric DNA. While the park's mastermind, billionaire John Hammond (Richard Attenborough), assures everyone that the facility is safe, they find out otherwise when various ferocious predators break free and go on the hunt.",
                reviews:[
                    {
                        review:"A classic, must-watch edge of your seat action film",
                        starRating:5
                    }
                ]
            },
            {
                id:2,
                movieTitle:"Joker",
                synopsis: "Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he's part of the world around him. Isolated, bullied and disregarded by society, Fleck begins a slow descent into madness as he transforms into the criminal mastermind known as the Joker.",
                image: "/images/joker.jpg",
                reviews:[
                    {
                        review:"You wont be able to stop watching",
                        starRating:4
                    }
                ]
            },
            {
                id:3,
                movieTitle:"Just Like Heaven",
                synopsis: "David (Mark Ruffalo) is a recently widowed architect moving into a new apartment in San Francisco. But the apartment isn't entirely empty; it's haunted by the ghost of a woman named Elizabeth (Reese Witherspoon). And although Elizabeth can't remember much about her life, she's convinced that she isn't really dead. While David recruits Darryl (Jon Heder), an absent-minded psychic, to get to the bottom of Elizabeth's identity, he and Elizabeth begin to fall in love.",
                image: "/images/justlikeheaven.jpg",
                reviews:[ 
                    {
                    review:"Endearing love story. It is both light,fun and full of meaning.",
                    starRating:4
                    }
                ]
            }
        ]
    )
     
   return (
    <ul>
      {movieListData.map((movie) => (
        <Movie key={movie.id} movie={movie}/> //attribute/property movie passing the movie object to the component,the movie outside the curly brackets is the name of the attribute. Inside the curly brackets it's the movie variable

      ))}
    </ul>
  );

   /*return (
    <ul>
      {movieData.map((movie, index) => (
        <li key={index}>
            {movie.movieTitle}

        </li>
      ))}
    </ul>
  );*/
        
    
  
   /* return (
        {movieData.map((movie,index)=>{
            return(
                <div className="movie-list">
                    <Movie key={index} movie={movie}/>
                </div>
            )
           
        })}
        
		
	);*/
}


export default MovieList