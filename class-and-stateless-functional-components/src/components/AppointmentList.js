import React from 'react'
import Appointment from './Appointment'
import PropTypes from 'prop-types'

const AppointmentList = ({ appointments, onDeleteAppointment }) => {
  const message =
    Object.keys(appointments).length === 0
      ? 'No appointments yet'
      : 'Management the appointments here'

  return (
    <div className="card mt-2 py-5">
      <div className="card-body">
        <h2 className="card-title text-center">{message}</h2>

        <div className="appointment-list">
          {appointments.map(appointment => (
            <Appointment
              key={appointment.id}
              appointment={appointment}
              onDeleteAppointment={onDeleteAppointment}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

AppointmentList.propTypes = {
  appointments: PropTypes.array.isRequired,
  onDeleteAppointment: PropTypes.func.isRequired
}

export default AppointmentList
