
import "./index.css";
import { MdWifiCalling3 } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";


 const ContcardList =[
 {
     id: 1,
    icon:<MdWifiCalling3 size={40} fill="#1F2B6C"/>,
    title: "EMERGENCY",
    detail1: "+1 234 567 890",
    detail2: "+1 234 567 890",
  },
  {
    id: 2,
    icon:<FaLocationDot size={40} fill="#1F2B6C"/>,
    title: "LOCATION",
    detail1: "Mavala,Adilabad ",
    detail2: "India",
  },
  {
    id: 3,
    icon: <MdOutlineEmail size={40} fill="#1F2B6C" />,
  title: "EMAIL",
    detail1: "info@ashishcare.com",
    detail2: "info@ashishcare.com",
  },
  {
    id: 4,
    icon:<IoMdTime size={40} fill="#1F2B6C"/>,
    title: "WORKING HOURS",
    detail1: "Mon-Sat 09:00-20:00",
    detail2: "Sunday Emergency only",
  },
]

function ContactCard() {
  return (
   
    <div className="Contact-section-container">
       <div>
          <p className="Our-services-section-para">Get in Touch </p>
          <h1 className="Our-services-section-header">Contact</h1>
        </div>

      <div className="Contact-section-container2"> 
         {ContcardList.map((item) => (
          <div key={item.id} className="Contact-card-container">
            <div className="Contact-section-card-img-container">
               {item.icon  }
            </div>
            <div className="Contact--card-text-container">
              <h1 >{item.title}</h1>
              <p >{item.detail1}</p>
              <p >{item.detail2}</p>
            </div>
          </div>
        ))}
      </div>
   
    </div>
  )

  
}

export default ContactCard;