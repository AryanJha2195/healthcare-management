import React from 'react'
import { NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const PostNavbar = () => {
  return (
    <div className='d-flex mx-5' style={{backgroundColor: "#535f67",color: "white", height: "5rem"}}>
    <FontAwesomeIcon style={{margin: "30px 20px"}} icon={faHome} />
    <NavDropdown style={{margin: "25px 20px"}} title="About Us" id="basic-nav-dropdown">
      <NavDropdown.Item  href="#about">History</NavDropdown.Item>
      <NavDropdown.Item href="#patients">Our People</NavDropdown.Item>
      <NavDropdown.Item href="#professionals">Organization Structure</NavDropdown.Item> 
    </NavDropdown>
    <NavDropdown style={{margin: "25px 20px"}} title="Patients & Visitors" id="basic-nav-dropdown">
      <NavDropdown.Item href="#about">Urgent and Emergency Care</NavDropdown.Item>
      <NavDropdown.Item href="#patients">Services</NavDropdown.Item>
      <NavDropdown.Item href="#professionals">Patient Information</NavDropdown.Item>
    </NavDropdown>
    <NavDropdown style={{margin: "25px 20px"}} title="Health Professionals" id="basic-nav-dropdown">
      <NavDropdown.Item href="#about">Services</NavDropdown.Item>
      <NavDropdown.Item href="#patients">Emergency Department</NavDropdown.Item>
      <NavDropdown.Item href="#professionals">Women and Children</NavDropdown.Item>
      <NavDropdown.Item href="#research">Community Services and Aged Care</NavDropdown.Item>
      <NavDropdown.Item href="#careers">Primary Care Liaison</NavDropdown.Item>
      <NavDropdown.Item href="#support">Referrals to Specialist Clinics</NavDropdown.Item>
      <NavDropdown.Item href="#contact">Medical Community Virtual Consults</NavDropdown.Item>
    </NavDropdown>
    <NavDropdown style={{margin: "25px 20px"}} title="Research and Education" id="basic-nav-dropdown">
      <NavDropdown.Item href="#about">About Us</NavDropdown.Item>
      <NavDropdown.Item href="#patients">Patients & Visitors</NavDropdown.Item>
      <NavDropdown.Item href="#professionals">Health Professionals</NavDropdown.Item>
      <NavDropdown.Item href="#research">Research and Education</NavDropdown.Item>
      <NavDropdown.Item href="#careers">Careers</NavDropdown.Item>
      <NavDropdown.Item href="#support">Support Us</NavDropdown.Item>
      <NavDropdown.Item href="#contact">Contact Us</NavDropdown.Item>
    </NavDropdown>
    <NavDropdown style={{margin: "25px 20px"}} title="Careers" id="basic-nav-dropdown">
      <NavDropdown.Item href="#about">About Us</NavDropdown.Item>
      <NavDropdown.Item href="#patients">Patients & Visitors</NavDropdown.Item>
      <NavDropdown.Item href="#professionals">Health Professionals</NavDropdown.Item>
      <NavDropdown.Item href="#research">Research and Education</NavDropdown.Item>
      <NavDropdown.Item href="#careers">Careers</NavDropdown.Item>
      <NavDropdown.Item href="#support">Support Us</NavDropdown.Item>
      <NavDropdown.Item href="#contact">Contact Us</NavDropdown.Item>
    </NavDropdown>
    <NavDropdown style={{margin: "25px 20px"}} title="support" id="basic-nav-dropdown">
      <NavDropdown.Item href="#about">About Us</NavDropdown.Item>
      <NavDropdown.Item href="#patients">Patients & Visitors</NavDropdown.Item>
      <NavDropdown.Item href="#professionals">Health Professionals</NavDropdown.Item>
      <NavDropdown.Item href="#research">Research and Education</NavDropdown.Item>
      <NavDropdown.Item href="#careers">Careers</NavDropdown.Item>
      <NavDropdown.Item href="#support">Support Us</NavDropdown.Item>
      <NavDropdown.Item href="#contact">Contact Us</NavDropdown.Item>
    </NavDropdown>
    <NavDropdown style={{margin: "25px 20px"}} title="contact" id="basic-nav-dropdown">
      <NavDropdown.Item href="#about">About Us</NavDropdown.Item>
      <NavDropdown.Item href="#patients">Patients & Visitors</NavDropdown.Item>
      <NavDropdown.Item href="#professionals">Health Professionals</NavDropdown.Item>
      <NavDropdown.Item href="#research">Research and Education</NavDropdown.Item>
      <NavDropdown.Item href="#careers">Careers</NavDropdown.Item>
      <NavDropdown.Item href="#support">Support Us</NavDropdown.Item>
      <NavDropdown.Item href="#contact">Contact Us</NavDropdown.Item>
    </NavDropdown>
    </div>
  )
}

export default PostNavbar