import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';
import moment from "moment";

function App() {

  let dateInputRef = useRef();

  let daysarr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  let monthsarr = ["January","February","March","April","May","June","July","August","September","October","November","December",]

  let dateOfBirth = new Date(1000000000000);

  console.log(moment("19991109", "YYYYMMDD").fromNow());

  console.log(moment(dateOfBirth).format('MMMM Do YYYY, h:mm:ss a'));

  // console.log(dateOfBirth.getFullYear());
  // console.log(monthsarr[dateOfBirth.getMonth()]);
  // console.log(dateOfBirth.getDate());
  // console.log(daysarr[dateOfBirth.getDay()]);
  // console.log(dateOfBirth.getHours());
  // console.log(dateOfBirth.getMinutes());
  // console.log(dateOfBirth.getSeconds());
  // console.log(dateOfBirth.getMilliseconds());
  return (
    <div className="App">
      <h2>Date Methods</h2>

      <label>start</label>
      <input ref={dateInputRef} type="datetime-local" onChange={()=>{

        let startDate = new Date(dateInputRef.current.value);

        console.log(moment(startDate).add(120, 'days').calendar());
        console.log(startDate);
        console.log(startDate.getTime());
      }}></input>
    </div>
  );
}

export default App;
