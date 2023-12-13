import "./home.scss";
import Bar from "../../components/bar/Bar";
import AreaChart from "../../components/areaChart/AreaChart";
import LineChart from "../../components/lineChart/LineChart";
import Widget from "../../components/widget/Widget";
import SocialStat from "../../components/socialStat/SocialStat";
import PieChart from "../../components/socialPieChart/SocialPieChart";
import SocialPieChart from "../../components/socialPieChart/SocialPieChart";
import SocialCard from "../../components/socialCard/SocialCard";
import InfoBarChart from "../../components/infoBarChart/InfoBarChart";
import SourceAnalysis from "../../components/sourceAnalysis/SourceAnalysis";
import ActivityChart from "../../components/activityChart/ActivityChart";
import NewsFeed from "../../components/newsFeed/NewsFeed";
import TodoCard from "../../components/todoCard/TodoCard";
import TimelineCard from "../../components/timelineCard/TimelineCard";
import ProfileCalender from "../../components/profileCalender/ProfileCalender";
import EnrolmentAnalytics from "../../components/enrolmentAnalytics/EnrolmentAnalytics";
import RegistrationOverview from "../../components/registrationOverview/registrationOverview";
import { 
  twitterData, 
  facebookData, 
  linkedinData, 
  youtubeData 
} from "../../socialData"
import NewApplicantsTable from "../../components/newApplicantsTable/NewApplicantsTable";
import SocialPlatformTable from "../../components/socialPlatformTable/SocialPlatformTable";
import SocialDeviceTable from "../../components/SocialDeviceTable/SocialDeviceTable";


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
          <SocialPlatformTable />       
          <SocialDeviceTable />       
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
        <ProfileCalender/>
      </div>
      <div className="analyticsWrapper">
        <EnrolmentAnalytics title='Enrolment Analysis'/>
        <RegistrationOverview title='Registration Overview'/>
      </div>
      <div className="newApplicantsWrapper">
        <NewApplicantsTable />
      </div>
      
    </div>
  )
}

export default Home
