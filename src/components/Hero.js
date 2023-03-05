import React from 'react'
import promo from '../video/AUS-kriti-4K.mp4'
export default function Hero() {
  return (
    <div>
          <video  src={promo} autoPlay loop muted/>
    </div>
  )
}
