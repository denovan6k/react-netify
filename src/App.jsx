// import Button from './Components/Button'
// import Card from './Components/Card'
{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './Navbars'
import Card from './Card';
import { Container } from 'react-bootstrap';
import CardLayout from './CardLayout';
import Video from './Video';

export default function App() {
    const backgroundStyle = {
      backgroundImage: 'url("https://react-atom.netlify.app/static/media/plantImage.c3bdf6366f50f26bc779.jpg")', // Replace with the actual path to your image
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '800px', // Adjust the height as needed
      display: 'flex',
    };
  
  return (
    
    
      // <> <Card/>
      <> 

      <div style={backgroundStyle} className="justify-content-center">
       <div> <Navbars/>
        <div className='mt-5 ml-4'> <Card/>
       
        
        </div>

       
        <CardLayout/>
       </div>
       </div>
      
      
      

      </>
    
    
  )
}