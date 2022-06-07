import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import {format} from 'date-fns'
import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {
    AppointmentList: [],
    titleInput: '',
    dateInput: '',
  }

  onChangeOfTitle = event => {
    const {titleInput} = this.state
    this.setState({titleInput: event.target.value})
    console.log(titleInput)
  }

  onChangeOfDate = event => {
    const {dateInput} = this.state
    this.setState({dateInput: event.target.value})
    console.log(dateInput)
  }

  addComment = event => {
    event.preventDefault()
    const {titleInput, dateInput} = this.state
    const FormatedDate = dateInput
      ? format(new Date(dateInput), 'dd MMMM yyyy,EEEE')
      : ''
    const newAppointment = {
      id: uuidv4(),
      title: titleInput,
      date: FormatedDate,
    }
    this.setState(prevState => ({
      AppointmentList: [...prevState.AppointmentList, newAppointment],
    }))
  }

  render() {
    const {AppointmentList} = this.state
    return (
      <div className="bg_container">
        <div className="min_container">
          <div className="form_image_container">
            <form className="form" onSubmit={this.addComment}>
              <h1>Add Appointment</h1>
              <label htmlFor="title">TITLE</label>
              <input id="title" type="search" onChange={this.onChangeOfTitle} />
              <label htmlFor="date">Date</label>
              <input id="date" type="date" onChange={this.onChangeOfDate} />
              <div>
                <button type="button">Add</button>
              </div>
            </form>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
              />
            </div>
          </div>
          <hr />
          <h1>bjk</h1>
          <div>
            <ul>
              {AppointmentList.map(eachAppoint => (
                <AppointmentItem
                  key={eachAppoint.id}
                  AppointmentItemDetails={eachAppoint}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
