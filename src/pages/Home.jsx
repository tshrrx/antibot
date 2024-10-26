import React from 'react'
import ParticleBackground from '../ParticleBackground'
import './css/home.css'

const Home = () => {
  return (
    <div className="App">
            <ParticleBackground />
            <div className="content">
                <h1>Particle Background</h1>
                <p>TEXT</p>
            </div>
        </div>
  )
}

export default Home
