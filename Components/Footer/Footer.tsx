import { FaEnvelope, FaLocationArrow, FaPhoneAlt } from "react-icons/fa"
import "./Footer.css"
const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="col">
        <div className="footerCompanyName"><b>Insource</b> Global</div>
        <div className="footerCompanyDescription">"Efficient logistics solutions for seamless transportation, warehousing, and distribution, ensuring reliable and timely delivery of goods worldwide."
        </div>
        <div className="contactInfo">
          <div className="contactIcon"><FaLocationArrow /></div>
          <div className="contactInfo">{process.env.REACT_APP_ADDRESS}</div>
        </div>
        <div className="contactInfo">
          <div className="contactIcon"><FaEnvelope /></div>
          <div className="contactInfo">{process.env.REACT_APP_EMAIL}</div>
        </div>
        <div className="contactInfo">
          <div className="contactIcon"><FaPhoneAlt /></div>
          <div className="contactInfo">{process.env.REACT_APP_MOBILE}</div>
        </div>
      </div>
    </div>
  )
}

export default Footer