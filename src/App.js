import logo from './logo.svg';
import React, {useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {

const [movies, setMovies] = useState([]);
const [isLoading, setIsLoading]=useState(false);
const [error,setError] = useState(null);

  async function fetchMoviesHandler()
  {
   try{
    setIsLoading(true);
    const response = await  fetch('https://swapi.dev/api/films/');
    if(!response.ok)
    {
      throw new Error('Something went wrong !!!');
    }
    const data = await response.json();

    const transformedMovies = data.results.map((movieData)=>{
      return {
        id : movieData.episode_id,
        title : movieData.title,
        openingText : movieData.opening_crawl,
        releaseDate : movieData.release_date,
      };
    });

    setMovies(transformedMovies);
    

   }catch(error)
   {
    setError(error.message);
   }
   setIsLoading(false);
   
  }

  let content = <p>Found No Movies</p>;

  if(error)
  {
    content = <p>{error}</p>
  }

  if(movies.length>0 && !isLoading)
  {
    content = <MoviesList movies ={movies}/>;
  }
  if(isLoading)
  {
    content = <p>Loading.......</p>;
  }

  return (
  <React.Fragment>
   <section>
      <button onClick={fetchMoviesHandler}>Fetch Movies</button>
   </section>
    
    <section>
    {content}
    </section>
  </React.Fragment> 
  );
}

export default App;
