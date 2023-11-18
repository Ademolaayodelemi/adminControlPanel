import { 
  CheckCircleOutlined,
  HighlightOffOutlined,
  SentimentSatisfiedAltOutlined, WbSunnyOutlined 
} from "@mui/icons-material";
import "./timelineCard.scss";

const TimelineCard = ({title}) => {
  return (
    <div className='timelineCard'>
      <h4 className="headerTitle">{title}</h4>
      <ul className="listItems">
        <li className="listItem">
          <div className="timelineBadge colorB">
          <SentimentSatisfiedAltOutlined className="timelineIcon"/>
          </div>
          <div className="itemContent">
            <h5>Youtube, a video-sharing website, goes live.</h5>
            <p>10 minutes ago</p>
          </div>
        </li>
        <li className="listItem">
          <div className="timelineBadge colorY">
          <WbSunnyOutlined className="timelineIcon"/>
          </div>
          <div className="itemContent">
            <h5>Mashable, a news website and blog, goes live..</h5>
            <p>20 minutes ago</p>
          </div>
        </li>
        <li className="listItem">
          <div className="timelineBadge colorR">
          <HighlightOffOutlined className="timelineIcon"/>
          </div>
          <div className="itemContent">
            <h5>Google acquires Youtube.</h5>
            <p>30 minutes ago</p>
          </div>
        </li>
        <li className="listItem">
          <div className="timelineBadge colorG">
          <CheckCircleOutlined className="timelineIcon"/>
          </div>
          <div className="itemContent">
            <h5>StumbleUpon is acquired by eBay.</h5>
            <p>15 minutes ago</p>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default TimelineCard
