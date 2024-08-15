import React from 'react';
import './Counter.css';

function Counter({ img, head, cont }) {
    return (
        <>
            <div className='csection'>
                <div className='cdiv'>
                    <div className='counting'>
                        <img src={img} alt="" />
                    </div>
                    <div className='content'>
                        <h1>{head}</h1>
                        <h3>{cont}</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter
