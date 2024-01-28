import React from 'react'
import { Icon } from '@iconify/react'
import './App.css';

function Ret({icon,header,paragraph} ) {
  return (
    <>  
        <div className="col-12 col-md-4">
                    <div className="card border-0 px-3">
    <Icon icon={icon} className='display-1'></Icon>
    <h5 className="title">{header}</h5>
    <p className="title">{paragraph}</p>
    </div>
    </div>


</>
   
  )
}

export default Ret