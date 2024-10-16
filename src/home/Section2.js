import { Button } from 'primereact/button';
import '../index.css'
import Bulb from '../assets/lightbulb-on@2x.png';
import calender from '../assets/calendar-day (1)@2x.png';
import chartline from '../assets/chart-line-up (1)@2x.png';

import CardComponent from '../shared/CardComponent';


function Section2() {
  return (
    <div className="bg-light">

      
    <div className=' d-flex flex-column justify-content-center align-items-center'>
        
   
     <span className='title2 pt-5'>Empower Your Next Chapter: Discover the Benefits of Joining our Senior Experts Community</span>
   <div className='d-flex'>
   <CardComponent title="Share Your Expertise" img={Bulb}/>
     <CardComponent title="Flexible Oppurtunities" img={calender}/>
     <CardComponent title="Continued Growth" img={chartline}/>
   </div>
     {/* <div className="p-3 pe-4 ">
            <Button label="Register" className='rounded text-white me-2' text/>
            <Button label="Get Demo" className='rounded register-button' />
        </div> */}
       
       </div>
    </div>
    
  );
}

export default Section2;
