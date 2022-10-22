import React from 'react'
import ExcitedList from './ExcitedList'
import ModdyList from './ModdyList'


import {useState} from 'react';

export const MovieList = ({movies}) => {
  
  const [excitedMovies, setExcitedMovies] = useState([]);
  const [moddyMovies, setModdyMovies] = useState([]);
  


  const addExcitedMovie = (movie)  => {
    const newExcitedList = [...excitedMovies, movie];
    setExcitedMovies(newExcitedList);
    console.log(setExcitedMovies);
  };

  const addModdyMovie = (movie) => {
    const newModdyList = [...moddyMovies, movie];
    setModdyMovies(newModdyList);
    console.log(setModdyMovies)
  }

  const removeExcitedMovie = (movie)  => {
    const newExcitedList = excitedMovies.filter(
      (excitedX) => excitedX.imdbID !== movie.imdbID
    );

    setExcitedMovies(newExcitedList);
    console.log(setExcitedMovies);
  };
  

  const removeModdyMovie = (movie)  => {
    const newModdyList = moddyMovies.filter(
      (moddyX) => moddyX.imdbID !== movie.imdbID
    );

    setModdyMovies(newModdyList);
    // console.log(setExcitedMovies);
  };

  
  return (
    <div className='container mt-3'>
<div className='d-inline-flex  flex-wrap m-3'>
    
    {movies.map((movie, index)   => (
    <div className='card p-2'>
    <img src= {movie.Poster} className='card-img-top' alt='not aviable' /> 
    <div className='card-body'>
      <h5 className='card-title'>{movie.Title}</h5>
      <button className='btn btn-primary m-2' onClick={() =>addExcitedMovie(movie)}> excited list</button>
      <button className='btn btn-danger' onClick={() => addModdyMovie(movie)}>Moddy list</button>
      </div>
  </div>
  


    ))}
    
    </div>
    <hr></hr>
    <ExcitedList excitedList = {excitedMovies}   handleExcitedClick = {addExcitedMovie}  moddyList ={moddyMovies} handleModdyClick = {addModdyMovie} remove ={removeExcitedMovie}/>
    <ModdyList/>
    </div>
    
    
  )
}
