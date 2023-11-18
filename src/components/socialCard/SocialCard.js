import { AccountBalanceWalletOutlined, ArrowDownward, ArrowUpward, EmojiEventsOutlined, HighlightOffOutlined, ListOutlined, SettingsOutlined, SyncOutlined, TrendingUpOutlined, UpgradeOutlined } from "@mui/icons-material";
import "./socialCard.scss";
import CircularProgress from '@mui/material/CircularProgress';

let data;
const SocialCard = ({type}) => {

  switch (type) {
    case 'visit':
      data = {
        title: 'Total Visit',
        totalFigure: '6,45,840',
        iconName: <EmojiEventsOutlined className="icon"/>,
        leftFigure: '3,25,840',
        rightFigure: '1,65,210',
        subTitleLeft: 'Average Visit',
        subTitleRight: 'Unique Visit',
        progressValue: 68
      };
      break;
      case 'view':
        data = {
          title: 'Page Views',
          totalFigure: '9,47,570',
          iconName: <AccountBalanceWalletOutlined className="icon"/>,
          leftFigure: '4,25,845',
          rightFigure: '2,25,834',
          subTitleLeft: 'Average Views',
          subTitleRight: 'Today Views',
          progressValue: 88
      };
      break;
    default:
      return null;
      }
 

  return (
    <div className='socialCard'>
      <div className="cardTop">
        <SyncOutlined/>
        <span className="title">{data.title}</span>
        <SettingsOutlined/>
        <ul class="cardDropdown" style={{display: 'none'}}>
          <li class="cardListItem">
            <UpgradeOutlined className="cardDropIcon"/>
            Update data
          </li>
          <li class="cardListItem">
            <ListOutlined className="cardDropIcon"/>
            Detail log
          </li>
          <li class="cardListItem">
            <TrendingUpOutlined className="cardDropIcon"/>
            Statistics
          </li>
          <li class="cardListItem">
            <HighlightOffOutlined className="cardDropIcon"/>
            Clear list
          </li>
        </ul>
      </div>
      <div className="cardMiddle">
        <div className="upperFigure">{data.totalFigure}</div>
        <div className="cardCircle">
          {/* <div className='progress'>circlelar</div> */}
          <CircularProgress 
          sx={{
            color: '#1de9b6'
          }}
          variant="determinate" 
          value={data.progressValue} 
          size={100} 
          className="progress"
          thickness={4}
          >
          </CircularProgress>
          {/* <EmojiEventsOutlined className="icon"/> */}
          {data.iconName}
        </div>
      </div>
      <div className="cardBottom">
        <div className="bottomLeft">
          <div className="iconContainer">
            <ArrowUpward className="cardIcon"/>
            <ArrowDownward className="cardIcon"/>
          </div>
          <span className="figure">{data.leftFigure}</span>
          <span className="subTitle">{data.subTitleLeft}</span>
        </div>
        <div className="bottomRight">
          <div className="iconContainer">
            <ArrowUpward className="cardIcon"/>
            <ArrowDownward className="cardIcon"/>
          </div>
          <span className="figure">{data.rightFigure}</span>
          <span className="subTitle">{data.subTitleRight}</span>
        </div>
      </div>
    </div>
  )
}

export default SocialCard
