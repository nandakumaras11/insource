import Image from "next/image";
import "./home.css";
import { FaFacebookSquare, FaInstagram, FaWhatsapp, FaWhatsappSquare } from "react-icons/fa";
export default function Home() {
  return <>
    <div className="homeBg">
      <div className="menuContainer">
      <div className="menuBar">
        <div className="menuItem">
          <div className="menuIcon"></div>
          <div className="menuText">Home</div>
          <div className="activeMenu"></div>
        </div>
        <div className="menuItem">
          <div className="menuIcon"></div>
          <div className="menuText">About Us</div>
        </div>
        <div className="menuItem">
          <div className="menuIcon"></div>
          <div className="menuText">Products</div>
        </div>
        <div className="menuItem">
          <div className="menuIcon"></div>
          <div className="menuText">Services</div>
        </div>
        <div className="menuItem">
          <div className="menuIcon"></div>
          <div className="menuText">Contact Us</div>
        </div>
      </div>
      <div className="socialMediaMenu">
        <div className="facebook">
          <FaFacebookSquare />
        </div>
        <div className="instagram">
          <FaInstagram />
        </div>
        <div className="whatsApp">
          <FaWhatsapp />
        </div>
      </div>
      </div>
    </div>
  </>;
}
