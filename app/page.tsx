import Image from "next/image";
import "./home.css";
export default function Home() {
  return <>
  <div className="homeBg">
    <div className="menuBar">
      <div className="menuItem">
        <div className="menuIcon"></div>
        <div className="menuText">Home</div>
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
  </div>
  </>;
}
