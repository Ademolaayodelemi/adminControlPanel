import "./studentWidgets.scss";
import { CallToActionOutlined } from "@mui/icons-material";


const StudentWidgets = () => {
  return (
    <div className="studentWidgets">
        <div className="studentWidgetItem">
          <div className="studentWidgetItemLeft">
            <CallToActionOutlined className="studentWidgetIcon"/>
            <span>Upcommig Exam</span>
          </div>
          <span className="widgetDivider">|</span>
          <div className="studentWidgetItemRight">
          <span>3000</span>
          </div>
        </div>
        <div className="studentWidgetItem">
          <div className="studentWidgetItemLeft">
            <CallToActionOutlined className="studentWidgetIcon"/>
            <span>Due Fees</span>
          </div>
          <span className="widgetDivider">|</span>
          <div className="studentWidgetItemRight">
          <span>3000</span>
          </div>
        </div>
        <div className="studentWidgetItem">
          <div className="studentWidgetItemLeft">
            <CallToActionOutlined className="studentWidgetIcon"/>
            <span>Due Coursework</span>
          </div>
          <span className="widgetDivider">|</span>
          <div className="studentWidgetItemRight">
          <span>3000</span>
          </div>
        </div>
        <div className="studentWidgetItem">
          <div className="studentWidgetItemLeft">
            <CallToActionOutlined className="studentWidgetIcon"/>
            <span>Attendance</span>
          </div>
          <span className="widgetDivider">|</span>
          <div className="studentWidgetItemRight">
          <span>65%</span>
          </div>
        </div>
      </div>
  )
}

export default StudentWidgets
