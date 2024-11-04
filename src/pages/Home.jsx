// Landing page inspired by https://www.authkit.com/ and https://codepen.io/RAFA3L/pen/RwOMEEa

// eslint-disable-next-line no-unused-vars
import React from "react";
import { useNavigate } from 'react-router-dom';
import ParticleBackground from "../particleBackground/ParticleBackground";
import "./css/home.css";


const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/loginpage');
};

  
  return (
    <div className="App">
      <ParticleBackground />
      <div className="header">
        <h2></h2>
        <div className="mid-spot"></div>
        <button className="github" onClick={() => window.open('https://github.com/Devansh1508/antibot', '_blank', 'noopener,noreferrer')}>
          <span className="glow"></span>
          <span className="github-content">GitHub</span>
        </button>
        <div className="spotlight">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <div className="accent-lines">
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="heroSubP">
        <p>Introducing</p>
      </div>
      <div className="hero">
        <div className="heroT">
          <h2>ANTIBOT</h2>
          <h2>ANTIBOT</h2>
        </div>
      </div>
      <p className="heroP">CAPTCHA Security<br></br>with Intelligent Mouse Dynamics</p>
      <div className="mountains">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="hero-spacer"></div>
      <div className="content-section">
        <div className="content-acc">
          <div></div>
          <div></div>
        </div>
        <p className="subt">What do we do?</p>
        <h3 className="title">Intelligence. Accuracy.<br></br>
        Enhanced Security.</h3>
        <p className="subp">AntiBOT, an innovative solution that differentiates human users from automated bots using mouse dynamics data. By extracting 26 unique 
features which describes lognormal parameters like stroke distance, initial time, temporal delay, and impulse response time and number of strokes, AntiBOT intelligently 
reads user behavior. This in-depth analysis enables precise identification of authentic users in real-time, enhancing security 
and ensuring a trustworthy user experience by preventing unauthorized bot access.</p>
        <button className="try-now" onClick={handleClick}>
          <span className="glow"></span>
          <span className="try-now-content">Try Now</span>
        </button>
      </div>
    </div>
  );
};

export default Home;

