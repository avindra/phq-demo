import React, { PropTypes } from 'react'

const Therapist = ({ name, phone }) => (
  <div className="therapist">
    <p className="name">☊ { name }</p>
    <p>☎ { phone }</p>
  </div>
)

Therapist.propTypes = {
  name : PropTypes.string.isRequired,
  phone : PropTypes.string.isRequired,
}

export default Therapist