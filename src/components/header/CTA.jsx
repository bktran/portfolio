import React from 'react'
import {useState} from 'react'

const CTA = (props) => {

  const [buttonName, setButtonName] = useState(props.btnName || "Contact Me")
  return (
    <div className="cta">
      <a href="#contact" className='btn btn-primary'>{buttonName}
      </a>
    </div>
  )
}

export default CTA