import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import "./styles.css";
import { LineChart } from '@mui/x-charts/LineChart';
import  PressureScaler from './components/PressureScaler';

function App() {
  const [current_pressure, setCurrentP] = useState(0);
  const [currentTime, setCurrentT] = useState(0);
  const yRange = 50;
  const xRange= 10;
  const Ventilate = ()=>{
    setCurrentP(20)
  };
  return (
  <>
    <PressureScaler rows={xRange} cols={yRange} currentTime={currentTime} 
    current_pressure={current_pressure}/>
    <button className="btn"onClick={Ventilate}>Ventilate</button>
  </>

  ) 
};

export default App; 
