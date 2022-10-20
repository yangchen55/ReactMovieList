
import './App.css';
import { Form } from './components/Form';

import {useState, useEffect} from 'react';

import { MovieList } from './components/MovieList';

function App  () {
  const [movies, setMovies] = useState([

    // {
		// 	Title: 'Star Wars: Episode IV - A New Hope',
		// 	Year: '1977',
		// 	imdbID: 'tt0076759',
		// 	Type: 'movie',
		// 	Poster:
		// 		'https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
		// },
		// {
		// 	Title: 'Star Wars: Episode V - The Empire Strikes Back',
		// 	Year: '1980',
		// 	imdbID: 'tt0080684',
		// 	Type: 'movie',
		// 	Poster:
		// 		'https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
		// },
		// {
		// 	Title: 'Star Wars: Episode VI - Return of the Jedi',
		// 	Year: '1983',
		// 	imdbID: 'tt0086190',
		// 	Type: 'movie',
		// 	Poster:
		// 		'https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
		// },
	]);


  
  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?s=st vincent&apikey=f2b88761`;
    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);
    if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
    console.log(setMovies);
   
  };
 


	useEffect(() => {
		getMovieRequest();
	}, []);

  
  return (
   


<div className='container-fluid'>

  <Form/>

	<MovieList movies={movies} />
	</div>
		
  );
}

export default App;
