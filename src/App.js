import React, { useState } from "react";
import './App.css';
import BlockBox from "./BlockBox";
import Button from '@mui/material/Button';
function App() {
  var [numberOfElemets ,setElements]=useState(50);
  var [speedOfSorting ,setSpeed]=useState(30);
  var [sorting ,setSorting] = useState(false);
  var [event , setEvent] = useState(0);
  var [optionVal , setOption] = useState(0);
  function handleSubmit(e){
    e.preventDefault();
    setElements(e.target.noe.value)
    if(!e.target.noe.value)
    setElements(5)
    setSpeed(e.target.sos.value)
  } 
  function handleChange(e){
    setOption(e.target.value)
  }
  function submit(e){
    e.preventDefault();
    setSorting(!sorting);
    setEvent(optionVal);
  }
  return (
    <div className="App">
      <h1 style={{color:"#1C0C5B" , fontSize:"2.3rem"}}>Sorting Visualizer</h1>
      <div className="buttonDiv">
        <form onSubmit={submit}>
        <select onChange={handleChange} name = "options" value={optionVal}>
          <option value="0">Select Algorithm</option>
          <option value="1">Traversing</option>
          <option value="2">Simple Sort</option>
          <option value="3">Bubble Sort</option>
          <option value="4">Selection Sort</option>
          <option value="5">Selection Upgraded</option>
          <option value="6">Insertion Sort</option>
          <option value="7">Insertion Upgraded</option>
          <option value="8">Quick Sort</option>
        </select>
        <Button className="butn" variant="contained" color="secondary" size="medium" type="submit">{(!sorting) ? "Start" : "Reset"}</Button>
        </form>
      </div>
      <BlockBox setSort={setSorting} sort={sorting} event={event} noe={numberOfElemets} sos={speedOfSorting}  />
      <div className="controller">
        <form onSubmit={handleSubmit}>
          <label>Number of Bars
            <input name="noe" defaultValue="50" type="number" min="5" max="500" />
          </label><br />
          <label>Speed (Milliseconds)
            <input name="sos" defaultValue="30" type="number" min="1" max="1000" />
          </label><br />
          <Button size="medium" type="submit" color="primary" variant = "contained">Set</Button>
        </form>
      </div>
      <div className="contact">
      Wanna suggest something, report a bug or just wanna talk, feel free to Contact-Me
      <p>Tejas Rana<br />8571903737<br />tejasrana7771@gmail.com<br /><Button href="mailto:tejasrana7771@gmail.com">Contact Me</Button></p>
      
        </div>      
    </div>
  );
}

export default App;
