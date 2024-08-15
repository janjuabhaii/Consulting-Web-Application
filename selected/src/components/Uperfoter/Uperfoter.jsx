import React from 'react'
import './Uperfoter.css';
import { Link, NavLink } from 'react-router-dom';

function Uperfoter({heading1}) {
    return (
        <>
            <section className='section'>
                <div className='uperpart'>
                    <div className="content">
                        <h1> <span className='t1'>We Believe In <span className='t2'>People</span> And Their</span><span className='t2'> Growth</span></h1>
                    </div>
                </div>
                <div className='lowerpart'>
                    <div className="cont">
                        <h1>{heading1}</h1>
                        <h2>Our People Our Priority.</h2>
                        <div className="btn-box">
                        <NavLink to='/contact' className="btn" >Let's Discuss</NavLink>
                        </div>

                    </div>


                </div>
            </section>
        </>
    )
}

export default Uperfoter
