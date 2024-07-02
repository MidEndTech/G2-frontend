
import React from 'react'
import './cardleaderpage.css';
import Home from '../Home';

function MostReader() {
  return (
    <div className='cards'>
        <img src="src\assets\Teal.png" alt="logo" style={{ marginTop: '-80px', marginBottom: '-50px', width: '500px', height: "300px",display: 'block', marginLeft: 'auto', marginRight: '420px' }}/>
      <h1>10 blogs with the highest number of Readers!</h1>
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

export default MostReader