import React from 'react';
import './Contact.css';
import Title from '../Title/Title';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import Swapnil from '../../assets/Swapnil.jpg';
import Aman from '../../assets/aman.jpg'; // Import Aman’s photo

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "04122988-ce2d-4d0f-a5bf-d815917483ff");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
      <div className="contact-div">
        <Title subTitle="Contact" title="Get In Touch" />
      </div>
      <div className='contact'>
        <div className="contact-col">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3394.273282640807!2d76.52477767541386!3d31.70842907412846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904d5487e12c4a1%3A0x395f92d3a202a7d0!2sNational%20Institute%20of%20Technology%2C%20Hamirpur!5e0!3m2!1sen!2sin!4v1726667105773!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy">
          </iframe>
        </div>
        
        <div className='contact-col'>
          <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter your name' required />
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder="Enter your phone number" required />
            <label>Write your message here</label>
            <textarea name="message" rows='6' placeholder='Enter your message' required ></textarea>
            <button type="submit" className='btn dark-btn'>Submit Now</button>
          </form>
          <span>{result}</span>
        </div>
      </div>

      {/* Heading and Contact Information */}
      <div className="contact-divs">
        <Title subTitle="For any Queries" title="Contact" />
      </div>
      
      <div className="contact">
        <div className="contact-col contact-box">
          <div className="contact-info">
            <div className="photo-container">
              <img src={Swapnil} alt="Swapnil" />
            </div>
            <p>
              <strong className='text'>Swapnil</strong><br />
              <span className="contact-info-item">
               <a href="mailto:swapnil@example.com"> <FaEnvelope id='icon'/> </a> swapnil@example.com
              </span>
              <span className="contact-info-item">
                <a  href="tel:+918252486093"> <FaPhone id='icon' /> </a>  +91 8252486093
              </span>
            </p>
          </div>
        </div>

        <div className="contact-col contact-box">
          <div className="contact-info">
            <div className="photo-container">
              <img src={Aman} alt="Aman Upadhyay" />
            </div>
            <p>
              <strong className='text'>Aman Upadhyay</strong><br />
              <span className="contact-info-item">
               <a href="mailto:aman@example.com"><FaEnvelope id='icon'  /> </a> aman@example.com
              </span>
              <span className="contact-info-item" >
                <a href="tel:+919284219815"><FaPhone id='icon'  /></a> +91 9284219815
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
