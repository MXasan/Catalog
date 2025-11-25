import React from 'react'
import kolbasaBest from '../../../assets/kolbasaBest.png'

const Cards = () => {
  return (
    <div className='cardVisual'>
      <div className="cardVisual__accent" />
      <div className="cardVisual__frame">
        <img src={kolbasaBest} alt="Kolbasa assortimenti" />
      </div>
    </div>
  )
}

export default Cards