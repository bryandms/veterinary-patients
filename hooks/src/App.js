import React, { useState, useEffect } from 'react'
import NewAppointment from './components/NewAppointment'
import Appointment from './components/Appointment'
import './bootstrap.min.css'

const App = () => {
  const initialAppointments =
    JSON.parse(localStorage.getItem('appointments')) || []

  const [appointments, setAppointments] = useState(initialAppointments)

  useEffect(() => {
    localStorage.setItem('appointments', JSON.stringify(appointments) || [])
  }, [appointments])

  const newAppointment = appointment => {
    const newAppointments = [...appointments, appointment]
    setAppointments(newAppointments)
  }

  const deleteAppointment = id => {
    const currentAppointments = appointments.filter(
      appointment => appointment.id !== id
    )
    setAppointments(currentAppointments)
  }

  const title =
    appointments.length === 0 ? 'No appointments yet' : 'Manage appointments'

  return (
    <div className="container">
      <header>
        <h1 className="text-center">Veterinary Patient Management</h1>
      </header>

      <div className="row">
        <div className="col-md-10 mx-auto">
          <NewAppointment onNewAppointment={newAppointment} />
        </div>

        <div className="mt-5 col-md-10 mx-auto">
          <div className="card mt-2 py-5">
            <div className="card-body">
              <h2 className="card-title text-center">{title}</h2>

              <div className="appointment-list">
                {appointments.map(appointment => (
                  <Appointment
                    key={appointment.id}
                    appointment={appointment}
                    onDeleteAppointment={deleteAppointment}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
