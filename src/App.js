/*•	You should include at least the following components: 
•	MovieList: a container for all the Movie components and their data.
•	Movie: a component that represents movie data (i.e. image, synopsis, rating, etc…)
•	Stars: a one to five-star rating component that allows users to rate something (movies in this case, but remember that components are reusable, so you could use it elsewhere!)
•	ReviewList: a container inside of a Movie that houses Review components.
•	Review: A text review a user can leave on a movie.
•	ReviewForm: a form at the bottom of a Movie component that allows users to leave reviews. When submitted, the review should be added to the movie. All this data can be 
stored in an array, no networking or database needed for this assignment.
*/



import MovieList from './components/MovieList/MovieList';



function App() {
  return (
    <div className="App">
      <MovieList/>
    </div>
  );
}

export default App;
