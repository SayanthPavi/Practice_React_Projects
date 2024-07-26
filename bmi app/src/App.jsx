import { useState } from 'react'
import './App.css'
import bmiIcon from "./assets/bmi.jpg";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiStatus, setBmiStatus] = useState("");

  const calculateBmi = () => {
    if(height && weight){
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));
      if(bmiValue < 18.5){
        setBmiStatus("Under Weight");
      }else if(bmiValue >= 18.5 && bmiValue < 24.5){
          setBmiStatus("Normal Weight");
      }else if(bmiValue >= 25 && bmiValue < 29.9){
        setBmiStatus("Over Weight");
      }else{
        setBmiStatus("Obese")
      }

      
    }else{
      setBmi(null)
      setBmiStatus("")
    }
  }

  return (
    <>
      <div className="bmi-container">
        <div className="box">
          <img src={bmiIcon} alt="image" width={350}  />
        </div>
        <div className="data">
          <h1>BMI Calculator</h1>
          <div className="input-container">
            <label htmlFor="height">Height (cm):</label>
            <input type="text" name="height" id="height" value={height} 
            onChange={(e) => setHeight(e.target.value)}/>
          </div>
          <div className="input-container">
          <label htmlFor="weight">Weight (cm):</label>
          <input type="text" name="weight" id="weight"  value={weight}  
           onChange={(e) => setWeight(e.target.value)}/>
          </div>
          <button onClick={calculateBmi}>Calculate BMI</button>
          <div className="result">
            <p>Your BMI is: 28.8</p>
            <p>Status: Over weight</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
