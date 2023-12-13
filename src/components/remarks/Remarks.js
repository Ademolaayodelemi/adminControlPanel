import { useState } from "react";
import StatusButton from "../statusButton/StatusButton";
import "./remarks.scss";
import { Avatar } from "@mui/material";
import { lecturesRemarks } from "../../tableData";


const Remarks = ({ title }) => {
  const [remarks, setRemarks] = useState(lecturesRemarks)
  return (
    <div className='remarks'>
      <h4 className="headerTitle">{title}</h4>
        <ul className="remarkList">
         {remarks.map( remark => ( <li className="remarkItem">
            <div className="remarkAvater">
              <Avatar 
                  src="/broken-image.jpg"  
                  // variant="square"
                  sx={{ width: 50, height: 50, }}
              />
            </div>
            <div className="remarkContent">
              <h4 className="remarkHead">{remark.remarkHead}</h4>
              <p className="remarkText">{remark.remarkText}</p>
              <div className="remarkBottom">
                <StatusButton type={remark.remarkStatus}/>
                <span className="remarkTimeStamp">{remark.remarkTimeStamp}</span>
              </div>
            </div>
          </li>))}
        </ul>
    </div>
  )
}

export default Remarks
