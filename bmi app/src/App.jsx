import { useState } from 'react'
import './App.css'
import bmiIcon from "./assets/bmi.jpg";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiStatus, setBmiStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  

  const calculateBmi = () => {
    const isValidHeight = /^\d+$/.test(height);
    const isValidWeight = /^\d+$/.test(weight);

    if(isValidHeight && isValidWeight){
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
      setErrorMessage("")
      
    }else{
      setBmi(null)
      setBmiStatus("")
      setErrorMessage("Please enter valid numeric values for height and weight.")
    }
  };

  const clearAll = () =>{
    setHeight("");
    setWeight("");
    setBmi(null)
    setBmiStatus("")

  };

  return (
    <>
      <div className="bmi-container">
        <div className="box">
          <img src={bmiIcon} alt="image" width={350}  />
        </div>
        <div className="data">
          <h1>BMI Calculator</h1>

          {errorMessage && <p className="error">{errorMessage}</p>}
          <div className="input-container">
            <label htmlFor="height">Height (cm):</label>
            <input type="text" name="height" id="height" value={height} 
            onChange={(e) => setHeight(e.target.value)}/>
          </div>
          <div className="input-container">
          <label htmlFor="weight">Weight (Kg):</label>
          <input type="text" name="weight" id="weight"  value={weight}  
           onChange={(e) => setWeight(e.target.value)}/>
          </div>
          <button onClick={calculateBmi}>Calculate BMI</button>
          <button onClick={clearAll}>Clear All</button>
         {bmi !== null && (
           <div className="result">
           <p>Your BMI is: {bmi}</p>
           <p>Status: {bmiStatus}</p>
         </div>
         )}
        </div>
      </div>
    </>
  )
}

export default App
