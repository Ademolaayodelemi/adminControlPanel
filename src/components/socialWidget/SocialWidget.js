import { Facebook, FacebookOutlined, FacebookSharp, LinkedIn, Twitter, YouTube } from '@mui/icons-material';
import './socialWidget.scss';

let data;
let myColor;
const SocialWidget = ({type}) => {

  switch(type) {
    case 'Facebook':
      data = {
        icon: 'f',
        value: 8268,
        subtitle: 'Likes',
      }
      myColor = "#3b5998"
      break;
      case 'Youtube':
        data = {
          icon: <YouTube className='icon'/>,
          value: 12545,
        subtitle: 'Subscribes',
        color: "#",
      }
      myColor = "#CD2021"
      break;
    case 'Twitter':
      data = {
        icon: <Twitter className='icon' />,
        value: 7982,
        subtitle: 'Tweets',
        color: "#",
      }
      myColor = "#1DA1FB"
      break;
    case 'Linked in':
      data = {
        icon: <LinkedIn className='icon' />,
        value: 9658,
        subtitle: 'Followers',
        color: "#",
      }
      myColor = "#E74C3D"
      break;
      
    default:
      return null;
  }

  

  return (
    <div className='socialWidget'>
      <div className="socialWidgetLeft" style={{backgroundColor:myColor}}>{data.icon}</div>
      <div className="socialWidgetRight">
        <div className="top">{data.value}</div>
        <div className="bottom">{data.subtitle}</div>
      </div>

    </div>
  )
}

export default SocialWidget
