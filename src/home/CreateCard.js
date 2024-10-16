
import { Button } from 'primereact/button';
import React from 'react'; 
import search from '../assets/search@2x.png';
import user from '../assets/Union 1@2x.png';
import shield from '../assets/shield-check@2x.png';
import check from '../assets/octagon-check@2x.png';
import messages from '../assets/messages@2x.png';

const CardData=[
  
    {
        id:1,
        img:user,
        title:"Create your Profile",
        description:"fd"
    },
    {
        id:2,
        img:search,
        title:"Explore Projects",
        description:"fd"
    },
    {
        id:3,
        img:messages,
        title:"Apply & Connect",
        description:"fd"
    },
    {
        id:4,
        img:check,
        title:"Get Started",
        description:"fd"
    },

]
const CreateCard=()=>{
    return (
        <>
            <div className="card p-3 bg-danger-subtle d-flex flex-row border rounded-4" style={{width:"80vw"}}>
              {CardData.map((item)=>{
                return(
                    <div>
                          <div className='p-2 d-flex justify-content-start align-items-center'>
                    <Button className='sequence'>{item.id}</Button>
                    <img src={item.img} alt="" className='card-img1'/>
                    </div>
                
                 <div className='d-flex flex-column justify-content-start align-items-start'>
                 <span className='card-title'>{item.title}</span>
                  <div className='d-flex justify-content-start align-items-start'>
                  <span className="m-0 card-description text-left">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
                            numquam
                        </span></div>     
                 </div>
                    </div>
                )
              })}
                   
                </div>
        </>
     
      
    )
}

export default CreateCard