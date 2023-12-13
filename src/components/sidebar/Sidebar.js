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

  const [isOpen, setIsopen] = useState({
    menuOne: false,
  });

  const toggleDropdown = (name) => {
     setIsopen(prev => {
      return {...prev, [name]: !isOpen.menuOne} 
    });
    // console.log('tested ok')
  }


  return (
    // NOTE(as important) the id="accordion", data-bs-toggle="collapse", className='collapse', data-bs-parent="#accordion" etc.
    // are all from bootstrap 5. which can be found in: https://www.w3schools.com/bootstrap5/bootstrap_collapse.php 
    // The Bootstrap 5 CDN has been added to the head section of the index.html file inside the public folder.
    // The href="#Dash", id="Dash", etc serve as link and unique identify to the targeted dropdown.
    <div className='sidebar'>
      <div className="sidebarWrapper" >
        <ul className="list" id="accordion">
          <h3 className="title">Main</h3>
          <li className="listItem">
            <NavLink to='/' >
              <div className="listItemMenu" data-bs-toggle="collapse" href="#dash">
                <div className="leftContent">
                  <HomeOutlined className="icon"/>
                  <span>Dashboard</span>
                </div>
                <div className="rightContent">
                  <span className="itemBadge">6</span>
                  <KeyboardArrowDown className="arrowDownIcon" />
                </div>
              </div>
            </NavLink>
            {/* {isOpen.menuOne &&  */}
            {/* <ul className={ isOpen.menuOne ? 'dropdownList tester' : 'dropdownList' }> */}
            <ul className='dropdownList collapse' data-bs-parent="#accordion" id="dash">
              <NavLink to='111'><li className="dropdownListItem">Dashboard 1</li></NavLink>
              <NavLink to='222'><li className="dropdownListItem">Dashboard 2</li></NavLink>
              <NavLink to='333'><li className="dropdownListItem">Dashboard 3</li></NavLink>
              <NavLink to='444'><li className="dropdownListItem">Dashboard 4</li></NavLink>
              <NavLink to='555'><li className="dropdownListItem">Dashboard 5</li></NavLink>
            </ul>
            {/* } */}
          </li>
          <h3 className="title">School</h3>
          <li className="listItem">
            <NavLink to='/management'>
              <div className="listItemMenu" data-bs-toggle="collapse" data-bs-parent="#accordion" href="#manag">
                <div className="leftContent">
                  <NoteAltOutlined className="icon"/>
                  <span>Management</span>
                </div>
                <div className="rightContent">
                  <span className="itemBadge">28</span>
                  <KeyboardArrowDown className="arrowDownIcon"/>
                </div>
              </div>
            </NavLink>
            <ul className="dropdownList collapse" id="manag" data-bs-parent="#accordion">
              <NavLink to='11'><li className="dropdownListItem">Student</li></NavLink>
              <NavLink to='22'><li className="dropdownListItem">Student Profile</li></NavLink>
              <NavLink to='33'><li className="dropdownListItem">Student Detail</li></NavLink>
              <NavLink to='44'><li className="dropdownListItem">Hostel</li></NavLink>
              <NavLink to='55'><li className="dropdownListItem">Students Table</li></NavLink>
              <NavLink to='66'><li className="dropdownListItem">search</li></NavLink>
              <NavLink to='77'><li className="dropdownListItem">Teacher Info</li></NavLink>
              <NavLink to='88'><li className="dropdownListItem">Teacher Details</li></NavLink>
              <NavLink to='10'><li className="dropdownListItem">Class Info</li></NavLink>
              <NavLink to='11'><li className="dropdownListItem">Subject</li></NavLink>
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
            <NavLink to='yy'>
              <div className="listItemMenu" data-bs-toggle="collapse" href="#res">
                <div className="leftContent">
                  <RestaurantOutlined className="icon"/>
                  <span>Restaurant</span>
                </div>
                <div className="rightContent">
                  <span className="itemBadge">7</span>
                  <KeyboardArrowDown className="arrowDownIcon"/>
                </div>
              </div>
            </NavLink>
              <ul className="dropdownList collapse" data-bs-parent="#accordion" id="res">
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
            <div className="listItemMenu" data-bs-toggle="collapse" href="#char">
              <div className="leftContent">
                <BarChartOutlined className="icon"/>
                <span>Charts</span>
              </div>
              <div className="rightContent">
                {/* <span className="itemBadge">7</span> */}
                <KeyboardArrowDown className="arrowDownIcon"/>
              </div>
            </div>
              <ul className="dropdownList collapse" data-bs-parent="#accordion" id="char">
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
                <span>Calender</span>
              </div>
            </div>
          </li>
          <li className="listItem">
            <div className="listItemMenu">
              <div className="leftContent">
                <MailOutline className="icon"/>
                <span>Email</span>
              </div>
            </div>
          </li>
          <li className="listItem">
            <div className="listItemMenu">
              <div className="leftContent">
                <PermIdentityOutlined className="icon"/>
                <span>Profile</span>
              </div>
            </div>
          </li>
          <li className="listItem">
            <div className="listItemMenu">
              <div className="leftContent">
                <Widgets className="icon"/>
                <span>Widget</span>
              </div>
            </div>
          </li>
          <h3 className="title">Features</h3>
          <li className="listItem">
            <div className="listItemMenu" data-bs-toggle="collapse" href="#elem">
              <div className="leftContent">
                <ViewQuiltOutlined className="icon"/>
                <span>UI Elements</span>
              </div>
              <div className="rightContent">
                {/* <span className="itemBadge">7</span> */}
                <KeyboardArrowDown className="arrowDownIcon"/>
              </div>
            </div>
              <ul className="dropdownList collapse" data-bs-parent="#accordion" id="elem">
              <li className="dropdownListItem">Accordion</li>
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
            <div className="listItemMenu" data-bs-toggle="collapse" href="#comp">
              <div className="leftContent">
                <TuneOutlined className="icon"/>
                <span>Components</span>
              </div>
              <div className="rightContent">
                {/* <span className="itemBadge">7</span> */}
                <KeyboardArrowDown className="arrowDownIcon"/>
              </div>
            </div>
              <ul className="dropdownList collapse" data-bs-parent="#accordion" id="comp">
                <li className="dropdownListItem">Calendar</li>
                <li className="dropdownListItem">Carousel</li>
                <li className="dropdownListItem">Weather</li>
                <li className="dropdownListItem">Datamap</li>
                <li className="dropdownListItem">To do</li>
                <li className="dropdownListItem">Scrollable</li>
                <li className="dropdownListItem">Sweet Alert</li>
                <li className="dropdownListItem">Toastr</li>
                <li className="dropdownListItem">Range Slider</li>
                <li className="dropdownListItem">Adv. Range Slider</li>
                <li className="dropdownListItem">Nestable</li>
                <li className="dropdownListItem">Portlets</li>
                <li className="dropdownListItem">Bar Rating</li>
                <li className="dropdownListItem">Rate</li>
              </ul>
          </li>
          <li className="listItem">
            <div className="listItemMenu" data-bs-toggle="collapse" href="#tab">
              <div className="leftContent">
                <CalendarViewMonthOutlined className="icon"/>
                <span>Table</span>
              </div>
              <div className="rightContent">
                {/* <span className="itemBadge">7</span> */}
                <KeyboardArrowDown className="arrowDownIcon"/>
              </div>
            </div>
              <ul className="dropdownList collapse" data-bs-parent="#accordion" id="tab">
                <li className="dropdownListItem">Basic</li>
                <li className="dropdownListItem">Datatable</li>
                <li className="dropdownListItem">Datatable Export</li>
                <li className="dropdownListItem">Datatable Row Select</li>
                <li className="dropdownListItem">Editable </li>
              </ul>
          </li>
          <li className="listItem">
            <div className="listItemMenu" data-bs-toggle="collapse" href="#icon">
              <div className="leftContent">
                <FavoriteBorderOutlined className="icon"/>
                <span>Icons</span>
              </div>
              <div className="rightContent">
                {/* <span className="itemBadge">7</span> */}
                <KeyboardArrowDown className="arrowDownIcon"/>
              </div>
            </div>
              <ul className="dropdownList collapse" data-bs-parent="#accordion" id="icon">
                <li className="dropdownListItem">Themify</li>
              </ul>
          </li>
          <li className="listItem">
            <div className="listItemMenu" data-bs-toggle="collapse" href="#map">
              <div className="leftContent">
                <MapOutlined className="icon"/>
                <span>Maps</span>
              </div>
              <div className="rightContent">
                {/* <span className="itemBadge">7</span> */}
                <KeyboardArrowDown className="arrowDownIcon"/>
              </div>
            </div>
              <ul className="dropdownList collapse" data-bs-parent="#accordion" id="map">
                <li className="dropdownListItem">Basic</li>
                <li className="dropdownListItem">Vector Map</li>
              </ul>
          </li>
          <h3 className="title">Form</h3>
          <li className="listItem">
            <div className="listItemMenu">
              <div className="leftContent">
                <ListOutlined className="icon"/>
                <span>Basic Form</span>
              </div>
            </div>
          </li>
          <h3 className="title">Miscellaneous</h3>
          <li className="listItem">
            <div className="listItemMenu" data-bs-toggle="collapse" href="#invo">
              <div className="leftContent">
                <DescriptionOutlined className="icon"/>
                <span>Invoice</span>
              </div>
              <div className="rightContent">
                <KeyboardArrowDown className="arrowDownIcon"/>
              </div>
            </div>
              <ul className="dropdownList collapse" data-bs-parent="#accordion" id="invo">
                <li className="dropdownListItem">Basic</li>
                <li className="dropdownListItem">Editable</li>
              </ul>
          </li>
          <li className="listItem">
            <div className="listItemMenu" data-bs-toggle="collapse" href="#pag">
              <div className="leftContent">
                <LayersOutlined className="icon"/>
                <span>Pages</span>
              </div>
              <div className="rightContent">
                <KeyboardArrowDown className="arrowDownIcon"/>
              </div>
            </div>
              <ul className="dropdownList collapse" data-bs-parent="#accordion" id="pag">
                <li className="dropdownListItem">Login</li>
                <li className="dropdownListItem">Register</li>
                <li className="dropdownListItem">Forgot password</li>
              </ul>
          </li>
          <li className="listItem">
            <div className="listItemMenu">
              <div className="leftContent">
                <InsertDriveFileOutlined className="icon"/>
                <span>Documentation</span>
              </div>
            </div>
          </li>
          <li className="listItem">
            <div className="listItemMenu">
              <div className="leftContent">
                <LogoutOutlined className="icon"/>
                <span>Logout</span>
              </div>
            </div>
          </li>
          

        </ul>


      </div>

      
    </div>
  )
}

export default Sidebar


