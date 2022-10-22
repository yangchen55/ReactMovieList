
import './App.css';
import { Form } from './components/Form';

import {useState, useEffect} from 'react';

import { MovieList } from './components/MovieList';
import HeaderTitle from './components/HeaderTitle';
import ExcitedList from './components/ExcitedList';
import ModdyList from './components/ModdyList';

function App  () {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('yang');
 



  
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
 


	useEffect(() => {
		getMovieRequest(search);
	}, [search]);


  
  
  return (
   


<div className='container'>
   <HeaderTitle/>

  <Form  search={search} setSearch={setSearch}/>

	{/* <MovieList movies={movies} excitedList = {excitedMovies} handleExcitedClick = {addExcitedMovie}  moddyList ={moddyMovies} handleModdyClick = {addModdyMovie}/> */}
	<MovieList movies={movies}  />

  {/* <div className='row'>
    <h2>happy movies</h2>
    <MovieList movies={excitedMovies} excitedList = {ExcitedList} handleExcitedClick = {removeExcitedMovie}/>


  </div>
  <div className='row'>
    <h2> sad movies</h2>
    <MovieList movies={moddyMovies} moddyList = {ModdyList} handleModdyClick = {removeModdyMovie}/>


  </div> */}
  </div>
		
  );
} 

export default App;
