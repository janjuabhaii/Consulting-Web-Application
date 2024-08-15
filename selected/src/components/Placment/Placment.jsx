import React from 'react';
import './placment.css';
import Uperfoter from '../Uperfoter/Uperfoter';

function Placment() {
  return (
    <>
      <div className="placment">
        <h1>Professional Placement</h1>
        <h2> Our placement process primarily focuses on presenting <br />
          SHORTLISTED candidates to the client, the  
          process involves the following steps....
        </h2>
      </div>

      <div className="missionvission">
        {/* <div className="head">
         <h1>Our Focused Areas</h1>
        </div> */}

        <div className="servs">
          <div className="servs1">
            <img src="/images/serv1.png" alt="" />
          </div>
          <div className="servs1">
            <img src="/images/serv3.png" alt="" />
          </div>
        </div>
      </div>
      

    </>

  )
}

export default Placment
