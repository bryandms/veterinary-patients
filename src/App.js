import React, { Component } from 'react'
import Header from './components/Header'
import NewAppointment from './components/NewAppointment'
import AppointmentList from './components/AppointmentList'
import './bootstrap.min.css'

class App extends Component {
  state = {
    appointments: []
  }

  componentDidMount() {
    const sSAppointments = sessionStorage.getItem('appointments') || '[]'
    this.setState({ appointments: JSON.parse(sSAppointments) })
  }

  componentDidUpdate() {
    sessionStorage.setItem(
      'appointments',
      JSON.stringify(this.state.appointments)
    )
  }

  handleCreateNewAppointment = data => {
    const appointments = [...this.state.appointments, data]

    this.setState({ appointments })
  }

  handleDeleteAppointment = id => {
    const currentAppointments = [...this.state.appointments]
    const appointments = currentAppointments.filter(
      appointment => appointment.id !== id
    )
    this.setState({ appointments })
  }

  render() {
    const { appointments } = this.state

    return (
      <div className="container">
        <Header title="Veterinary Patient Management" />

        <div className="row">
          <div className="col-md-10 mx-auto">
            <NewAppointment
              onCreateNewAppointment={this.handleCreateNewAppointment}
            />
          </div>

          <div className="mt-5 col-md-10 mx-auto">
            <AppointmentList
              appointments={appointments}
              onDeleteAppointment={this.handleDeleteAppointment}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App
