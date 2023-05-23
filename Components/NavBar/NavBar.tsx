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
                        <FaRegClock />
                    </div>
                    <div className="text">
                        <div className="textLine">Mon-Sat 9AM to 6PM</div>
                        <div className="textLine">Sunday Closed</div>
                    </div>
                </div>
                <div className="navBarRightItem">
                    <div className="icon">
                        <GrMail />
                    </div>
                    <div className="text">
                        <div className="textLine">Email</div>
                        <div className="textLine">contact@global.com</div>
                    </div>
                </div>
                <div className="navBarRightItem">
                    <div className="icon">
                        <FaPhoneVolume />
                    </div>
                    <div className="text">
                        <div className="textLine"> Call Us</div>
                        <div className="textLine">(+91)8554654654654</div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

import React from 'react'
interface SingleMenuItemTypes {
    icon?: string,
    menuText: string,
    link?: string
}
export const SingleMenuItem = ({ icon, menuText, link }: SingleMenuItemTypes) => {
    return (
        <div className="menuItem">
            <div className="menuIcon">{icon}</div>
            <div className="menuText">{menuText}
                <div className="activeMenu">
                   <span>{menuText}</span> 
                </div>
            </div>

        </div>
    )
}
