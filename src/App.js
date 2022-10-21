
import './App.css';
import { Form } from './components/Form';

import {useState, useEffect} from 'react';

import { MovieList } from './components/MovieList';
import HeaderTitle from './components/HeaderTitle';
import ExcitedList from './components/ExcitedList';
import ModdyList from './components/ModdyList';

function App  () {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('nepal');
  const [excitedMovies, setExcitedMovies] = useState([]);



  
  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?s=${search}&apikey=f2b88761`;
    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);
    if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
    console.log(setMovies);
  
  };
 
  const addExcitedMovie = (movie)  => {
    const newExcitedList = [...excitedMovies, movie];
    setExcitedMovies(newExcitedList);
    console.log(setExcitedMovies);
  };


  const removeExcitedMovie = (movie)  => {
    const newExcitedList = excitedMovies.filter(
      (excitedX) => excitedX.imdbID !== movie.imdbID
    );



    setExcitedMovies(newExcitedList);
    console.log(setExcitedMovies);
  };

	useEffect(() => {
		getMovieRequest(search);
	}, [search]);


  
  
  return (
   


<div className='container'>
<HeaderTitle/>

  <Form  search={search} setSearch={setSearch}/>

	<MovieList movies={movies} excitedList = {ExcitedList} handleExcitedClick = {addExcitedMovie}/>

  <div className='row'>
    <MovieList movies={excitedMovies} excitedList = {ModdyList} handleExcitedClick = {removeExcitedMovie}/>


  </div>
  </div>
		
  );
} 

export default App;
