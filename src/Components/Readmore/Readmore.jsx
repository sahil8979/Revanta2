
import Navbar from '../Navbar/Navbar';
import aboutimg from '../../assets/hero3.jpg';
import Title from '../Title/Title';
import './Readmore.css';

const Readmore = () => {
  return (
    <div>
      <Navbar />
      <div className='titles'>
        <Title subTitle="About" title="Team Revanta" />
      </div>
      <div className='about'>
        <div className='about-content'>
          <div className='about-text'>
            <p>Welcome to TeamRevanta. The Motorsports Society of NIT Hamirpur! At NIT Hamirpur, our passion for racing fuels not just our engines but ignites a relentless drive for engineering excellence. TeamRevanta, the Motorsports Society of NIT Hamirpur, is a vibrant and ambitious student-led organization dedicated to pushing the boundaries of motorsport innovation and competition. Our mission is to foster creativity, technical skill, and teamwork as we design, build, and race custom vehicles in some of the most prestigious student racing competitions.</p>
          </div>
          <div className='about-img'>
            <img src={aboutimg} alt='Motorsports' />
          </div>
        </div>
      </div>
      <div className='Team-Journey'>
        <h2 id='heading'>Team Journey</h2>
        <p className='welcome-text'>Founded in 2016, TeamRevanta started with a few passionate motorsport enthusiasts at NIT Hamirpur. Through dedication and teamwork, we have evolved into the colleges leading motorsport society. Our journey from a small group to a prominent force in collegiate racing showcases our commitment to innovation and excellence. Today, we proudly represent the pinnacle of motorsport achievement at NIT Hamirpur.</p>
      </div>
      <div className='Vision'>
        <h2 id='heading'>Vision</h2>
        <p className='welcome-text'>At TeamRevanta, our vision is to inspire and lead in the world of collegiate motorsports by fostering a culture of innovation, teamwork, and technical excellence. We strive to push the boundaries of engineering and racing, continuously setting new standards and achieving excellence. Our goal is to empower future generations of engineers and enthusiasts, driving them to excel both on and off the track while making a lasting impact in the world of motorsports.</p>
      </div>
      <div className='Get-Involved' id="getmargin">
        <h2 id='heading'>Get Involved</h2>
        <p className='welcome-text'>Whether you  are an aspiring engineer, a motorsport enthusiast, or someone passionate about innovation, TeamRevanta invites you to join our journey. Be a part of a community that thrives on collaboration, creativity, and a shared love for racing. Together, we can push the boundaries of whats possible and drive towards a future where excellence is our standard.</p>
      </div>
    </div>
  );
}

export default Readmore;
