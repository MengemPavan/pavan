import Rectangle20 from "../../assets/Rectangle20.png";
import { FaInstagramSquare, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import "./index.css";


function DoctorCard() {
  return (
     <div className="Our-Doctors-section-card">
            <div className="Our-Doctors-section-card-img-container">
              <img src={Rectangle20} alt="Rectangle15" />
            </div>
            < div className="Our-Doctors-section-card-details-container">
              <p>Dr. John Doe</p>
              <p>Cardiologist</p>
              <div className="Our-Doctors-section-card-details-container-icons"> 
                <FaFacebookSquare />
                <FaInstagramSquare />
                 <FaLinkedin />
              </div>
            </div>
            <button className="Our-Doctors-section-Button" type="button" >View Profile</button>
          </div>
  )
}

export default DoctorCard