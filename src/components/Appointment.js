import React from 'react'
import PropTypes from 'prop-types'

const Appointment = ({ appointment, onDeleteAppointment }) => (
  <div className="media mt-3">
    <div className="media-body">
      <h3 className="mt-0">{appointment.pet}</h3>

      <p className="card-text">
        <span>Pet's owner:</span>
        {appointment.owner}
      </p>

      <p className="card-text">
        <span>Date:</span>
        {appointment.date}
      </p>

      <p className="card-text">
        <span>Time:</span>
        {appointment.time}
      </p>

      <p className="card-text">
        <span>Pet's symptoms:</span>
        {appointment.symptoms}
      </p>

      <button
        className="btn btn-danger"
        onClick={() => onDeleteAppointment(appointment.id)}
      >
        &times; Delete
      </button>
    </div>
  </div>
)

Appointment.propTypes = {
  appointment: PropTypes.object.isRequired,
  onDeleteAppointment: PropTypes.func.isRequired
}

export default Appointment
