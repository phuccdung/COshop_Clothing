import React from 'react'
import "./topbar.css"
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                   <span className="logo">Admin</span> 
                </div>
                
                <div className="topRight">
                    <div className="topbarIcon">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIcon">
                        <Language />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIcon">
                        <Settings />
                    </div>
                    <img src="https://images.pexels.com/photos/4407877/pexels-photo-4407877.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="topAvatar" />
                </div>
                
            </div>
        </div>
    )
}

export default Topbar
