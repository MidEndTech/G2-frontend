import React, { useState, useRef } from 'react';
import Home from '../Home';
import "./Home.css";

function HomePage() {
  const [showHome, setShowHome] = useState(false);
  const homeRef = useRef(null);

  const handleReadMoreClick = () => {
    setShowHome(true);
    // اسحب العنصر إلى موقعه الصحيح في الصفحة
    homeRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <div className="herosection">
        <video src="src\assets\video-2.mp4" autoPlay loop muted />
        <h1 className="headerr">HASHTAG BLOG</h1>
        <p>
          Welcome to the Public Blog This site is an interactive content sharing
          <br /> platform aimed at fostering communication and exchange
          <br /> among people around the world.
        </p>

        <div className="button">
          <button className="btn" onClick={handleReadMoreClick}>
            Read More..
          </button>
        </div>
        
      </div>

        <div ref={homeRef}>
          <Home id="home-section" />
        </div>
     
      
    </div>
  );
}

export default HomePage;