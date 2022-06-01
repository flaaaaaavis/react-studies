import React from 'react'
import PropTypes from 'prop-types'

const Card = function card (props) {
  return <div className='card'>
    <h2 className='title'>{props.title}</h2>
    <p className='description'>{props.description}</p>
    <h4 className='due-date'>{props.dueDate}</h4>
  </div>
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  dueDate: PropTypes.string.isRequired
}

export default Card
