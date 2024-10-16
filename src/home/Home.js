import { Button } from 'primereact/button';
import '../index.css'
import Header from './Header';

import people from '../assets/Group 6@2x.png'
import sponsors from "../assets/Group 10@2x.png"
import sponsor1 from "../assets/logoipsum-removebg-preview.png"
import sponsor2 from "../assets/png-transparent-logoipsum-logo-tech-companies-thumbnail-removebg-preview.png"
import Section2 from './Section2';
import Section3 from './Section3';
import SwitchButton from './SwitchButton';
function Home() {
  return (
    <>
    <div className="home-bg">

       <Header/>
    <div className=' d-flex flex-column justify-content-center align-items-center p-4'>
       <div className='d-flex p-4'>  <span ><SwitchButton label="For seniors"/>
       </span> <span className='pt-2'>for SMES</span></div>
     <h1 className='title p-1 text-center'>Unlock New Opportunities <br/>In Retirement</h1>
     <p className='text-center'>Explore Flexible work arrangements that fit yout lifestyle.<br/> Keep learning and growing professionally</p>
     <div className="p-3 pe-4 mb-4">
            <Button label="Register" className='rounded me-2 bg-white text-black px-4 py-3' text/>
            <Button label="Get Demo" className='rounded get-started-button px-4 py-3' />
        </div>
        <img src={people} alt="" className='people-img mb-4'/>
        <p>Trusted by <span style={{fontWeight:700}}>50000+</span> Senior Experts and <span style={{fontWeight:700}}>200+</span> SMES</p>
       <div className='d-flex justify-content-center align-items-center p-2 pb-5'>
       <img src={sponsor1} alt="" className='sponsors-img'/>
       <img src={sponsor2} alt="" className='sponsors-img1'/>
       <img src={sponsor1} alt="" className='sponsors-img'/>
       <img src={sponsor2} alt="" className='sponsors-img1'/>
       <img src={sponsor1} alt="" className='sponsors-img'/>
       </div>
    </div>
  
    </div>
      <Section2/>
      <Section3/>
      </>
  );
}

export default Home;
