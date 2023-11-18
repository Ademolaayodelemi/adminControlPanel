import Bar from "../../components/bar/Bar";
import AreaChart from "../../components/areaChart/AreaChart";
import LineChart from "../../components/lineChart/LineChart";
import Widget from "../../components/widget/Widget";
import "./home.scss";
import SocialStat from "../../components/socialStat/SocialStat";
import SocialTable from "../../components/socialTable/SocialTable";
import { socialTablePlatformData, socialTableDeviceData } from "../../tableData";
import PieChart from "../../components/socialPieChart/SocialPieChart";
import SocialPieChart from "../../components/socialPieChart/SocialPieChart";
import SocialCard from "../../components/socialCard/SocialCard";
import { 
  twitterData, 
  facebookData, 
  linkedinData, 
  youtubeData 
} from "../../socialData"
import InfoBarChart from "../../components/infoBarChart/InfoBarChart";
import SourceAnalysis from "../../components/sourceAnalysis/SourceAnalysis";
import ActivityChart from "../../components/activityChart/ActivityChart";
import NewsFeed from "../../components/newsFeed/NewsFeed";
import TodoCard from "../../components/todoCard/TodoCard";
import TimelineCard from "../../components/timelineCard/TimelineCard";


const Home = () => {
  return (
    <div className='home'>

      <Bar/>
      <div className="widgetWrapper">
        <Widget type="dailyVisit"/>
        <Widget type="bounceRate"/>
        <Widget type="growthRate"/>
        <Widget type="pageViews"/>
      </div>
      <div className="chartWrapper">
        <LineChart/>
        <AreaChart/>
      </div>
      <div className="socialStatWrapper">
        <SocialStat twitterData={twitterData} />
        <SocialStat twitterData={facebookData} />
        <SocialStat twitterData={linkedinData} />
        <SocialStat twitterData={youtubeData} />
      </div>
      <div className="socialTableWrapper">
        <SocialTable tableData={socialTablePlatformData}/>       
        <SocialTable tableData={socialTableDeviceData}/>       
      </div>
      <div className="socialCompilation">
        <SocialPieChart/>
        <div className="socialCardWrapper">
        <SocialCard type="visit"/>
        <SocialCard type="view"/>
        </div>
      </div>
      <div className="barChartWrapper">
        <InfoBarChart/>
      </div>
      <div className="informationWrapper">
        <SourceAnalysis/>
        <ActivityChart title='Activity Chart'/>
        <NewsFeed title='News Feed'/>
      </div>
      <div className="todoTimelineprofileWrapper">
        <TodoCard title='Todo'/>
        <TimelineCard title='Timeline'/>
        <TodoCard title='Todo'/>
      </div>
      
    </div>
  )
}

export default Home
