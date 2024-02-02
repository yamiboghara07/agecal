import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  let [birthdate, setbirthdate] = useState('');
  let [currentdate, setcurrentdate] = useState('');
  let [result, setresult] = useState({
    ms: null,
    sec: null,
    min: null,
    hr: null,
    days: null,
    weeks: null,
    mon: null,
    years: null,

  });

  const age = () => {
    const bdate = new Date(birthdate);
    const cdate = new Date(currentdate);

    const msecond = cdate - bdate;
    const second = msecond / 1000;
    const minutes = second / 60;
    const hours = minutes / 60;
    const day = hours / 24;
    const week = Math.floor(day / 7);
    const month = Math.floor(week * 0.229984);
    const year = Math.floor(month / 12 + 1  );

    setresult({
      ms: msecond,
      sec: second,
      min: minutes,
      hr: hours,
      days: day,
      weeks: week,
      mon: month,
      years: year,
    });
  };

  useEffect(() => {
    const currentdate = new Date();
    const formattedDate = currentdate.toISOString().split('T')[0];
    setcurrentdate(formattedDate);
  },[]);

  return (
    <div className="agecal">

      <h1>Age Calculator</h1>
      <div>
        <input type='date' id='bdate' className='age' value={birthdate} onChange={(e) => setbirthdate(e.target.value)}></input>
      </div>
      <div>
        <input type='date' id='cdate' className='age' value={currentdate} onChange={(e) => setcurrentdate(e.target.value)}></input>
      </div>
      <div className='subbtn'>
        <input type='submit' value='click' onClick={() => age()}></input>
      </div>

      <div className='agecal_1'>
        <p>milisecond  : <span>{result.ms}</span></p>
        <p>second  : <span>{result.sec}</span></p>
        <p>minite  : <span>{result.min}</span></p>
        <p>hours  : <span>{result.hr}</span></p>
        <p>day  : <span>{result.days}</span></p>
        <p>week  : <span>{result.weeks}</span></p>
        <p>month  : <span>{result.mon}</span></p>
        <p>year  : <span>{result.years}</span></p>
      </div>

    </div>
  );
}

export default App;
