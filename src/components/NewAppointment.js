import React, { Component } from 'react'
import uuid from 'uuid'
import PropTypes from 'prop-types'

const initialState = {
  appointment: {
    pet: '',
    owner: '',
    date: '',
    time: '',
    symptoms: ''
  },
  error: false
}

class NewAppointment extends Component {
  state = { ...initialState }

  handleChange = e => {
    this.setState({
      appointment: {
        ...this.state.appointment,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    const { pet, owner, date, time, symptoms } = this.state.appointment

    if (
      pet === '' ||
      owner === '' ||
      date === '' ||
      time === '' ||
      symptoms === ''
    ) {
      this.setState({ error: true })

      return
    }

    const newAppointment = { ...this.state.appointment }
    newAppointment.id = uuid()

    this.props.onCreateNewAppointment(newAppointment)
    this.setState({ ...initialState })
  }

  render() {
    const { appointment, error } = this.state

    return (
      <div className="card mt-5 py-5">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">New appointment</h2>

          {error ? (
            <div className="alert alert-danger mt-2 mb-5 text-center">
              All fields are required
            </div>
          ) : null}

          <form onSubmit={this.handleSubmit}>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Pet's name
              </label>

              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Pet's name"
                  name="pet"
                  onChange={this.handleChange}
                  value={appointment.pet}
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Pet's owner
              </label>

              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Pet's owner"
                  name="owner"
                  onChange={this.handleChange}
                  value={appointment.owner}
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Date</label>

              <div className="col-sm-8 col-lg-4">
                <input
                  type="date"
                  className="form-control"
                  name="date"
                  onChange={this.handleChange}
                  value={appointment.date}
                />
              </div>

              <label className="col-sm-4 col-lg-2 col-form-label">Time</label>

              <div className="col-sm-8 col-lg-4">
                <input
                  type="time"
                  className="form-control"
                  name="time"
                  onChange={this.handleChange}
                  value={appointment.time}
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Symptoms
              </label>

              <div className="col-sm-8 col-lg-10">
                <textarea
                  className="form-control"
                  name="symptoms"
                  placeholder="Write the symptoms"
                  onChange={this.handleChange}
                  value={appointment.symptoms}
                ></textarea>
              </div>
            </div>

            <input
              type="submit"
              className="py-3 mt-2 btn btn-success btn-block"
              value="Add new appointment"
            />
          </form>
        </div>
      </div>
    )
  }
}

NewAppointment.protoTypes = {
  onCreateNewAppointmen: PropTypes.func.isRequired
}

export default NewAppointment
