
import './App.css';
import { Form } from './components/Form';

import {useState, useEffect} from 'react';

import { MovieList } from './components/MovieList';

function App  () {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('nepal');



  
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

  <Form  search={search} setSearch={setSearch}/>

	<MovieList movies={movies} />
	</div>
		
  );
} 

export default App;
