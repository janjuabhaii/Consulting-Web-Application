import React, { useState } from 'react';
import './Card.css'; // Import the CSS file for styling


function Card({heading,mail,sheading,content}){
  
    // var [sheading, setsheading]=useState('I am a architecture at the moment');
    // var [heading,setheading]=useState('Awais janjua');
    // var [content,setcontent]=useState('fjsdklafjdkljaskjfdj fnasjfsdfnsflsjsdklf kjfnsdkjfklsdjklfs flsljsdfkljskld sdfllfjs fnkln sfalfn')
  return (
    <div className="card">
      {/* <img  src={setimage} alt="Card Image" className="card-image" /> */}
     
      <h2 className="card-heading">{heading}</h2>
      <p className='card-text1'>{mail} </p>
      <h3 className="card-subheading">{sheading}</h3>
      <p className="card-text">{content}</p>
    </div>
  );
}

export default Card;