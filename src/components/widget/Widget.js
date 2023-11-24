import { 
  ArrowDownwardOutlined,
  ArrowUpwardOutlined, 
  HighlightOffOutlined, 
  ListOutlined, 
  MoreVertOutlined, 
  TrendingUpOutlined,
  UpgradeOutlined
} from "@mui/icons-material";
import "./widget.scss";

const Widget = ({type}) => {

  let data;

  // temporary data
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "dailyVisit":
      data = {
        title: 'Daily Visit',
        figure: '15,2158.35',
        arrow: 'rise',
        icon: <ArrowUpwardOutlined
          // style={{
          //   color: 'crimson',
          //   backgroundColor: "rgba(255, 0, 0, 0.2)"
          // }}
        />,
        percentage: '80%',
        barColor: 'rise'
      }
      break;
    case "bounceRate":
      data = {
        title: 'Bounce Rate',
        figure: '10,3572.512',
        arrow: 'fall',
        icon: <ArrowDownwardOutlined 
          // style={{
          //   color: 'crimson',
          //   backgroundColor: "rgba(255, 0, 0, 0.2)"
          // }}
        />,
        percentage: '50%',
        barColor: 'fall'
      }
      break;
    case "growthRate":
      data = {
        title: 'Growth Rate',
        figure: '12,1850.014',
        arrow: 'rise',
        icon: <ArrowUpwardOutlined
          // style={{
          //   color: 'crimson',
          //   backgroundColor: "rgba(255, 0, 0, 0.2)"
          // }}
        />,
        percentage: '60%',
        barColor: 'ok'
      }
      break;
    case "pageViews":
      data = {
        title: 'Page Views',
        figure: '14,2158.35',
        arrow: 'rise',
        icon: <ArrowUpwardOutlined 
          // style={{
          //   color: 'crimson',
          //   backgroundColor: "rgba(255, 0, 0, 0.2)"
          // }}
        />,
        percentage: '70%',
        barColor: 'rise'
      }
      break;
      default:
        // return null;

      
  }
  return (
    <div className='widget'>
      <div className="top">
        <span className="title">{data.title}</span>
        <MoreVertOutlined/>
        <ul class="widgetDropdown" style={{display: 'none'}}>
          <li class="widgetListItem">
            <UpgradeOutlined className="widgetDropIcon"/>
            Update data
          </li>
          <li class="widgetListItem">
            <ListOutlined className="widgetDropIcon"/>
            Detail log
          </li>
          <li class="widgetListItem">
            <TrendingUpOutlined className="widgetDropIcon"/>
            Statistics
          </li>
          <li class="widgetListItem">
            <HighlightOffOutlined className="widgetDropIcon"/>
            Clear list
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="bottomUpper">
          <div className="figure">
          <div className={`icon ${data.arrow}`}>{data.icon}</div>
            {data.figure}
          </div>
            <span className="percentage">{data.percentage}%</span>
        </div>
        <div className="bottomLower">
          <div className={`progressBar ${data. barColor}`} style={{width: data.percentage}}></div>
        </div>
      </div>


    </div>
  )
}

export default Widget
