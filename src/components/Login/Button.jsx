import React from 'react'
import './css/button.css'

const Button = (props) => {
  return (
    <div>
        <button className="btn" onClick={() => window.open('https://github.com/Devansh1508/antibot', '_blank', 'noopener,noreferrer')}>
          <span className="glow"></span>
          <span className="btn-content">{props.content}</span>
        </button>
    </div>
  )
}

export default Button
