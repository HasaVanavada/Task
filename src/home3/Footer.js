
import { Button } from 'primereact/button'
import logo from '../assets/logo.png'
const Footer=()=>{
    return (
        <div className="footer-bg p-5 d-flex justify-content-between">
            <div className='d-flex flex-column'>
            <div id='#logo'>
            <img src={logo} alt="logo" className='logo-img' /></div>
           <Button className='bg-white rounded text-primary text-center'>All Sysytems Operational</Button>
           <div className='mt-3'>
           <span className='pe-3'> X </span>
           <span className='p-3'>   Facebook    </span>
           <span className='p-3'>Instagram    </span>
           <span className='p-3'>LinkedIn</span>
           </div>
           <span  className='mt-2'>Made and Hosted in India</span>
           <span  className='mt-2'>Senior EXperts © 2024</span>
            </div>
            <div className='d-flex flex-column mt-4'>
                <span style={{fontWeight:600,fontSize:"18px"}}>Product</span>
                <span>Explore Projects</span>
                <span>Sign In</span>
                <span>Register</span>
            </div>
            <div  className='d-flex flex-column mt-4'>
            <span style={{fontWeight:600}}>Company</span>
                <span>About Us</span>
                <span>Blogs</span>
                <span>News</span>
                <span>Faqs</span>
            </div>
            <div  className='d-flex flex-column mt-4'>
            <span style={{fontWeight:600}}>Contact</span>
                <span>Contact Us</span>
                <span>Get Demo</span>
              
            </div>
            <div  className='d-flex flex-column mt-4'>
            <span style={{fontWeight:600}}>Legal</span>
                <span>Terms & Conditions</span>
                <span>Privacy & Policy</span>
                <span>Payments & Refunds</span>
                <span>Disclaimers</span>
            </div>
            <div></div>
        </div>
    )
}
export default Footer