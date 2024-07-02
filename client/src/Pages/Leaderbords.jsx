import React from 'react';
import './cardleaderpage.css';
import CardItem from './cardItem';


function Leaderbords() {
  return (
    <div className='cards'>
      <h1>10 blogs with the highest number of likes!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              text='blog about user is very like'
            />
            <CardItem
              text='blog about user is very like'
            />
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Leaderbords;