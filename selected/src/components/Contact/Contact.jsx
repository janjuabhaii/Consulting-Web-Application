import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faMapLocation,faPhoneVolume} from '@fortawesome/free-solid-svg-icons'
import Uperfoter from '../Uperfoter/Uperfoter';

export default function Contact() {
    return (
        <>

            <section className="contact" id="contact">
                <div className="content">
                    <h2>Let's Get In Touch</h2>
                </div>
                <div className="container">
                    <div className="contactinfo">

                        <div className="box">
                            <div className="iconss"><FontAwesomeIcon className='fa' icon={faPhoneVolume} /></div>
                            <div className="text">
                                <h3>Phone</h3>
                                <ul>
                                    <li>
                                        <h2>Pakistan:0092 333 1596343</h2>
                                    </li>
                                    <li>
                                        <h2>United Kingdom:0044 747 0245176</h2>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="box">
                            <div className="iconss"><FontAwesomeIcon className='fa' icon={faEnvelope} />
                            </div>
                            <div className="text">
                                <h3>Email</h3>
                                <ul>
                                    <li>
                                        <h2>contact@shortlisted.com</h2>
                                    </li>
                                    {/* <li>
                                        <h2>careers@bean𝒃𝒆𝒏𝒅.com</h2>
                                    </li> */}
                                </ul>
                            </div>
                        </div>

                        <div className="box">
                            <div className="iconss"><FontAwesomeIcon className='fa' icon={faMapLocation} /></div>
                            <div className="text">
                                <h3>Address</h3>
                                <ul>
                                    <li>
                                        <h2>Main office :  Grange Road, B66 4NG  Smethwick ,United Kingdom. 
</h2>
                                    </li>
                                    <li>
                                        <h2>Branch office  : Office no 115-Groud Floor Malkabad , Muree road, Rawalpindi.</h2>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="contactform">
                        <form action="https://formsubmit.co/contact@shortlisted.live" method="POST">
                            <h2>Contact Us</h2>
                            <div className="inputBox">
                                <input type="text" name="name" required placeholder="   Full Name" />

                            </div>
                            <div className="inputBox">
                                <input type="email" name="email" required placeholder="   contact@shortlisted.live"/>

                            </div>
                            <div className="inputBox">
                                <textarea name="message" required placeholder="     Type your Message here..."></textarea>

                            </div>
                            <div className="inputBox">
                                <input type="submit" name="" value="Send"/>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <Uperfoter heading1="May We Assist You?"/>

        </>
    );
}