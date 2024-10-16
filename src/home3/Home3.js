
import { Button } from 'primereact/button'
import image from '../assets/Rectangle 158984@2x.png'
import Footer from './Footer'
import FooterAccordion from './FooterAccordion'
const Home3=()=>{
    return(
        <div className="home-bg">


        <div className='d-flex justify-content-center align-items-center p-5'>
        <div className=' d-flex flex-column justify-content-center'>
            
         <h1 className='title1'>Why SMEs choose our PLatform?</h1>
         {/* <p>Connect with experienced talent to fuel your Growth,Innovation & Success</p>
         <div className="p-3 pe-4 ">
                <Button label="Post a Project" className='rounded get-started-button' />
            </div>  */}
            <FooterAccordion/>
        </div>
        <img src={image} alt="" className='section-card-img1'/>
        </div>
        <Footer/>
        </div>
    )
}

export default Home3