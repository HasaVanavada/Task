
import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { FaCircleCheck } from "react-icons/fa6";
import sponsor1 from "../assets/person1.png"
import sponsor2 from "../assets/png-transparent-logoipsum-logo-tech-companies-thumbnail-removebg-preview.png"
const jobsData = [
    {
        company: "Rajesh Sharma",
        role: "Navigating the Digital Marketing Landscape",
        place: "Sep 04,2024",
        jobDescription: "Provide financial guidance and strategic planning to a growing startup",
        benefits: ["part-time", "financial Analysis", "strategic planning", "startup-experience"],
        logo: sponsor1,
        category:"Marketing"
    },
    {
        company: "Anitha Varma",
        role: "Financial Planning for Retiremnet:Key Considerations",
        place: "Aug 28,2024",
        jobDescription: "Provide financial guidance and strategic planning to a growing startup",
        benefits: ["part-time", "financial Analysis", "strategic planning", "startup-experience"],
        logo: sponsor1,
        category:"Finance"
    },
    {
        company: "Vikram Patel",
        role: "Building a high performing teams:Leadership Insights",
        place: "Aug 15,2024",
        jobDescription: "Provide financial guidance and strategic planning to a growing startup",
        benefits: ["part-time", "financial Analysis", "strategic planning", "startup-experience"],
        logo: sponsor1,
        category:"Leadership"
    },
    {
        company: "Neha Kapoor",
        role: "The Future of Work:Enhancing flexibilty and remote collaboration",
        place: "June 30,2024",
        jobDescription: "Provide financial guidance and strategic planning to a growing startup",
        benefits: ["part-time", "financial Analysis", "strategic planning", "startup-experience"],
        logo: sponsor1,
        category:"Technology"
    },

]
const Blog = (props) => {
    return (
        <>     {
            jobsData.map((item) => {
                return (
                    <div className="card p-3 card-bg m-2" style={{ width: "40%" }}>
                        <div className='business1 p-1 me-1 mt-2 border border-danger-subtle rounded-4 bg-white text-danger text-center' style={{ width: "16%" }}>

                            <span className='m-2' >{item.category}</span>
                        </div>
                        <div className='d-flex border-bottom pb-2'>
                            <div className='p-2 d-flex'>
                                <img src={item.logo} alt="" className='card-logo-img' />
                            </div>
                            <div className='d-flex flex-column'>
                                <span style={{ fontWeight: 600, fontSize: "14px" }}>{item.company}</span>
                                <span style={{ fontWeight: 500, fontSize: "10px", color: "grey" }}>{item.place}</span>
                            </div>

                        </div>

                        <span className='card-title' style={{fontWeight:500}}>{item.role}</span>
                        <p className="m-0 card-description">
                            {item.jobDescription}
                        </p>



                    </div>
                )
            })
        }
        </>
    )

}

export default Blog