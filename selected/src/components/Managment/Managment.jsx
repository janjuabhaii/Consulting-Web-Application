import React from 'react'
import './Managment.css';
import Itcards from '../Itcards/Itcards';

function Managment() {
  return (
    <>
      <div className="serves">
        <h1>Managed IT <span>Services</span></h1>
        <h3>SHORTLISTED provides a wide range of managed IT support services to its worldwide clients with 24x7 onsite resource availability through its network of 12000+ IT engineers.
        </h3>
      </div>
      <div className="whole">
      <div className="header">
        
          <h1>Our <span>Services</span></h1>
        </div>
        <div className="rowshead">
          <div className="fristrow">
            <Itcards cardheading="Breakfix:" carddesc=" Delivering proactive IT solutions with precision and reliability, ensuring uninterrupted business operations." />
            <Itcards cardheading="Rollouts:" carddesc="Streamlining IT implementations with meticulous planning and execution, driving efficiency and scalability for your business." />
            <Itcards cardheading="IMAC/ITAD Support:" carddesc="Expert facilitation of Installations, Moves, Adds, and Changes, ensuring seamless transitions and optimal asset disposition for your IT infrastructure." />
          </div>
          <div className="fristrow">
            <Itcards cardheading="Outsourced IT Resources (FTEs):" carddesc=" Access top-tier Full-Time Equivalents (FTEs) for comprehensive IT support" />
            <Itcards cardheading="Data Center Support:" carddesc="Comprehensive expertise and responsive service to optimize the performance, security, and efficiency of your critical data" />
            <Itcards cardheading="Remote IT Support:" carddesc="Empowering businesses with seamless remote technical assistance and solutions, Remote IT Support ensures optimal digital performance anytime, anywhere" />
          </div>
          <div className="fristrow">
            <Itcards cardheading="IT Stock Storage:" carddesc=" Your trusted partner for secure and efficient IT inventory management solutions" />
            <Itcards cardheading="End User Computing:" carddesc="Elevating productivity through seamless integration and support of user-centric technology solutions." />
            <Itcards cardheading="Service Desk:" carddesc=" Your dedicated hub for swift, expert IT assistance, ensuring uninterrupted productivity and seamless operations." />
          </div>

        </div>
      </div>

    </>
  )
}

export default Managment
