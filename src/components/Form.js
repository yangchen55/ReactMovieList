import React from 'react'


export const Form =  (props) => {

  return (
    <div className='row m-5'>
    <div className='col'>
    <input value={props.value} type='text' className='form-control' id='' placeholder='Titanic' onChange={(event) =>  props.setSearch(event.target.value)} />
  </div> 
  <div className='col'>
  <button type='submit' className='btn btn-primary' >Search</button>
  </div>
  </div>
  
  );
};
