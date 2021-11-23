import logo from './logo.svg';
import React from 'react';
import MoviesList from './components/MoviesList';
import './App.css';

function App() {

  const dummyMovies =[
    {
      id:1,
      title:'Shershah',
      openingText: 'This is patriotic movie which is biopic of sheeshah friend of Shahid Bhagat singh',
      releaseDate: '2021-10-18',
    },
    {
      id :2,
      title : 'Bhag Milkha Bhag',
      openingText :'Biopic of the great Milkha Singh',
      releaseDate:'2012-05-29',

    },
  ];


  return (
  <React.Fragment>
   <section>
      <button>Fetch Movies</button>
   </section>
    
    <section>
      <MoviesList movies ={dummyMovies}/>
    </section>
  </React.Fragment>
  );
}

export default App;
