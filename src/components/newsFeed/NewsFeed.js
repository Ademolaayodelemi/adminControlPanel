import "./newsFeed.scss";
import Avatar from '@mui/material/Avatar';




const NewsFeed = ({title}) => {
  return (
    <div className='newsFeed'>
      <h4 className="headerTitle">{title}</h4>
      <div className="newsFeedContent">
        <div className="topContent fade">Lorem ipsum dolor sit amet, consectetur 
        adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore 
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </div>
        <div className="bottomContent">
          <div className="left">
            <span>TYRION LANNISTER</span>
            <span>Founder-Ceo. Dell Corp</span>
          </div>
          <div className="right"><Avatar className="avatarImg" src="/broken-image.jpg" /></div>
        </div>
      </div>
    </div>
  )
}

export default NewsFeed
