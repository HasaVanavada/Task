
import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { FaCircleCheck } from "react-icons/fa6";
import sponsor1 from "../assets/logoipsum-removebg-preview.png"
import sponsor2 from "../assets/png-transparent-logoipsum-logo-tech-companies-thumbnail-removebg-preview.png"
const jobsData = [
    {
        company: "Tech Innovatives",
        role: "Finance Advisor",
        place: "Bangalore",
        jobDescription: "Provide financial guidance and strategic planning to a growing startup",
        benefits: ["part-time", "financial Analysis", "strategic planning", "startup-experience"],
        logo: sponsor1
    },
    {
        company: "Tech Innovatives",
        role: "Finance Advisor",
        place: "Bangalore",
        jobDescription: "Provide financial guidance and strategic planning to a growing startup",
        benefits: ["part-time", "financial Analysis", "strategic planning", "startup-experience"],
        logo: sponsor1
    },
    {
        company: "Tech Innovatives",
        role: "Finance Advisor",
        place: "Bangalore",
        jobDescription: "Provide financial guidance and strategic planning to a growing startup",
        benefits: ["part-time", "financial Analysis", "strategic planning", "startup-experience"],
        logo: sponsor1
    },
    {
        company: "Tech Innovatives",
        role: "Finance Advisor",
        place: "Bangalore",
        jobDescription: "Provide financial guidance and strategic planning to a growing startup",
        benefits: ["part-time", "financial Analysis", "strategic planning", "startup-experience"],
        logo: sponsor1
    },
    {
        company: "Tech Innovatives",
        role: "Finance Advisor",
        place: "Bangalore",
        jobDescription: "Provide financial guidance and strategic planning to a growing startup",
        benefits: ["part-time", "financial Analysis", "strategic planning", "startup-experience"],
        logo: sponsor1
    },
    {
        company: "Tech Innovatives",
        role: "Finance Advisor",
        place: "Bangalore",
        jobDescription: "Provide financial guidance and strategic planning to a growing startup",
        benefits: ["part-time", "financial Analysis", "strategic planning", "startup-experience"],
        logo: sponsor1
    }
]
const AccordionCard = (props) => {
    return (
        <>     {
            jobsData.map((item) => {
                return (
                    <div className="card p-3 card-bg m-2">
                        <div className='d-flex justify-content-between  border-bottom pb-2'>
                            <div className='d-flex flex-column'>
                                <span style={{ fontWeight: 600, fontSize: "14px" }}>{item.company}</span>
                                <span style={{ fontWeight: 500, fontSize: "10px", color: "grey" }}>{item.place}</span>
                            </div>
                            <div className='p-2 d-flex'>
                                <img src={item.logo} alt="" className='card-logo-img' />
                            </div>
                        </div>

                        <span className='card-title'>{item.role}</span>
                        <p className="m-0 card-description">
                            {item.jobDescription}
                        </p>
                        <div className='d-flex flex-wrap border-bottom pb-2'>
                            {item.benefits.map((i) => {
                                return (
                                    <div className='business1 p-1 me-1 mt-2 border'>

                                        <span className='m-2'>{i}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <div className='pt-2 d-flex justify-content-between'>
                        <Button label="Apply" className='rounded register-button px-3' />
                        <span><FaCircleCheck fill='#2C82FF'/>Verified</span>
                        </div>

                    </div>
                )
            })
        }
        </>
    )
   
}

export default AccordionCard