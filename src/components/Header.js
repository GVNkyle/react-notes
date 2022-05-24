import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
      <header className='head'>
          <h1 className='headsHeading'> <FontAwesomeIcon icon={faLightbulb} />Notes</h1>
      </header>
  )
}

export default Header