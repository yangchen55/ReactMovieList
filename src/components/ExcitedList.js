import React from 'react'

const ExcitedList = ({excitedList, handleExcitedClick, remove, handleModdyClick}) => {
  return (
    <div className='container mt-3'>
      <h2> welcome to exciting list </h2>
    <div className='d-inline-flex  flex-wrap m-3'>
        
        {excitedList.map((movie, index)   => (
        <div className='card p-2'>
        <img src= {movie.Poster} className='card-img-top' alt='not aviable' /> 
        <div className='card-body'>
          <h5 className='card-title'>{movie.Title}</h5>
          <button className='btn btn-primary m-2' onClick={() => remove(movie)}> remove list</button>
          {/* <button className='btn btn-danger' onClick={() => handleModdyClick(movie)}>Moddy list</button> */}
          </div>
      </div>
      
    
    
        ))}
        
        </div>
        <hr></hr>
        
        </div>
        
  )
}

export default ExcitedList