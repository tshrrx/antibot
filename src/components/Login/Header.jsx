import React from 'react'
import './css/header.css'

const Header = (props) => {
  return (
    <div>
      <div className="heading w-[100%] flex justify-center text-5xl font-bold my-10">
        <h2>{props.content}</h2>
      </div>
    </div>
  )
}

export default Header
