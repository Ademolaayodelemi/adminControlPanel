import "./bar.scss";

const Bar = () => {
  return (
    <div className='bar'>
        <div className="left">
        <span className="title">Hello,</span> 
        <span className="title"> Super Admin.</span>

        </div>
        <div className="right">
          <span className="breadcrumbTitle">Dashboard</span>
          <span className="breadcrumbLine">/</span>
          <span className="breadcrumb">Home</span>
        </div>
    </div>
  )
}

export default Bar
