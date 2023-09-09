import './ReactCalendar.css';
import React, {useState} from 'react';
import Calendar from 'react-calendar';

export default function ReactCalendar() {
  const [value, onChange] = useState(new Date()); 

  return (
    <>
      <Calendar onChange={onChange} value={value} />
    </>
  );
}