import React from 'react'
import './Servicescmpt.css';

function Servicescmpt({ Leftheading, rightheading,des1,des2, p1, p2, p3, p4, li1, li2, li3, li4,image1,image2 }) {
    return (
        <>
        <div className="services">
            <div className="serviceheading1">
                <h1>{Leftheading} </h1>
                <p>{des1}</p>
            </div>
            <div className="services1">
                <div className="left">

                    <ul>
                        <li>• {p1}</li>
                        <li>• {p2}</li>
                        <li>• {p3}</li>
                        <li>• {p4}</li>
                    </ul>
                </div>
                <div className="right">
                    <img src={image1} alt="" />
                </div>
            </div>


            <div className="serviceheading2">
                <h1>{rightheading}</h1>
                <p>{des2}</p>
            </div>
            <div className="services2">

                <div className="left2">
                    <img src={image2} alt="" />
                </div>
                <div className="right2">

                    <ul>
                        <li>• {li1}</li>
                        <li>• {li2}</li>
                        <li>• {li3}</li>
                        <li>• {li4} </li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default Servicescmpt
