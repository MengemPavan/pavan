import React from "react";
import "./index.css";
import doctor from "../../assets/doctor.png";
import Blackoctors from "../../assets/Blackdoctors .png";
import Rectangle13 from "../../assets/Rectangle13.png";
import Rectangle14 from "../../assets/Rectangle14.png";
import imgStroke from "../../assets/imgStroke.png";

import { GiHeartPlus } from "react-icons/gi";
import { FaArrowRightLong } from "react-icons/fa6";


import AppointmentForm from "../../components/AppointmentForm";
import DoctorCard from "../../components/DoctorCard";
import Dots3 from "../../components/Dots3";
import NewsCard from "../../components/NewsCard";
import ContactCard from "../../components/ContactCard";


const Specialties = [{
  Specialti: "Neurology",
  icon:<GiHeartPlus/>,
},{
  Specialti: "Neurology",
  icon:<GiHeartPlus/>,
  },
{
  Specialti: "Neurology",
  icon:<GiHeartPlus/>,
},{
  Specialti: "Neurology",
  icon:<GiHeartPlus/>,
},{
  Specialti: "Neurology",
  icon:<GiHeartPlus/>,
},{
  Specialti: "Neurology",
  icon:<GiHeartPlus/>,
},{
  Specialti: "Neurology",
  icon:<GiHeartPlus/>,
},{
  Specialti: "Neurology",
  icon:<GiHeartPlus/>,
},{
  Specialti: "Neurology",
  icon:"GiHeartPlus",
  },
  {
  Specialti: "Neurology",
  icon:<GiHeartPlus/>,
},{
  Specialti: "Neurology",
  icon:<GiHeartPlus/>,
},{
  Specialti: "Neurology",
  icon:"GiHeartPlus",
}
]


function index() {
  return (
    <div className="Home-container">
      <div className="Hero-section">
        <div className="Hero-section-text">
          <p className="Hero-section-para">CARING FOR LIFE</p>
          <p className="Hero-section-Head">
            {" "}
            Leading the Way in Medical Excellence
          </p>
          <button className="Hero-Btn">Our Services</button>
        </div>
        <div className="Hero-section-img-container">
          <img
            className="Hero-section-img"
            src={doctor}
            alt="hero-section-doctor"
          />
        </div>
      </div>
      <div className="Welcome-container">
        <p className="welocme-header">WELOCOME TO ASHISCARE</p>
        <h1>A Great Place to Receive Care</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          placerat scelerisque tortor ornare ornare. Convallis felis vitae
          tortor augue. Velit nascetur proin massa in. Consequat faucibus
          porttitor enim et.
        </p>
        <button className="Welccome-section-btn">
          Learn More
          <FaArrowRightLong />
        </button>
      </div>
      <div className="Doctors-img-container">
        <img src={Blackoctors} alt="group of doctors" />
      </div>

      <div className="Our-services-section-container">
        <div>
          <p className="Our-services-section-para">Care you can believe in </p>
          <h1 className="Our-services-section-header">Our Services</h1>
        </div>

        <div className="Our-services-section-container2">
           <div className="Our-services-section">
          <div className="Our-services-section-cards-container">
            <div className="Our-services-section-card">
              <div className="Our-services-section-card-img-container">
                <GiHeartPlus />
              </div>
              <div>
                <p>Cardiogram</p>
              </div>
            </div>
            <div className="Our-services-section-card selected">
              <div className="Our-services-section-card-img-container">
                <GiHeartPlus />
              </div>
              <div>
                <p>Cardiogram</p>
              </div>
            </div>
            <div className="Our-services-section-card">
              <div className="Our-services-section-card-img-container">
                <GiHeartPlus />
              </div>
              <div>
                <p>Cardiogram</p>
              </div>
            </div>
            <div className="Our-services-section-card">
              <div className="Our-services-section-card-img-container">
                <GiHeartPlus />
              </div>
              <div>
                <p>Cardiogram</p>
              </div>
              </div>
              <div className="Our-services-section-card-butoon-container">
              <div>
                <p>View all</p>
              </div>
            </div>
          </div>
        </div>
        <div className="Our-services-section-desctrption-container">
          <p className="Our-services-section-desctrption-header"> A passion for putting patients first</p>
          <div className="list-of-features">
            <div>
              {" "}
              <ul className="list-of-features-list">
                <li>A Passion for Healing</li>
                <li>All our best</li>
                <li>A Legacy of Excellence</li>
              </ul>
            </div>
            <div>
              <ul className="list-of-features-list">
                <li>5-Star Care</li>
                <li>Believe in Us</li>
                <li>Always Caring</li>
              </ul>
            </div>
          </div>
          <div className="Our-services-section-desctrption">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              placerat scelerisque tortor ornare ornare. Quisque placerat
              scelerisque tortor ornare ornare Convallis felis vitae tortor
              augue. Velit nascetur proin massa in. Consequat faucibus porttitor
              enim et.
            </p>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              placerat scelerisque. Convallis felis vitae tortor augue. Velit
              nascetur proin massa in.
            </p>
          </div>
        </div>

        <div className="Our-services-section-imges-container">
            <div className="Our-services-section-img-container">
              <img  className="Our-services-section-img" src={Rectangle13} alt="Rectangle13" />
               <img src={imgStroke} alt="Srokeimg" />
            </div> 
            
            <div  className="Our-services-section-img-container">
              <img className="Our-services-section-img" src={Rectangle14} alt="Rectangle13" />
              <img src={imgStroke} alt="Srokeimg" />
            </div> 
    
        </div>
        </div>
     
     
      </div>

     <div className="Our-Specialties-section-container">
        <div>
          <p className="Our-services-section-para">Always Caring</p>
          <h1 className="Our-services-section-header">Our Specialties</h1 >
        </div>

        <div className="Our-Specialties-section-container2">
              {Specialties.map((item) =>
            (<div  key={item.Specialti}   className="Our-Specialties-section-card ">
              <div className="Our-Specialties-section-card-img-container ">
                {item.icon} 
              </div>
              <div>
                <p>{item.Specialti}</p>
              </div>
            </div>)
          )}
      </div>
       
          
     </div>
      
      <div className="Appoinment-section">
        <div className="Appoinment-section-head">
          <h1  >Book an Appointment</h1>
          <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et. </p>
        </div>
         <div className="Appoinment-section-form-container">
           <AppointmentForm/>
        </div>
      </div> 

      <div className="Our-Doctors-section-container">
        <div>
          <p className="Our-services-section-para">Trusted Care </p>
          <h1 className="Our-services-section-header">Our Doctors</h1>
        </div>

        <div className="Our-Doctors-section-container2">
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
        </div>
         <Dots3/>
      </div>
 
       <div className="News-section-container">
        <div>
          <p className="Our-services-section-para">Better information, Better health  </p>
          <h1 className="Our-services-section-header">News</h1>
        </div>

        <div className="News-section-container2">
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard/>
        </div>
         <Dots3/>
      </div>
      <ContactCard/> 
    </div>
  );
}

export default index;
