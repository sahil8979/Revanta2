import './Footer.css'; // Ensure the correct path
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import nitlogo from '../../assets/nitlogo.png'


const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footerContent'>
        <h2 className='teamHeading'>Team <span className='revanta'>Revanta</span></h2>

        <div className='sectionWrapper'>
          <div className='section'>
            <h3 className='sectionHeading'>Explore Us</h3>
            <ul className='linksList'>
              <li><a href="/home">Home</a></li>
              <li><a href="/member">Member</a></li>
              <li><a href="/achiement">Achievements</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>

          <div className='section'>
            <h3 className='sectionHeading'>Social Media</h3>
            <div className='socialIcons'>
              <a href="https://www.linkedin.com/company/revanta-motorsports-club-nit-hamirpur/" target="_blank" className='socialIcon'><FaLinkedinIn /></a>
              <a href="https://www.instagram.com/team_revanta?igsh=cDFiOXR1NWg3OWl6" target="_blank"  className='socialIcon'><FaInstagram /></a>
              <a href="https://youtube.com/@teamrevantanith6422?si=PQTSgZWml517EKAh"  target="_blank" className='socialIcon'><FaYoutube /></a>
            </div>
          </div>

          <div className='section'>
            <div className='nit'>
         <a href="https://www.nith.ac.in/" target="_blank"> <img  id="nitlogo" src={nitlogo} /> </a>
          </div>
          </div>
        </div>

        <div className='contactSection'>
          <div className='contactItem'>
          <a href='https://maps.app.goo.gl/rGkirKg5PzSJTfwx8' target="_blank" rel="noopener noreferrer">  <FaMapMarkerAlt className='icon' /></a>
            <span>NIT Hamirpur</span>
          </div>
          
          <div className='contactItem'>
           <a href="tel:+919284219815"> <FaPhoneAlt className='icon' /></a>
            <span>+91 9284219815</span>
          </div>
          <div className='contactItem'>
          <a href="tel:+918252486093">  <FaPhoneAlt className='icon' /> </a>
            <span>+91 8252486093</span>
          </div>

          <div className='contactItem'>
           <a href='mailto:revanta@nith.ac.in' target='_blank'> <FaEnvelope className='icon' /> </a>
            <span>revanta@nith.ac.in</span> 
          </div>
        </div>
      </div>

      <div className='footerBottom'>
        <p id="rights">© All Rights Reserved By Team Revanta, NIT Hamirpur</p>
        <div className='designby'>
        <p className='design'>Designed By: <a href="https://www.linkedin.com/in/mohammad-sahil-386161289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">Mohammad Sahil</a>{/*<span className='t'> & </span> <a href="https://github.com">Naman Srivastava</a> */}</p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
