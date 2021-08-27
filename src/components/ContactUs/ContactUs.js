import React, { useState } from "react";
import { Link} from "react-scroll";
import './ContactUs.css'
import { Navbar, Nav} from 'react-bootstrap';

const ContactUs = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <div id="contact">
   
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>Happetite</h3>
        <p className="footer-links">
        <Nav.Link  style={{fontSize:'medium', fontWeight:'400'}}><Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            style={{fontSize:'medium', fontWeight:'800', marginLeft:'-10px', marginRight:'-12px'}}>Home</Link></Nav.Link>
          
          {' -'}
          <Nav.Link href="#/References" style={{fontSize:'medium', fontWeight:'800', marginLeft:'-10px', marginRight:'-12px'}}>References</Nav.Link>
          {' -'}
          <Nav.Link href="#/FAQ" style={{fontSize:'medium', fontWeight:'800', marginLeft:'-10px', marginRight:'-12px'}}>FAQs</Nav.Link>
          {' -'}
          <Nav.Link onClick={()=>window.open('mailto:happetitedevelopers@gmail.com?')} style={{fontSize:'medium', fontWeight:'800', marginLeft:'-10px'}}>Mail Us</Nav.Link>
        </p>
        <p className="footer-company-name">Happetite © 2021</p>
      </div>
      <div className="footer-right">
        <p>Contact Us</p>
        <form action="#" method="post">
          <input type="text" name="email" placeholder="Email" />
          <textarea name="message" placeholder="Message" defaultValue={""} />
          <button>Send</button>
        </form>
      </div>
    </footer>
  </div>
  );
};

export default ContactUs;
