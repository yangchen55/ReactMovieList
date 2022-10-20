import React from 'react'
import ExcitedList from './ExcitedList'
import ModdyList from './ModdyList'

export const MovieList = (props) => {
  return (
    <>
    {props.movies.map((movie, index)   => (


<div className='image-container d-flex justify-content-start m-3'>
    <div>
    <div className='card p-2'>
    <img src= {movie.Poster} className='card-img-top' alt='not aviable' /> 
    <div className='card-body'>
      <h5 className='card-title'>{movie.Title}</h5>
      <p className='card-text'>{movie.Year}</p>
      <button className='btn btn-primary m-2'> excited list</button>
      <button className='btn btn-danger'>Moddy list</button>
      </div>
    </div>
  </div>
    </div>


    ))}
    <ExcitedList/>
    <ModdyList/>
    </>
    
  )
}
