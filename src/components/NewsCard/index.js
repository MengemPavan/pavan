import { BiLike } from "react-icons/bi"
import { LuEye } from "react-icons/lu";
import NewsImg from "../../assets/NewsImg.png";
import "./index.css"


function NewsCard() {
  return (
    <div className="News-card">
            <div className="News-card-img-container">
              <img src={NewsImg} alt="Rectangle20" />
            </div>
            <div className="News-card-content">
              <p>Monday 05, September 2021 | By Author </p>
        <h1>This Article’s Title goes Here, but not too long. </h1>
           <div className="News-card-actions">
          <div className="News-card-action">
            <LuEye color="#159EEC" className="News-card-icon" />
            <p>  454 </p>
          </div>
          <div className="News-card-action">
            <BiLike fill="red" className="News-card-icon" />
            <p> 454 </p>
            </div>
           </div>
            </div>
           </div>
  )
}

export default NewsCard