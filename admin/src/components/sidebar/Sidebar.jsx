import "./sidebar.css"
import {
    Home,
    Timeline,
    AttachMoney,
    Person,
    Storefront,
    Receipt,
    BarChart,
    MailOutline,
    DynamicFeed,
    Report,
    HelpOutline
  } from "@material-ui/icons";
import { Link } from "react-router-dom";
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                    <Link to="/" className="link">
                        <li className="sidebarListItem active">
                        <Home className="sidebarIcon" />
                        Home
                        </li>
                    </Link>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon"/>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <AttachMoney className="sidebarIcon"/>
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notification</h3>
                    <ul className="sidebarList">
                        <Link to="/users" className="link">
                        <li className="sidebarListItem">
                            <Person className="sidebarIcon"/>
                            User
                        </li>
                        </Link>
                        <Link to ="/products" className="link">
                        <li className="sidebarListItem">
                            <Storefront className="sidebarIcon"/>
                            Product
                        </li>
                        </Link>
                        <li className="sidebarListItem">
                            <Receipt className="sidebarIcon"/>
                            Transactions
                        </li>
                        <li className="sidebarListItem">
                            <BarChart className="sidebarIcon"/>
                            Report
                        </li>
                    </ul> 
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                        <MailOutline className="sidebarIcon" />
                        Mail
                        </li>
                        <li className="sidebarListItem">
                        <DynamicFeed className="sidebarIcon" />
                        Feedback
                        </li>  
                    </ul>
                </div>
                <div className="sidebarMenu">
          <h3 className="sidebarTitle">Other</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
            <li className="sidebarListItem">
              <HelpOutline className="sidebarIcon" />
              Info
            </li>
          </ul>
        </div>    

            </div>
        </div>
    )
}

export default Sidebar
