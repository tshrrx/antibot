import React from "react";
import ParticleBackground from "../ParticleBackground";
import "./css/home.css";

const Home = () => {
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

      {/* <div className="content-section">
        <div className="content-acc">
          <div></div>
          <div></div>
        </div>
        <p className="subt">Revolutionary by design</p>
        <h3 className="title">Harness. Empower.<br></br>
          Unmatched Versatility.</h3>
        <p className="subp">At the core lies our revolutionary framework, <br></br>ensuring adaptability across all application architectures.</p>
      </div> */}
    </div>
  );
};

export default Home;
