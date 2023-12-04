import "./statusButton.scss";

const StatusButton = ({type}) => {
  return (
    <div>
      <button className={ `statusButton ${type}` }>{type}</button>
    </div>
  )
}

export default StatusButton
