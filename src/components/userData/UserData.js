import "./userData.scss";
import { Avatar } from "@mui/material";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';



const UserData = ({ title, profileData }) => {
  const [data, setData] = useState(profileData);
  return (
    <div className='userData'>
      <h4 className="headerTitle">{title}</h4>
      <div className='userDataContainer'>
        <div className="profileImgContainer">
          <Avatar 
            src="/broken-image.jpg"  
            variant="square"
            sx={{ width: 170, height: 150, }}
          />
        </div>
        <div className="userDataItems">
            {/* <div className="dataItemHead">
              <div className="dataItemSubHead">Details</div>
              <div className="dataItemLine"></div>
            </div> */}
            {/* <div className="studentFullName">Olanrewaju Ademola</div> */}
            <ul className="dataItems">
            { data.map( profile => ( <li key={profile.id} className="dataItem">
              <span className="dataItemTitle">{profile.title}</span>
              <span className="dataItemValue">{profile.value}</span>
            </li> ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default UserData
