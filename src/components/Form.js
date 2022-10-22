import React from 'react'


export const Form =  ({search, setSearch}) => {

  return (
    <div className='row m-5'>
    <div className='col'>
    <input value={search} type='text' className='form-control' id='' placeholder='search here' onChange={(event) =>  setSearch(event.target.value)} />
  </div> 
  <div className='col'>
  <button type='submit' className='btn btn-primary' >Search</button>
  </div>
  </div>
  
  );
};
