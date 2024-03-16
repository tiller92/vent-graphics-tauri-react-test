import { useState, useEffect } from "react";

function MySVG ({currentPressure, currentTime }){
  const desiredHeight = 500
  const desiredWidth = 1000
  // two lines will be the graphs axis so orgin will be x1 and y1 [50,470]
  // width scale x 900 - 50 = 850 / 10 = 85 pixel increment 
  // current y scale 470 - 30 is the top. 430 is total pixels 430/ 50 = 8.6 desried increment  
  // take a prop with the lact n pressure an create a curve attached to the last pressure
  const displayX = 50 + (currentTime ) 
  const displayY = (470 - (currentPressure *8.6)) 
  const pressures = [0,10,10,10,10,10,10,10,10]
  console.log(pressures)
  const path = `M ${displayX} ${displayY} Q 95 10 180 80`
  return (
   <div className="flex justify-center mt-20"> 
    <svg width={desiredWidth} height={desiredHeight} viewBox="0 0 1000 500" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_114_10)">
        <path d="M4 0H1004V500H4V0Z" fill="url(#paint0_linear_114_10)" shape-rendering="crispEdges"/>
        <path d="M4.5 0.5H1003.5V499.5H4.5V0.5Z" stroke="black" shape-rendering="crispEdges"/>
      </g>

      <line x1="50" y1="470" x2="900" y2="470" stroke="white" stroke-width="5"/>
      <line x1="50" y1="30" x2="50" y2="470" stroke="white" stroke-width="5"/>
        <path d={path} stroke="black" fill="transparent"/>


      <defs>
      <filter id="filter0_d_114_10" x="0" y="0" width="1008" height="508" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_114_10"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_114_10" result="shape"/>
      </filter>
      <linearGradient id="paint0_linear_114_10" x1="504" y1="0" x2="504" y2="500" gradientUnits="userSpaceOnUse">
      <stop stop-color="#0580C5" stop-opacity="0"/>
      <stop offset="0.72" stop-color="#3377C7"/>
      </linearGradient>
      </defs>

      <circle r="10" cx={displayX} cy={displayY} fill="white" />
    </svg> 

    </div> 

  )
}

export default MySVG;
