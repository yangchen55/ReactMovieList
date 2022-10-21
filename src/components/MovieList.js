import React from 'react'
import ExcitedList from './ExcitedList'
import ModdyList from './ModdyList'

export const MovieList = (props) => {
  // sending props to component 
  const ExcitedList = props.excitedList;
  return (
    <div className='container mt-3'>
<div className='d-inline-flex  flex-wrap m-3'>
    
    {props.movies.map((movie, index)   => (


    <div className='card p-2'>
    <img src= {movie.Poster} className='card-img-top' alt='not aviable' /> 
    <div className='card-body'>
      <h5 className='card-title'>{movie.Title}</h5>
      <button className='btn btn-primary m-2' onClick={() => props.handleExcitedClick(movie)}> excited list</button>
      <button className='btn btn-danger' onClick={() => props.handleExcitedClick(movie)}>Moddy list</button>
      </div>
  </div>
  


    ))}
    
    </div>
    <hr></hr>
    <ExcitedList />
    <ModdyList/>
    </div>
    
    
  )
}
