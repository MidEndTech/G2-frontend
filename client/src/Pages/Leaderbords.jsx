import React from 'react';
import Home from '../Home';
import img2 from "../assets/Building.png";


function Leaderbords() {
  return (
    <div className='cards'>
        
        <img src={img2} alt="logo" style={{ marginTop: '-80px', marginBottom: '-50px', width: '200px', height: "300px",display: 'block', marginLeft: 'auto', marginRight: 'auto' }}/>
        
      <h1>10 blogs with the highest number of likes!</h1>
      
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <Home/>
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Leaderbords;