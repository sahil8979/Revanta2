
import Navbar from '../../Components/Navbar/Navbar';
import './Member.css';
import Title from '../Title/Title';
import img from "../../assets/profile.png"
import Swapnil from '../../assets/Swapnil.jpg'
import Nishant from '../../assets/Nishant.jpg'
import Aryan from '../../assets/Aryan Kesharwnai.jpg'
import Sangam from '../../assets/Sangam Thakur.jpg'
import MohitSingh from '../../assets/Mohit Singh.jpg'
import Divyanshu from '../../assets/Divyanshu Sharma.jpg'
import AjayChaudhary from '../../assets/AJAY CHAUDHARY.jpg'
import HarshitPundeer from '../../assets/Harshit Pundeer.jpg'
{/* import VishalVaishnav from '../../assets/VishalVaishnav.jpg'*/}
import Piyush from '../../assets/Piyush.jpg'
import Gautama from '../../assets/Gautama Ukey.jpg'
import TusharChaudhary from '../../assets/Tushar Chaudhary.jpg'
import VanshikaSharma from '../../assets/Vanshika Sharma.jpg'
import PrabhatSingh from '../../assets/PRABHAT SINGH.jpg'
import JatinSharma from '../../assets/Jatin Sharma.jpg'
import KrishanPuniya from '../../assets/KRISHAN PUNIYA.jpg'
import RiteshSharma from '../../assets/RITESH SHARMA.png'
import ShabiThakur from '../../assets/SHABI THAKUR.jpg'
import AyushDixit from '../../assets/AYUSH DIXIT.jpg'
import Amanu from '../../assets/FB2024 - Aman Upadhyay.png'
import PiyushKeshari from '../../assets/IMG_20231220_184752 (1) - Piyush Keshri.jpg'
 import jayant from '../../assets/IMG_20241008_200100 - Jayant Rajput.jpg'
 import Harish from '../../assets/IMG-20240922-WA0000(1) - Harish Jha.jpg'
 import Priyanshu from '../../assets/priyanshu .jpg'
 import sahil from '../../assets/sahil.jpg'
{/* import Chirayu from '../../assets/Photo from Chirayu - CHIRAYU PANDEY.jpg'
import from '../../assets'*/}


