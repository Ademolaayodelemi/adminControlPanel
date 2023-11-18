import { Link, NavLink } from "react-router-dom"
import "./topbar.scss";
import { 
  AccountBalanceWalletOutlined,
  CalendarMonthOutlined,
  DarkMode,
  HelpOutline,
  KeyboardArrowDown,
  LockOutlined,
  LogoutOutlined,
  MailOutline,
  MailOutlineOutlined,
  Menu, 
  NotificationsNone, 
  PermIdentity, 
  Search,
  SettingsOutlined,
  TextSnippetOutlined, 
} from '@mui/icons-material';
import myImage from '../../images/avatar/1.jpg'


const Topbar = () => {
  return (
    <div className='topbar'>
      <div className="topbarWrapper">
        <div className="left">
          <NavLink to='/'><div>Admin-CP</div> </NavLink>
            
           
          <Menu/>
        </div>
        <div className="right">
          
          <div className="item">
            <DarkMode className="icon"/>
          </div>
          <div className="item">
            <Search className="icon"/>
          </div>
          <div className="item">
            <NotificationsNone className="icon"/>
            <div className="notificationContainer" style={{display: 'none'}}>
              <ul>
                <div className="noticationTop">Recent Notification</div>
                <li>
                  <div className="noticationContent">
                    <div className="notificationHeadWrapper">
                    <img class="avatar-img" src={myImage} alt="" />
                      <div className="notificationHead">
                        <span>Mr. Larry</span>
                        <small className="notificationTimestamp">03:55 PM</small>
                      </div>
                    </div>
                      <span className="notificationText">5 members joined today</span>
                  </div>
                </li>
                <li>
                  <div className="noticationContent">
                    <div className="notificationHeadWrapper">
                    <img class="avatar-img" src={myImage} alt="" />
                      <div className="notificationHead">
                        <span>Mr. Larry</span>
                        <small className="notificationTimestamp">03:55 PM</small>
                      </div>
                    </div>
                      <span className="notificationText">5 members joined today</span>
                  </div>
                </li>
                <li>
                  <div className="noticationContent">
                    <div className="notificationHeadWrapper">
                    <img class="avatar-img" src={myImage} alt="" />
                      <div className="notificationHead">
                        <span>Mr. Larry</span>
                        <small className="notificationTimestamp">03:55 PM</small>
                      </div>
                    </div>
                      <span className="notificationText">5 members joined today</span>
                  </div>
                </li>
                <li>
                  <div className="noticationContent">
                    <div className="notificationHeadWrapper">
                    <img class="avatar-img" src={myImage} alt="" />
                      <div className="notificationHead">
                        <span>Mr. Larry</span>
                        <small className="notificationTimestamp">03:55 PM</small>
                      </div>
                    </div>
                      <span className="notificationText">5 members joined today</span>
                  </div>
                </li>
                <div className="noticationBottom">See All</div>
              </ul>
            </div>
          </div>
          <div className="item">
            <MailOutline className="icon"/>
            <div className="mailContainer" style={{display: 'none'}}>
              <ul>
                <div className="mailTop">4 New Messages</div>
                <li>
                  <div className="noticationContent">
                    <div className="mailHeadWrapper">
                    <img class="avatar-img" src={myImage} alt="" />
                      <div className="mailHead">
                        <span>Mr. Larry</span>
                        <small className="mailTimestamp">03:55 PM</small>
                      </div>
                    </div>
                      <div className="mailText">This is to let you know that there will be a meetting</div>
                  </div>
                </li>
                <li>
                  <div className="noticationContent">
                    <div className="mailHeadWrapper">
                    <img class="avatar-img" src={myImage} alt="" />
                      <div className="mailHead">
                        <span>Mr. Larry</span>
                        <small className="mailTimestamp">03:55 PM</small>
                      </div>
                    </div>
                      <div className="mailText">This is to let you know that there will be a meetting</div>
                  </div>
                </li>
                <li>
                  <div className="noticationContent">
                    <div className="mailHeadWrapper">
                    <img class="avatar-img" src={myImage} alt="" />
                      <div className="mailHead">
                        <span>Mr. Larry</span>
                        <small className="mailTimestamp">03:55 PM</small>
                      </div>
                    </div>
                      <div className="mailText">This is to let you know that there will be a meetting</div>
                  </div>
                </li>
                <li>
                  <div className="noticationContent">
                    <div className="mailHeadWrapper">
                    <img class="avatar-img" src={myImage} alt="" />
                      <div className="mailHead">
                        <span>Mr. Larry</span>
                        <small className="mailTimestamp">03:55 PM</small>
                      </div>
                    </div>
                      <div className="mailText">This is to let you know that there will be a meetting</div>
                  </div>
                </li>
                <div className="noticationBottom">See All</div>
              </ul>
            </div>
          </div>
          
          <div className="item">
            <div className="profile">
              <img
                src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="avatar-img"
              />
              <span>Lanre</span>
              <KeyboardArrowDown className="icon"/>
            </div>
            <div className="profileDropdown" style={{display: 'none'}}>
                <ul>
                  <div className="dropdownTop">Account Settings</div>
                  <li><PermIdentity className="profileIcon"/><span>Profile</span></li>
                  <li><AccountBalanceWalletOutlined className="profileIcon"/><span>My Balance</span></li>
                  <li><TextSnippetOutlined className="profileIcon"/><span>My Task</span></li>
                  <li><CalendarMonthOutlined className="profileIcon"/><span>My Calender</span></li>
                  <li><MailOutlineOutlined className="profileIcon"/><span>Inbox</span></li>
                  <li><SettingsOutlined className="profileIcon"/><span>Setting</span></li>
                  <li><HelpOutline className="profileIcon"/><span>Help</span></li>
                  <li><LockOutlined className="profileIcon"/><span>Lock Screen</span></li>
                  <li><LogoutOutlined className="profileIcon"/><span>Logout</span></li>
                </ul>
              </div>
          </div>
            
          
        </div>
      </div>
    </div>
  )
}

export default Topbar
