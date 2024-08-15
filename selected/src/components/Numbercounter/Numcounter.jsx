import React, { useState } from 'react'
import './Numcounter.css';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';


function Numcounter() {
    const [counterState,setCounterState]=useState(false)
  return (
    <ScrollTrigger onEnter={() => setCounterState(true)} onExit={() => setCounterState(false)}>
    <div className='numcounter'>
      <div className='number'>
        <h2>
            { counterState &&
            <CountUp
             start={0} end={948} duration={3}
             >
            </CountUp>
            }
            </h2>
        <p>Candidate</p>
      </div>
      <div className='number'>
        <h2>
            { counterState &&
            <CountUp
             start={0} end={546} duration={3}
             >
            </CountUp>
            }
            </h2>
        <p>Jobs</p>
      </div>
      <div className='number'>
        <h2>
            { counterState &&
            <CountUp
             start={0} end={789} duration={3}
             >
            </CountUp>
            }
            </h2>
        <p>Consultants</p>
      </div>
    </div>
    </ScrollTrigger>
  )
}

export default Numcounter
