import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './Home.css';
import Card from '../Card/Card';
import Uperfoter from '../Uperfoter/Uperfoter';
import Numcounter from '../Numbercounter/Numcounter';


// - Sadaf Riaz: CEO/Founder
// - Muhammad Siddique: Managing Director
// - Ch Muhammad Umar Siddique: Projects Manager
// - Muhammad Bilal: IT Manager


export default function Home() {
    return (
        <>
            <section className="home" id="home">
                <div className="home-content">
                    <h1> Welcome To<span> SHORTLISTED</span></h1>
                    <div className="text-animate">
                        <h2>SHORTLISTED your global trusted partner  renowned for its dual expertise in recruitment services and managed IT support services . With a comprehensive understanding of both the talent landscape and technological needs, SHORTLISTED seamlessly connects top-tier professionals with leading companies worldwide while also offering tailored IT solutions to optimize business operations.</h2>
                    </div>
                    <div className="btn-box">
                        <NavLink to='/contact' className="btn" >Let's Discuss</NavLink>
                    </div>
                </div>


            </section>
            <Numcounter/>
            <section className='section1'>
                <div className='sheading'>
                    <h3>This is the <span>SHORTLISTED </span> Everyone's Talking About</h3>
                </div>
                <div className='heading'>
                    <h1>Our dedicated team excels in sourcing top-tier talent across diverse industries and skill sets, ensuring that your organization has access to the best candidates available. Whether you're looking for software developers, engineers, marketers, sales professionals, or administrative staff, we've got you covered.</h1>

                </div>

                 <div className="cardheading">
                 <h1>Our <span className='spam'>Team</span></h1>
                 </div>
                <div className='cards'>
                    <div className="card12">
                    <div>
                        <Card  heading="Sadaf Riaz" mail="sadaf@shortlisted.live" sheading="CEO/Founder" content="Meet Sadaf Riaz, the visionary leader and driving force behind SHORTLISTED. With a passion for innovation and a track record of success and transformed that vision into reality., she has steered the company towards unparalleled growth and excellence" />
                    </div>
                    <div>
                        <Card  heading="Muhammad Siddique" mail="m.siddique@shortlisted.live" sheading="Managing Director" content="Introducing Muhammad Siddique, the strategic mastermind behind SHORTLISTED operations. With a proven track record of leadership, he plays a pivotal role in driving the company towards its goals." />
                    </div>
                    </div>
                    <div className="card34">
                    <div>
                        <Card  heading="Ch Muhammad Umar Siddique" mail="m.umar@shortlisted.live" sheading="Projects Manager"     content="    Meet Ch Muhammad Umar Siddique, the dynamic Projects Manager at SHORTLISTED. With a proven track record of orchestrating successful projects from inception to completion with standards of quality." />
                    </div>
                    <div>
                        <Card  heading="Muhammad Bilal" mail="bilal@shortlisted.live" sheading="IT Manager"     content="   Meet our esteemed IT Manager Muhammad Bilal, the technical genius behind our digital infrastructure. With a proven track record of implementing cutting-edge technologies and optimizing IT systems." />
                    </div>
                    </div>
                </div>
            </section>

            
                <Uperfoter heading1={'Join Our Team Today'} />
            


        </>

    );
}