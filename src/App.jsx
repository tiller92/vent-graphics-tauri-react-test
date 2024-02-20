import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import "./styles.css";
import { LineChart } from '@mui/x-charts/LineChart';
import  Grid  from './components/Grid';

function App() {
  const current_pressure = 30;
  const yRange = 50;
  const xRange= 10;
   
  return (
  <>
    <Grid rows={xRange} cols={yRange} current_pressure={current_pressure}/>
  </>

  ) 
};

export default App; 
