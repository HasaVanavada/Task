
import React from 'react'; 
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { FaCircleCheck } from "react-icons/fa6";
const BenefitsCard=(props)=>{
    return (
        <div className="card p-3 bg-light.bg-gradient m-2 rounded-3">
            <div className='p-2'>
            <img src={props.img} alt="" className='section-card-img'/>
            </div>
        
           <span className='card-title'>{props.title}</span>
                <p className="m-0 card-description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
                    numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                </p>
           
        </div>
    )
    const header = (
        <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />
    );
    // const footer = (
    //     <div className='d-flex justify-content-between'>
    //         <Button label="Apply" className='register-button rounded' />
    //         <div>
    //         <FaCircleCheck fill='blue'/>
    //         <Button label="Verified" severity="secondary" text  style={{ marginLeft: '0.5em' }} ></Button>
    //         </div>
          
    //     </div>
    // );

    // return (
    //     <div className="card flex justify-content-center m-3 ">
    //         <Card title="Advanced Card" subTitle="Card subtitle" footer={footer} className="md:w-25rem card-bg">
    //             <p className="m-0">
    //                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
    //                 numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
    //             </p>
    //         </Card>
    //     </div>
    // )
}

export default BenefitsCard