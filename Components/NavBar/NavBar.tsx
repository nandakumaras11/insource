import "./NavBar.css"
import { GrMail } from "react-icons/gr";
import { FaRegClock, FaPhoneVolume } from "react-icons/fa";
export const NavBar = () => {
    return (
        <nav className="desktopNav">
            <div className="logo"><b>Insource</b> Global</div>
            <div className="navBarRight">
                <div className="navBarRightItem">
                    <div className="icon">
                        <FaRegClock/>
                    </div>
                    <div className="text">
                        <div className="line">Mon-Sat 9AM to 6PM</div>
                        <div className="line">Sunday Closed</div>
                    </div>
                </div>
                <div className="navBarRightItem">
                    <div className="icon">
                    <GrMail  />
                    </div>
                    <div className="text">
                        <div className="line">Email</div>
                        <div className="line">contact@global.com</div>
                    </div>
                </div>
                <div className="navBarRightItem">
                    <div className="icon">
                    <FaPhoneVolume />
                    </div>
                    <div className="text">
                        <div className="line"> Call Us</div>
                        <div className="line">(+91)8554654654654</div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

// export  NavBar