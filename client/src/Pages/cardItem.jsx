import React from 'react';
import '../styles/cardleaderpage.css';
import Home from '../Home';


function cardItem() {
  return (
    <div className='cards'>
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

export default cardItem;