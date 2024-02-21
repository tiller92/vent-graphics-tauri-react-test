import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import { Line } from 'react-chartjs-2';

const PressureScaler = ({rows,cols,current_pressure,currentTime})=> {
  const gridItems = []
  const gridDisplay = []
  console.log("current render", currentTime, current_pressure)
  for (let i=0; i<rows; i++){
      const row = []
      const divRow = []
    for (let j=cols; j>=0; j--){
      if (j==current_pressure && i == currentTime ){
        let newDiv = `*`
        divRow.push(newDiv)    

      }else{
        let newDiv = `-`
        divRow.push(newDiv)
      }
      row.push([i,j])
    }
      gridDisplay.push(divRow)
      gridItems.push(row)
  }
  return (
    <div className="sm:flex sm:justify-center sm:w-screen m-5">
      <div className="sm:border-l-4 sm:border-b-4 sm:grid sm:gap-0 sm:grid-cols-10">
        {gridDisplay.map((row)=> (
         <div className="sm:h-1/2 sm:w-full">
         {row.map((col)=> (<div className="sm:w-20  sm:h-3">{col}</div>))}
         </div>
        ))}
      </div>
    </div>
  )


};

export default PressureScaler; 
