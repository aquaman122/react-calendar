import React, {useState} from 'react';
import './App.css';
import Calendar from 'react-calendar';

function App() {
  const [value, onChange] = useState(new Date());
  
  return (
    <>
      <Calendar onChange={onChange} value={value} />
    </>
  );
}

export default App;
