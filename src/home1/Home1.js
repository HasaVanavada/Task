import { Button } from 'primereact/button';
import '../index.css'
import Bulb from '../assets/lightbulb-on@2x.png';
import calender from '../assets/calendar-day (1)@2x.png';
import chartline from '../assets/chart-line-up (1)@2x.png';
// import ToggleButton from './ToggleButton';
import CardComponent from '../shared/CardComponent';
import cardImage1 from '../assets/Mask Group 6@2x.png';
import cardImage2 from '../assets/Mask Group 7@2x.png';
import cardImage3 from '../assets/Mask Group 8@2x.png';
import cardImage4 from '../assets/Mask Group 9@2x.png';
import cardImage5 from '../assets/Mask Group 10@2x.png';
import SectionCard from '../shared/SectionCard';
import image from '../assets/Rectangle 158984@2x.png'
import { AiOutlineAppstore } from "react-icons/ai";


const businessOptions=[
    {
        text:"Business Strategy"
    },
    {
        text:"Marketing & Sales"
    },
    {
        text:"Finance & Accounting"
    },
    {
        text:"Technology & IT"
    },
    {
        text:"Operations & Management"
    },
    {
        text:"Human Resources"
    },
    {
        text:"Legal & Compliance"
    },
    {
        text:"HealthCare"
    },
    {
        text:"Education"
    },
]

function Home1() {
  return (
    <div className="bg-light">

      
    <div className=' d-flex flex-column justify-content-center align-items-center'>
        
   
     <span className='title2 pt-5'>For Senior Experts and SMEs</span>
     <span className='card-title text-center p-3 pb-5'>Where Expertise Meets Oppurtunity for Mutual Success,Fostering Growth <br/>and Innovation through Collaboration</span>
   <div className='d-flex flex-column p-5'>
   <div className='d-flex'>
   <SectionCard title="Expertise meets Oppurtunity" img={cardImage1}/>
   <SectionCard title="Efficiency and Cost Effectiveness" img={cardImage2}/>
   </div>
    <div className='d-flex'>
    <SectionCard title="Knowledge Transfer & Mentorship" img={cardImage3}/>
     <SectionCard title="Innovation & Growth" img={cardImage4}/>
     <SectionCard title="Mutual Success" img={cardImage5}/>
    </div>
   </div>

     {/* <div className="p-3 pe-4 ">
            <Button label="Register" className='rounded text-white me-2' text/>
            <Button label="Get Demo" className='rounded register-button' />
        </div> */}
       
       </div>
       <div className="home-bg">


<div className='d-flex justify-content-center align-items-center p-5'>
<div className=' d-flex flex-column justify-content-center p-5'>
 <h1 className='title1 text-white py-2'>Empowering SMEs to<br/> achieve their Full Potential</h1>
 <p className='py-2'>Connect with experienced talent to fuel your Growth,<br/>Innovation & Success</p>
 <div>
        <Button label="Post a Project" className='rounded get-started-button' />
    </div> 
</div>
<img src={image} alt="" className='section-card-img1'/>
</div>

</div>
<div className='d-flex flex-column justify-content-center align-items-center pt-5'>
    <span className='title2'>Discover a World of Oppurtunities Tailored to Your Expertise</span>
    <span className='card-title container text-center p-4'>Discover a diverse range of projects tailored to your skills and experience.Browse through the current <br/>openings and find the perfect fit to your expertise.</span>
<div className='d-flex flex-wrap justify-content-center m-4'>
{businessOptions.map((item)=>{
    return (
        <div className='business p-2 m-3 mt-2 border'>
        <span ><AiOutlineAppstore /></span>
        <span className='m-2'>{item.text}</span>
    </div>
    )
  })}
</div>
   
</div>
    </div>
    
  );
}

export default Home1;
