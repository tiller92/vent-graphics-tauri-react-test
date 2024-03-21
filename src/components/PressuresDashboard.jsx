import {useState, useEffect} from 'react'


function PressuresDashboard({peakPressure}){
 
   return (
    <>
    <div className='flex justify-center flex-col'>
      <p className='flex justify-center  m-1 text-5xl'>pPeak</p>
      <p className='flex justify-center text-5xl p-1 m-3'>{peakPressure}</p>
    </div>
    </>


  )
}

export default PressuresDashboard;