const Member = () => {
  return (
    <div className='background'>
      <Navbar />
      
      {/* Heading Section */}
      <div className="heading-text">
        <Title id="title" subTitle="Meet Our" title="Members" />
        <p className="first-text">"A dynamic group of innovators and racers</p>
        <p>Driven by a passion for motorsport excellence."</p>
        {/* Line after quote that spans the entire width */}
        <hr className="quote-line-full" />
      </div>
      
      {/*-------------------------------------------------------------- Final Year Section ------------------------------------------------------*/}
      <h1 className="year-heading">FINAL YEAR</h1>
      <hr className="year-line" />
      <div className="member-cards">

        {/* Mohit Singh */}
        <div className="member-card">
          <div className="image-container">
            <img src={MohitSingh} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="#" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Mohit Singh</h3>
          <p>Powertrain Domain</p>
        </div>

         {/* Jayant  */}
         <div className="member-card">
          <div className="image-container">
            <img src={jayant} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/jayant-rajput-720471239/" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/jayantrajput._?igsh=MTdnMzRwZTllcGtyeA==" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Jayant Rajput </h3>
          <p> Management Domain</p>
        </div>


          {/* Harish Kumar  */}
        <div className="member-card">
          <div className="image-container">
            <img src={Harish} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/harish-kumar-9a73031a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/harish.jha__/profilecard/?igsh=eTZqZnVrdWszcGRv" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Harish Kumar </h3>
          <p>Suspension Domain</p>
        </div>


        </div>

     {/* Third Year Year Section */}
     <h1 className="year-heading">THIRD YEAR</h1>
      <hr className="year-line" />
      <div className="member-cards">

        {/* Swapnil*/}
        <div className="member-card">
          <div className="image-container">
            <img src={Swapnil} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="http://linkedin.com/in/swapnil-41a845233" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3 className='name'>Swapnil</h3>
          <p>Captain</p>
          <p className='domain'>Powertrain Domain</p>
        </div>
         
         {/* NIshant  */}
        <div className="member-card">
          <div className="image-container">
            <img src={Nishant} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/nishant-prakhar" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/nishant.prakhar?igsh=ZW81MHRvOWcwbWRj" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Nishant Prakhar</h3>
          <p>Chassis Head</p>
          <p className='domain'>Chassis Domain</p>
        </div>

            {/* Aman Upadhyay */}
        <div className="member-card">
          <div className="image-container">
            <img src={Amanu} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/aman-upadhyay-2ba44024b/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/awishonaneyelash/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Aman Upadhyay</h3>
          <p>Steering Head</p>
          <p className='domain'>Steering Domain</p>
        </div>
         
         
        {/* Piyush Keshari  */}
        <div className="member-card">
          <div className="image-container">
            <img id ="piyush" src={PiyushKeshari} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/piyush-keshri-22156025a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/piyushkeshri442?igsh=eHZ0bDlvdHZ6ZWVm" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Piyush Keshri</h3>
          <p>Suspension Head</p>
          <p className='domain'>Suspension Domain</p>
        </div>
        

       </div>
       {/* ---------------------------------------------------Second  Year Section -----------------------------------------------------*/}

       <h1 className="year-heading">SECOND YEAR</h1>
      <hr className="year-line" />
      <div className="member-cards">

        {/*Mohammad Sahil*/}
        <div className="member-card">
          <div className="image-container">
            <img src={sahil} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/mohammad-sahil-386161289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/sahil_168o?igsh=d2htYjd4bDczcW11" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Mohammad Sahil</h3>
          <p>Steering Domain</p>
        </div>

        {/* Sangam */}
        <div className="member-card">
          <div className="image-container">
            <img src={Sangam} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/sangam-thakur-1b9595226?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/thesangam_thakur?igsh=MXZreTJiaXRpazhzbw==" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Sangam Thakur</h3>
          <p className='domain'>Steering & Powertrain Domain</p>
        </div>
        
        {/* Aryan  */}
        <div className="member-card">
          <div className="image-container">
            <img src={Aryan} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/aryan-kesharwani-659a902ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/aryanx_94?igsh=MTQ1ZWU5aXk1NHl1Ng==" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Aryan Kesharwani</h3>
          <p className='domain'>Chassis & Braking Domain</p>
        </div>
        {/* Piyush*/}
        <div className="member-card">
          <div className="image-container">
            <img src={Piyush} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/piyush-kumar-aa90ab28a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/piyusx_1" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Piyush</h3>
          <p>Chassis & Graphics Domain</p>
        </div>
        {/* Prabhat Singh */}
       <div className="member-card">
          <div className="image-container">
            <img src={PrabhatSingh} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/prabhat-singh-253146290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/prabhats.25?igsh=MzU3bjFjZDE2YjN1" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Prabhat Singh </h3>
          <p>Steering & Suspension Domain</p>
       </div>

        {/*Divyanshu*/}
        <div className="member-card">
          <div className="image-container">
            <img src={Divyanshu} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/divyanshu2oo4/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Divyanshu Sharma</h3>
          <p>Powertrain Domain</p>
        </div>

        {/*Priyanshu */}
        <div className="member-card">
          <div className="image-container">
            <img src={Priyanshu} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/priyanshu-chaudhary-009802278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/priyanshupc.8755/profilecard/?igsh=eDM3OGx3OThueHpo" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Priyanshu Chaudhary</h3>
          <p>Domain</p>
        </div>

        {/*Ajay Chaudhary */}
        
        <div className="member-card">
          <div className="image-container">
            <img src={AjayChaudhary} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/ajay-chaudhary-b0bbb0286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/ajay_chaudhary_6563?igsh=cTEwa3lmZm12N2N2" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Ajay Chaudhary</h3>
          <p>Chassis</p>
        </div>
        {/* Harshit Pundeer */}
        <div className="member-card">
          <div className="image-container">
            <img src={HarshitPundeer} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/harshit-pundeer-34939b292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/harshitpundeer_?igsh=NTBkMWVzZTQycjh1" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Harshit Pundeer</h3>
          <p>Braking Domain</p>
        </div>
        

         {/* Gautama Ukey  */}
         <div className="member-card">
          <div className="image-container">
            <img src={Gautama} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/gautamaa-ukey-411a9a2ab" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/gautamaa_ukey?igsh=ZTZnNWJlcDBsZWFp" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Gautama Ukey </h3>
          <p>Steering & Suspension Domain</p>
       </div>

        {/* Tushar Chaudhary  */}
        <div className="member-card">
          <div className="image-container">
            <img src={TusharChaudhary} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/tushar-chaudhary-569530312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/_tushar_chaudhary001?igsh=MTN1enhrc3J5cHhneg==" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Tushar Chaudhary</h3>
          <p>Suspension Domain</p>
       </div>
       {/*Vanshika Sharma*/}
       <div className="member-card">
          <div className="image-container">
            <img src={VanshikaSharma} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/vanshika-sharma-5151162b1" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/van.shikasharma2101?igsh=MXcwYm43MDA3YTZ3YQ==" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Vanshika Sharma</h3>
          <p>Steering Domain</p>
       </div>
       

       {/*Jatin Sharma*/}
       <div className="member-card">
          <div className="image-container">
            <img src={JatinSharma} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/jatin-sharma-66a151293/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/jatin221b" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Jatin Sharma</h3>
          <p>Braking Domain</p>
       </div>
       {/* Krishan Puniya */}
       <div className="member-card">
          <div className="image-container">
            <img src={KrishanPuniya} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/krishan-puniya-38640332a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/_krishanpuniya?igsh=NGRmNDAwMTl6YWZv" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Krishan Puniya </h3>
          <p>Suspension Domain</p>
       </div>
       {/* Ritesh Sharma*/}
       <div className="member-card">
          <div className="image-container">
            <img src={RiteshSharma} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/ritesh-sharma-8146892a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Ritesh Sharma </h3>
          <p>Suspension Domain</p>
       </div>
       {/* Shabi Thakur  */}
       <div className="member-card">
          <div className="image-container">
            <img src={ShabiThakur} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="https://in.linkedin.com/in/shabi-thakur-0b58692b9" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Shabi Thakur </h3>
          <p>Braking & Powertrain Domain</p>
       </div>
       {/* Ayush Dixit */}
       <div className="member-card">
          <div className="image-container">
            <img src={AyushDixit} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/ayush-dixit-0b523227a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/ayushdixitk?igsh=MWN4MHlpdjAwaDdlbg==" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Ayush Dixit</h3>
          <p>Steering Domain</p>
       </div>
       {/* Vishal Vaishnav */}
       <div className="member-card">
          <div className="image-container">
            <img src={img} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/vishal-vaishnav-204568324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_apphttps://www.linkedin.com/in/prabhat-singh-253146290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/vishaal_vaishnav?igsh=MXVndHRmN3VpeDZzcw==https://www.instagram.com/prabhats.25?igsh=MzU3bjFjZDE2YjN1" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Vishal Vaishnav </h3>
          <p>Chasis Domain</p>
       </div>
{/* Chirayu Lauda */}
       {/*
       <div className="member-card">
          <div className="image-container">
            <img src={Chirayu} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/chirayu-pandey-23bme033?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Chirayu Pandey </h3>
          <p>Powertrain & Braking Domain</p>
       </div>
       */}

        </div>
      
        
        
     {/* First Year Section */}
     <h1 className="year-heading">FIRST YEAR</h1>
      <hr className="year-line" />
      <div className="member-cards">
        {/* Member 1 */}
        <div className="member-card">
          <div className="image-container">
            <img src={img} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Name</h3>
          <p>Domain</p>
       </div>

        {/* Member 1 */}
        <div className="member-card">
          <div className="image-container">
            <img src={img} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Name</h3>
          <p>Domain</p>
       </div>
        {/* Member 1 */}
        <div className="member-card">
          <div className="image-container">
            <img src={img} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Name</h3>
          <p>Domain</p>
       </div>
        {/* Member 1 */}
        <div className="member-card">
          <div className="image-container">
            <img src={img} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Name</h3>
          <p>Domain</p>
       </div>
        {/* Member 1 */}
        <div className="member-card">
          <div className="image-container">
            <img src={img} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Name</h3>
          <p>Domain</p>
       </div>
     </div>
  </div>
  );
};

export default Member;
