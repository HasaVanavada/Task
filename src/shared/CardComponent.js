
import React from 'react'; 
import { Card } from 'primereact/card';

const CardComponent=(props)=>{
    return (
        <div className="card p-3 m-4 pb-5 bg-light">
            <div className='p-2'>
            <img src={props.img} alt="" className='card-img'/>
            </div>
        
           <span className='card-title'>{props.title}</span>
                <p className="m-0 card-description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
                    numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                </p>
           
        </div>
    )
}

export default CardComponent