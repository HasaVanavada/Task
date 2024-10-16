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
import { Accordion } from 'react-bootstrap';
import AccordionCard from './AccordionCard';
import BenefitsCard from './BenefitsCard';
import ReviewCard from './ReviewCard';
import SwitchButton from '../home/SwitchButton';
import sponsor1 from "../assets/logoipsum-removebg-preview.png"
import sponsor2 from "../assets/png-transparent-logoipsum-logo-tech-companies-thumbnail-removebg-preview.png"
import NewsBlog from './NewsBlog';

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

function Home2() {
  return (
    <div className="bg-white">   
    <div className=' d-flex flex-column justify-content-center align-items-center'>    
   <div className='d-flex justify-content-center flex-wrap m-5 p-5'>
   <AccordionCard />
   </div>
       </div>
       <div className="home-bg">
</div>
<div className='d-flex flex-column justify-content-center align-items-center pt-5 bg-light'>
   
    <div className='d-flex justify-content-center flex-wrap m-5 '>
    <BenefitsCard title="Flexible Engagement" img={cardImage3}/>
     <BenefitsCard title="Meaningful impact" img={cardImage4}/>
     <BenefitsCard title="Continuous Growth" img={cardImage5}/>

   </div>
   <div className='d-flex justify-content-between m-5 col-12' style={{width:"70%"}}>
    <span className='title2 text-left '>Benefits of Joining Our Senior Experts Community</span>
    <div className='col-6'>
        <span className='card-title'>Our platform empowers Seniors Experts to share their valuable Knowledge.Connect with exciting oppurtunities and continue making meaningful impact.</span>
        <div className=" pt-4 ">
        <Button label="Explore Oppurtunities" className='rounded get-started-button' />
    </div> 
    </div>
   </div>
<div className='d-flex justify-content-center align-items-center bg-white mt-4 p-5'>
    <div className='d-flex flex-column  justify-content-start'>
    <div className='d-flex'>  <span ><SwitchButton label="For seniors"/>
    </span> <span className='pt-2'>for SMES</span></div>

<span className='title2 text-left'>Hear from Our Thriving Community of Seniors Experts and SMEs</span>
<span className='card-title p-5'>Discover firsthand how our platform empowering senior experts to share their valuable knowledge and helping theirn SMEs to chieve thier goals</span>

    </div>
    <div className='col-5'>
        <ReviewCard title="Flexible Engagement" img={cardImage3}/>
        <div className='ms-5 ps-5'>
        <ReviewCard title="Flexible Engagement" img={cardImage3}/>
        </div>
    </div>
</div>
</div>
<NewsBlog/>
    </div>
    
  );
}

export default Home2;
