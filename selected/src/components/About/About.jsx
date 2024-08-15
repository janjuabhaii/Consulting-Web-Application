import React from 'react'
import './About.css';
import Counter from '../Counter/Counter';
import Uperfoter from '../Uperfoter/Uperfoter';
import Numcounter from '../Numbercounter/Numcounter';
export default function About() {
  return (
    <>
      <section className='abt'>
        <div className="subabt">
          <div className='heading1'>
            <h1>Our Mission</h1>
            <h3>"Our mission is to match top talent with opportunities that inspire and empower both individuals and organizations to thrive." </h3>
          </div>
          <div className='heading2'>
            <h1>Our Vision </h1>
            <h3>"Empowering businesses by connecting them with  <br />exceptional talent through personalized recruitment solutions."s</h3>
          </div>
        </div>
      </section>
      <Numcounter/>


      {/* <div className='design'><h1 >Core Values</h1></div> */}
      <div className='counter'>
       
        
        <Uperfoter heading1={"May We Assist You?"} />

      </div>
    </>
  );
}