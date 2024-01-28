// import React from 'react'
// import Button from './Button'
// function Navbar() {
//   return (
//     <div>
        
//         <nav className="navbar navbar-expand-lg bg-body-tertiary">
//   <div className="container-fluid">
//     <a className="navbar-brand" href="#">Atomic</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//       <div className=" flex navbar-nav">
//         <a className="nav-link active" aria-current="page" href="#">Home</a>
//         <a className="nav-link" href="#">About</a>
//         <a className="nav-link" href="#">Service</a>
//         <a className="nav-link" href="#">Gallery</a>
//         <a className="nav-link" href="#">Blog</a>
//         <a className="nav-link" href="#">FAQs</a>
//         <button className="bg-blue-500 hover:bg-blue-700 mr-10 text-white font-bold py-2 px-4 rounded">
//   Button
// </button>
//       </div>
     

//     </div>
//   </div>
// </nav>
      
//     </div>
//   )
// }

// export default Navbar




import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Buttons from './Buttons';
import Card from './Card';
import { Icon } from '@iconify/react'
import './App.css';


import React from 'react'

function Navbars() {
  return (
    <div>
      
        <Navbar>
        <Container>
       
          <Navbar.Brand className ="fw-bold fs-2" href="#home">Atomic</Navbar.Brand>
          
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Services">Services</Nav.Link>
            <Nav.Link href="#Gallery">Gallery</Nav.Link>
            <Nav.Link href="#Blog">Blog</Nav.Link>
            <Nav.Link href="#FAQs">FAQs</Nav.Link>
            
       

          </Nav>
          <div className="container justify-content-end"> {/* Updated: Added justify-content-end class */}
          
      
          <form className="d-flex">
                        <div className="ms-auto mt-3 mt-lg-0 ">
                          <a>
                          <Buttons className="btn btn-sm px-3 btn-success rounded-pill shadow-sm me-3" label="Login"/>
                            <Buttons className="btn btn-sm px-3 btn-light rounded-pill shadow-sm" label="Signup"/>
                          </a>
                            
                        </div>
                    </form>
                  
      </div>
          
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbars