import React from 'react'
import CardItem from './CardItem';
import './Cards.css';
// import logo from '../images/img1.jpg'; // Tell Webpack this JS file uses this image

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out this EPIC destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">

            <CardItem
              src='/image/img2.jpg'
              text="Explore the Hiden waterffal deep inside the Amazon Jungle"
              label='Adventure'
              path='/services'
            />

            <CardItem
              src='/image/img2.jpg'
              text="Going through the fantastic world of Middle Earth!"
              label='Adventure'
              path='/services'
            />

          </ul>

          <ul className="cards__items">

            <CardItem
              src='/image/img2.jpg'
              text="Explore the Hiden waterffal deep inside the Amazon Jungle"
              label='Adventure'
              path='/services'
            />

            <CardItem
              src='/image/img2.jpg'
              text="Going through the fantastic world of Middle Earth!"
              label='Adventure'
              path='/services'
            />

            <CardItem
              src='/image/img2.jpg'
              text="Going through the fantastic world of Middle Earth!"
              label='Adventure'
              path='/services'
            />

          </ul>

        </div>
      </div>
    </div>
  )
}

export default Cards
