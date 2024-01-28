import React from 'react'
import Button from 'react-bootstrap/Button';
function Buttons(props) {
  const label= props.label 
  const color= props.color
  const buttonsClicked= props.buttonClicked
  const className= props.className
  return (
   
    
    <>
      
        <Button type="button" onClick={buttonsClicked}  className={className}> 
                {label}
        </Button>
        
    </>
  )
}

export default Buttons
