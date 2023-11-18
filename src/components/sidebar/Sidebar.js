import { NavLink } from "react-router-dom";
import { useState } from "react";
import { 
  BarChartOutlined,
  CalendarMonthOutlined,
  CalendarViewMonthOutlined,
  DescriptionOutlined,
  FavoriteBorderOutlined,
  HomeOutlined, 
  InsertDriveFileOutlined, 
  KeyboardArrowDown, 
  LayersOutlined, 
  ListOutlined, 
  LogoutOutlined, 
  MailOutline, 
  MapOutlined, 
  NoteAltOutlined,
  PermIdentityOutlined,
  RestaurantOutlined,
  TuneOutlined,
  ViewQuiltOutlined,
  Widgets, 
} from "@mui/icons-material";
import "./sidebar.scss";

const Sidebar = () => {

  const [isOpen, setIsopen] = useState(false);

  const toggleDropdown = () => {
    setIsopen(!isOpen);
    console.log('tested ok')
  }


  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="list">
          <h3 className="title">Main</h3>
          <li className="listItem">
            <div className="listItemMenu " >
              <div className="leftContent">
                <HomeOutlined className="icon"/>
                <NavLink to='1' ><span>Dashboard</span></NavLink>
              </div>
              <div className="rightContent">
                <span className="itemBadge">6</span>
                <KeyboardArrowDown onClick={toggleDropdown} className="arrowDownIcon" />
              </div>
            </div>
            {isOpen && <ul className="dropdownList">
              <li className="dropdownListItem" >Dashboard 1</li>
              <li className="dropdownListItem">Dashboard 2</li>
              <li className="dropdownListItem">Dashboard 3</li>
              <li className="dropdownListItem">Dashboard 5</li>
              <li className="dropdownListItem">Dashboard 6</li>
            </ul>}
          </li>
          <h3 className="title">School</h3>
          <li className="listItem">
            <div className="listItemMenu">
              <div className="leftContent">
                <NoteAltOutlined className="icon"/>
                <NavLink to='2'><span>Management</span></NavLink>
              </div>
              <div className="rightContent">
                <span className="itemBadge">28</span>
                <KeyboardArrowDown className="arrowDownIcon"/>
              </div>
            </div>
            <ul className="dropdownList" style={{display: 'none'}}>
              <NavLink to='11'><li className="dropdownListItem">Student</li></NavLink>
              <NavLink to='22'><li className="dropdownListItem">Student Profile</li></NavLink>
              <NavLink to='33'><li className="dropdownListItem">Student Detail</li></NavLink>
              <NavLink to='44'><li className="dropdownListItem">Hostel</li></NavLink>
              <NavLink to='55'><li className="dropdownListItem">Students Table</li></NavLink>
              <NavLink to='66'><li className="dropdownListItem">search</li></NavLink>
              <NavLink to='77'><li className="dropdownListItem">Teacher Info</li></NavLink>
              <NavLink to='88'><li className="dropdownListItem">Teacher Details</li></NavLink>
              <NavLink to='10'><li className="dropdownListItem">Class Info</li></NavLink>
              <li className="dropdownListItem"><NavLink to='11'>Subject</NavLink></li>
              <li className="dropdownListItem">Routine</li>
              <li className="dropdownListItem">Attendance</li>
              <li className="dropdownListItem">Exam Result</li>
              <li className="dropdownListItem">Exam Schedule</li>
              <li className="dropdownListItem">Setting</li>
              <li className="dropdownListItem">Collection Fees</li>
              <li className="dropdownListItem">Payment info</li>
              <li className="dropdownListItem">New Expense</li>
              <li className="dropdownListItem">Expense</li>
              <li className="dropdownListItem">Attendance</li>
              <li className="dropdownListItem">Book Info</li>
              <li className="dropdownListItem">Book List</li>
              <li className="dropdownListItem">Parents List</li>
              <li className="dropdownListItem">Parents</li>
              <li className="dropdownListItem">Form</li>
              <li className="dropdownListItem">Notice</li>
              <li className="dropdownListItem">Transport</li>
            </ul>
          </li>
          <h3 className="title">Restaurant</h3>
          <li className="listItem">
            <div className="listItemMenu">
              <div className="leftContent">
                <RestaurantOutlined className="icon"/>
                <NavLink to='3'><span>Restaurant</span></NavLink>
              </div>
              <div className="rightContent">
                <span className="itemBadge">7</span>
                <KeyboardArrowDown className="arrowDownIcon"/>
              </div>
            </div>
              <ul className="dropdownList" style={{display: 'none'}}>
                <li className="dropdownListItem">Menu One</li>
                <li className="dropdownListItem">Menu Two</li>
                <li className="dropdownListItem">Menu Three</li>
                <li className="dropdownListItem">favourite</li>
                <li className="dropdownListItem">Order List</li>
                <li className="dropdownListItem">Booking</li>
                <li className="dropdownListItem">Upload Menu</li>
              </ul>
          </li>
          <h3 className="title">Apps</h3>
          <li className="listItem">
            <div className="listItemMenu">
              <div className="leftContent">
                <BarChartOutlined className="icon"/>
                <NavLink to='3'><span>Charts</span></NavLink>
              </div>
              <div className="rightContent">
                {/* <span className="itemBadge">7</span> */}
                <KeyboardArrowDown className="arrowDownIcon"/>
              </div>
            </div>
              <ul className="dropdownList" style={{display: 'none'}}>
                <li className="dropdownListItem">Flot</li>
                <li className="dropdownListItem">Morris</li>
                <li className="dropdownListItem">ChartJs</li>
                <li className="dropdownListItem">Chartlist</li>
                <li className="dropdownListItem">Peity</li>
                <li className="dropdownListItem">Sparkle</li>
                <li className="dropdownListItem">Knob</li>
              </ul>
          </li>
          <li className="listItem">
            <div className="listItemMenu">
              <div className="leftContent">
                <CalendarMonthOutlined className="icon"/>
                <NavLink to='3'><span>Calender</span></NavLink>
              </div>
            </div>
          </li>
          <li className="listItem">
            <div className="listItemMenu">
              <div className="leftContent">
                <MailOutline className="icon"/>
                <NavLink to='3'><span>Email</span></NavLink>
              </div>
            </div>
          </li>
          <li className="listItem">
            <div className="listItemMenu">
              <div className="leftContent">
                <PermIdentityOutlined className="icon"/>
                <NavLink to='3'><span>Profile</span></NavLink>
              </div>
            </div>
          </li>
          <li className="listItem">
            <div className="listItemMenu">
              <div className="leftContent">
                <Widgets className="icon"/>
                <NavLink to='3'><span>Widget</span></NavLink>
              </div>
            </div>
          </li>
          <h3 className="title">Features</h3>
          <li className="listItem">
            <div className="listItemMenu">
              <div className="leftContent">
                <ViewQuiltOutlined className="icon"/>
                <NavLink to='3'><span>UI Elements</span></NavLink>
              </div>
              <div className="rightContent">
                {/* <span className="itemBadge">7</span> */}
                <KeyboardArrowDown className="arrowDownIcon"/>
              </div>
            </div>
              <ul className="dropdownList" style={{display: 'none'}}>
              <li><a href="ui-accordion.html">Accordion</a></li>
                <li className="dropdownListItem">Alerts</li>
                <li className="dropdownListItem">Badges</li>
                <li className="dropdownListItem">Button</li>
                <li className="dropdownListItem">Dropdown</li>
                <li className="dropdownListItem">Images</li>
                <li className="dropdownListItem">List Group</li>
                <li className="dropdownListItem">Panels</li>
                <li className="dropdownListItem">Progressbar</li>
                <li className="dropdownListItem">Tab</li>
                <li className="dropdownListItem">Wells</li>
              </ul>
          </li>
          <li className="listItem">
            <div className="listItemMenu">
              <div className="leftContent">
                <TuneOutlined className="icon"/>
                <NavLink to='3'><span>Components</span></NavLink>
              </div>
              <div className="rightContent">
                {/* <span className="itemBadge">7</span> */}
                <KeyboardArrowDown className="arrowDownIcon"/>
              </div>
            </div>
              <ul className="dropdownList" style={{display: 'none'}}>
                <li className="dropdownListItem">Calendar</li>
                <li className="dropdownListItem">Carousel</li>
                <li className="dropdownListItem">Weather</li>
                <li className="dropdownListItem">Datamap</li>
                <li className="dropdownListItem">To do</li>
                <li className="dropdownListItem">lScrollable</li>
                <li className="dropdownListItem">lSweet Alert</li>
                <li className="dropdownListItem">oastr</li>
                <li className="dropdownListItem">asic.htmlBasic Range Slider</li>
                <li className="dropdownListItem">dvance.htmlAdvance Range Slider</li>
                <li className="dropdownListItem">Nestable</li>
                <li className="dropdownListItem">Portlets</li>
                <li className="dropdownListItem">ing.htmlBar Rating</li>
                <li className="dropdownListItem">tmljRate</li>
              </ul>
          </li>
          <li className="listItem">
            <div className="listItemMenu">
              <div className="leftContent">
                <CalendarViewMonthOutlined className="icon"/>
                <NavLink to='3'><span>Table</span></NavLink>
              </div>
              <div className="rightContent">
                {/* <span className="itemBadge">7</span> */}
                <KeyboardArrowDown className="arrowDownIcon"/>
              </div>
            </div>
              <ul className="dropdownList" style={{display: 'none'}}>
                <li className="dropdownListItem">Basic</li>
                <li className="dropdownListItem">Datatable</li>
                <li className="dropdownListItem">Datatable Export</li>
                <li className="dropdownListItem">Datatable Row Select</li>
                <li className="dropdownListItem">Editable </li>
              </ul>
          </li>
          <li className="listItem">
            <div className="listItemMenu">
              <div className="leftContent">
                <FavoriteBorderOutlined className="icon"/>
                <NavLink to='3'><span>Icons</span></NavLink>
              </div>
              <div className="rightContent">
                {/* <span className="itemBadge">7</span> */}
                <KeyboardArrowDown className="arrowDownIcon"/>
              </div>
            </div>
              <ul className="dropdownList" style={{display: 'none'}}>
                <li className="dropdownListItem">Themify</li>
              </ul>
          </li>
          <li className="listItem">
            <div className="listItemMenu">
              <div className="leftContent">
                <MapOutlined className="icon"/>
                <NavLink to='3'><span>Maps</span></NavLink>
              </div>
              <div className="rightContent">
                {/* <span className="itemBadge">7</span> */}
                <KeyboardArrowDown className="arrowDownIcon"/>
              </div>
            </div>
              <ul className="dropdownList" style={{display: 'none'}}>
                <li>Basic</li>
                <li>Vector Map</li>
              </ul>
          </li>
          <h3 className="title">Form</h3>
          <li className="listItem">
            <div className="listItemMenu">
              <div className="leftContent">
                <ListOutlined className="icon"/>
                <NavLink to='3'><span>Basic Form</span></NavLink>
              </div>
            </div>
          </li>
          <h3 className="title">Miscellaneous</h3>
          <li className="listItem">
            <div className="listItemMenu">
              <div className="leftContent">
                <DescriptionOutlined className="icon"/>
                <NavLink to='3'><span>Invoice</span></NavLink>
              </div>
              <div className="rightContent">
                <KeyboardArrowDown className="arrowDownIcon"/>
              </div>
            </div>
              <ul className="dropdownList" style={{display: 'none'}}>
                <li className="dropdownListItem">Basic</li>
                <li className="dropdownListItem">Editable</li>
              </ul>
          </li>
          <li className="listItem">
            <div className="listItemMenu">
              <div className="leftContent">
                <LayersOutlined className="icon"/>
                <NavLink to='3'><span>Pages</span></NavLink>
              </div>
              <div className="rightContent">
                <KeyboardArrowDown className="arrowDownIcon"/>
              </div>
            </div>
              <ul className="dropdownList" style={{display: 'none'}}>
                <li className="dropdownListItem">Login</li>
                <li className="dropdownListItem">Register</li>
                <li className="dropdownListItem">Forgot password</li>
              </ul>
          </li>
          <li className="listItem">
            <div className="listItemMenu">
              <div className="leftContent">
                <InsertDriveFileOutlined className="icon"/>
                <NavLink to='3'><span>Documentation</span></NavLink>
              </div>
            </div>
          </li>
          <li className="listItem">
            <div className="listItemMenu">
              <div className="leftContent">
                <LogoutOutlined className="icon"/>
                <NavLink to='3'><span>Logout</span></NavLink>
              </div>
            </div>
          </li>
          

        </ul>


      </div>

      
    </div>
  )
}

export default Sidebar


