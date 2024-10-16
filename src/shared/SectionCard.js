
import React from 'react'; 

const SectionCard=(props)=>{
    return (
        <div className="section p-3 card-bg m-2 rounded-4">
            <div className='p-2'>
            <img src={props.img} alt="" className='section-card-img'/>
            </div>
        
           <span className='card-title'>{props.title}</span>
                <p className="m-0 card-description text-left">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
                    numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                </p>
           
        </div>
    )
}

export default SectionCard