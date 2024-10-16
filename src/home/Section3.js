import { Button } from 'primereact/button';
import '../index.css'
import Bulb from '../assets/lightbulb-on@2x.png';
import calender from '../assets/calendar-day (1)@2x.png';
import chartline from '../assets/chart-line-up (1)@2x.png';
import search from '../assets/search@2x.png';
import user from '../assets/Union 1@2x.png';
import shield from '../assets/shield-check@2x.png';
import check from '../assets/octagon-check@2x.png';
import messages from '../assets/messages@2x.png'

import CardComponent from '../shared/CardComponent';
import CreateCard from './CreateCard';
import SwitchButton from './SwitchButton';

const data=[
    {
        message:"Efficient Management:Tools that streamline project communication and collaboration."
    },
    {
        message:"Secure & Trusted:We priortize user security and data privacy."
    },
    {
        message:"Dedicated Support:Our team is here to assist with any concerns."
    }
]
function Section3() {
  return (
    <div>

      
    <div className='col-12 d-flex justify-content-between p-4 container'>
        
    <div className='px-0 col-6'>
    <div className='d-flex'>  <span><SwitchButton label="For seniors"/>
    </span> <span className='pt-2'>for SMES</span></div>
     <span className='title2 d-flex justify-content-start p-2 py-4'>How It Works?</span>
    </div>
   <div className='col-6'>
   <div className='d-flex justify-content-end px-0'>
  <span className='get-started-text py-2'>Why SMEs Should Choose Our Platform?</span>
   </div>
     <div className="d-flex justify-content-center ps-5 ">
            <Button label="Get Demo" className='rounded get-started-button' />
        </div>
   </div>
  
       </div>
       <div className='d-flex justify-content-center pb-4 '>
     {/* <CardComponent title="Create your Profile" img={user}/>
     <CardComponent title="Explore Projects" img={search}/>
     <CardComponent title="Apply & Connect" img={messages}/>
     <CardComponent title="Get Started" img={check}/> */}
     <CreateCard/>
   </div>
   <div className='d-flex container'>
  {data.map((item)=>{
    return(
        <div className='p-4 d-flex align-items-center border-top mt-5'>
              <img   src={shield} alt="shield" style={{width:"20px"}}/>
              <span className='p-3 card-description1 '>{item.message}</span>
        </div>
    )
  })}
   </div>
    </div>
    
  );
}

export default Section3;
