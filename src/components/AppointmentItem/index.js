import './index.css'

const AppointmentItem = Props => {
  const {AppointmentItemDetails} = Props
  const {title, date} = AppointmentItemDetails

  return (
    <li>
      <div className="bg_container_appointment">
        <div className="min_container_appointment">
          <h1 className="heading">{title}</h1>
          <p className="date_and_time">{date}</p>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png"
            alt="start"
          />
        </div>
      </div>
    </li>
  )
}
export default AppointmentItem
