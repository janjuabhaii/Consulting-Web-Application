import React from 'react'
import Servicescmpt from '../Servicescmpt/Servicescmpt';
import Uperfoter from '../Uperfoter/Uperfoter';
import './Services.css';

function Services() {
  return (
    <>


      <div className="services">
        <h1>Our <span className='spannn'>Services </span></h1>
        <Servicescmpt image1='/images/services1.png' Leftheading="Application and Software Development" des1="We offer a full range of custom software/ application development services for a wide variety of verticals and business domains. We build custom software products from the ground up, using industry standard development frameworks tailored perfectly to your needs and sustainable in the long term." p1="UI/UX" p2="Cloud Micro Services" 
        p3="Rebotic Process Automation(RPA)" p4="Managed Services & Support" image2='/images/services2.png' rightheading="Mobile Apps" des2="We design, develop and maintain successful mobile applications, helping businesses use their full potential. We analyze your goals, resources and budget to help you choose the best app solution for your unique business needs." li1="Android Development" li2="IOS Development" li3="Managed Services & Support" li4="Quality Assurance and Testing" />
        <Servicescmpt image1='/images/Enterprise.png' Leftheading="Enterprise Application" des1='We represent a new paradigm in the use of technology and services. Small, medium and large companies use this to facilitate their entire business process since it allows them to integrate everything from software applications to hardware systems.' p1="CRM Integration" p2="BI Integration" p3="Payroll and HR Solutioning" p4="Managed Services & Support " 
        image2='/images/services1.png'  rightheading="Web Development" des2="Web development services involve the creation
         , optimization, and maintenance of websites and web applications to meet the unique requirements and goals of businesses and organizations. " li1="Custom Web Development" li2="Web Accessibility Compliance" li3="Content Strategy and Management" li4="
         Social Media Integration" />
        

      </div>
      <Uperfoter heading1='May We Assist You?'/>
    </>

  )
}

export default Services
