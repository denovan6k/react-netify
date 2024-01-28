import React from 'react'
import { Icon } from '@iconify/react';
import './App.css';
function Video() {
  return (
<div className=" offset-xl-10 col-xl-10 col-lg-6 col-md-12 d-flex justify-content-end align-items-end mt-n3">
  <div className="d-block mt-n5 text-end">
    <a href='https://www.youtube.com/watch?v=JRzWRZahOVU' className='text-dark d-block'>
      <Icon icon="gg:play-button" className='display-3 border rounded-circle shadow-sm'/>
    </a>
  </div>
</div>


   
  )
}

export default Video