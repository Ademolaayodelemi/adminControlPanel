import "./sourceAnalysis.scss";
const SourceAnalysis = () => {
  return (
    <div className='sourceAnalysis'>
      <h4 className="headerTitle">Facebook Source (Last 90 Days)</h4>
        <div className="barWrapper">
          <span className="labelTitle">Request</span>
          <div className="barBox">
            <div className="progressBar" style={{width: '30%'}}>30%</div>
          </div>
        </div>
        <div className="barWrapper">
          <span className="labelTitle">Page Profile</span>
          <div className="barBox">
            <div className="progressBar" style={{width: '40%'}}>40%</div>
          </div>
        </div>
        <div className="barWrapper">
          <span className="labelTitle">Post</span>
          <div className="barBox">
            <div className="progressBar" style={{width: '50%'}}>40%</div>
          </div>
        </div>
        <div className="barWrapper">
          <span className="labelTitle">Favorite</span>
          <div className="barBox">
            <div className="progressBar" style={{width: '60%'}}>60%</div>
          </div>
        </div>
        <div className="barWrapper">
          <span className="labelTitle">Like Story</span>
          <div className="barBox">
            <div className="progressBar" style={{width: '70%'}}>70%</div>
          </div>
        </div>
        <div className="barWrapper">
          <span className="labelTitle">Mobile</span>
          <div className="barBox">
            <div className="progressBar" style={{width: '90%'}}>90%</div>
          </div>
        </div>
    </div>
  )
}

export default SourceAnalysis
