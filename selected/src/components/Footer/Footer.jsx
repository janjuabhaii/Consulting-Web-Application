import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SocialIcon } from 'react-social-icons';
import 'react-social-icons/facebook';
import 'react-social-icons/instagram';
import 'react-social-icons/linkedin';
import 'react-social-icons/twitter';
import { faEnvelope,faArrowRight} from '@fortawesome/free-solid-svg-icons'



export default function Footer() {
    return (
       <>
       <footer>
        <div className="row">
            <div className='col'>
                <img src="/images/finallogoedit.jpg" className='logo' />
                <p>
                Welcome to SHORTLISTED, your trusted partner in talent acquisition. We specialize in technical and non-technical recruitment, offering tailored solutions to meet your staffing needs with precision and efficiency.
                </p>
                <br />
                <p>➮ Sadaf Riaz: CEO/Founder.</p>
                <p>➮ Muhammad Siddique: Managing Director.</p>
                <p>➮ Ch Muhammad Umar Siddique: Projects Manager.</p>
                <p>➮ Muhammad Bilal: IT Manager.</p>
            </div>
            <div className='col'>
                <h3>Office <div className='underline'><span></span></div></h3>
                <p>Main office :  Grange Road, B66 4NG  Smethwick ,United Kingdom.</p>
                <p>Branch office  : Office no 115-Groud Floor Malkabad , Muree road, Rawalpindi</p>
                <p  className='email-id' >contact@shortlisted.com</p>
                <h4>0092 333 1596343 </h4>
                <h4>0044 747 0245176 </h4>
            </div>
            <div className='col'>
                <h3>links <div className='underline'><span></span></div></h3>
                <ul>
                 <li> <NavLink to ="/">Home</NavLink></li>
                 <li> <NavLink to="about">About</NavLink></li>
                 <li> <NavLink to="services">Services</NavLink></li>
                 <li> <NavLink to="contact">Contact</NavLink></li>
                 </ul>
                 
                 
            </div>
            <div className='col'>
                <h3>NewsLetter <div className='underline'><span></span></div></h3>
                <form action="https://formsubmit.co/contact@shortlisted.live" method="POST" >
                <FontAwesomeIcon className='fa' icon={faEnvelope} />
                    <input type="email" placeholder='  Enter your email ' required />
                    <button typeof='submit' value="Send"><FontAwesomeIcon className='fas' icon={faArrowRight}/></button>
                </form>
                <div className="social-icons">
                <SocialIcon className='linksss' url="www.facebook.com" />
                <SocialIcon className='linksss' url="www.whatsapp.com" />
                <SocialIcon className='linksss' url="www.linkedin.com" />
                <SocialIcon className='linksss' url="www.instagram.com" />
                </div>
            </div>
        </div>
        < hr/>
        <p className='cpyright'>© Copyright 2024 | Shortlisted | All Rights Reserved | Designed And Maintained By BeanBend.</p>
       </footer>
       </>
    );
}