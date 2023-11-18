import "./socialStat.scss";


const SocialStat = ({twitterData}) => {

  return (
    <div className='socialStat'>
      <h4 className="socialTitle">{twitterData.title}</h4>
      <ul className='socialTop'>
        <li className='socialItem border'>
          <span>{twitterData.row1Column1}</span>
          <span>{twitterData.row1Column1Subtitle}</span>
        </li>
        <li className='socialItem border'>
          <span>{twitterData.row1Column2}</span>
          <span>{twitterData.row1Column2Subtitle}</span>
        </li>
        <li className='socialItem'>
          <span>{twitterData.row1Column3}</span>
          <span>{twitterData.row1Column3Subtitle}</span>
        </li>
        {/* <li className='socialItem border'>
          <span>2555</span>
          <span>New Followers</span>
        </li>
        <li className='socialItem'>
          <span>4712</span>
          <span>New Tweets</span>
        </li> */}
      </ul>
      <ul className='socialBottom'>
        <li className='socialItem border'>
          <span>{twitterData.row2Column4}</span>
          <span>{twitterData.row2Column4Subtitle}</span>
        </li>
        <li className='socialItem border'>
          <span>{twitterData.row2Column5}</span>
          <span>{twitterData.row2Column5Subtitle}</span>
        </li>
        <li className='socialItem'>
          <span>{twitterData.row2Column6}</span>
          <span>{twitterData.row2Column6Subtitle}</span>
        </li>
        {/* <li className='socialItem border'>
          <span>3652</span>
          <span>Followers</span>
        </li>
        <li className='socialItem border'>
          <span>9874</span>
          <span>Followers</span>
        </li>
       
        <li className='socialItem'>
          <span>1254</span>
          <span>Followers</span>
        </li> */}
       
      </ul>
      
    </div>
  )
}

export default SocialStat
