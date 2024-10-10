
import { useNavigate } from 'react-router-dom';
import aboutimg from '../../assets/hero3.jpg';
import './About.css';

const About = () => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate('/readmore');
  };

  return (
    <div className='about' id='about-section'>
      <div className='about-content'>
        <div className='about-text'>
          <p className='welcome-text'>Welcome to TeamRevanta. The Motorsports Society of NIT Hamirpur! At NIT Hamirpur, our passion for racing fuels not just our engines but ignites a relentless drive for engineering excellence. TeamRevanta, the Motorsports Society of NIT Hamirpur, is a vibrant and ambitious student-led organization dedicated to pushing the boundaries of motorsport innovation and competition. Our mission is to foster creativity, technical skill, and teamwork as we design, build, and race custom vehicles in some of the most prestigious student racing competitions.</p>
          <button className='read-more' onClick={handleReadMore}>Read More</button>
        </div>
        <div className='about-img'>
          <img src={aboutimg} alt='Motorsports' />
        </div>
      </div>
    </div>
  );
};

export default About;
