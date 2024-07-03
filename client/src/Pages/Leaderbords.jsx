import React from 'react';
import Home from '../Home';


function Leaderbords() {
  return (
    <div className='cards'>
        
        <img src="src\assets\Building.png" alt="logo" style={{ marginTop: '-80px', marginBottom: '-50px', width: '200px', height: "300px",display: 'block', marginLeft: 'auto', marginRight: 'auto' }}/>
        
      <h1> 10 Blogs with the highest number of likes !</h1>
      
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