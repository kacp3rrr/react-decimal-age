import React, { useState, useEffect } from 'react';
import { convertDate } from './util/convert';

type Props = {
  date: string
}

export const DecimalAge: React.FC<Props> = ({ date }) => {
  //States
  let [ageDisplay, setAgeDisplay] = useState('');
  let [parsedDate, setParsedDate] = useState({
    years: '',
    months: '',
    days: ''
  });
  //Make date into unix millisecond timestamp
  let unix_timestamp = Date.parse(date);
  useEffect(() => {
    let mounted = true;
    setInterval(() => {
      //Simplified: current time unix - input time unix / (convert unix timestamp to years)
      let time = (new Date().getTime() - new Date(unix_timestamp).getTime()) / (1000 * 60 * 60 * 24 * 365.25);
      let decimalYear = time.toString().substring(0, 12)
      //Packing data into states, only perform is component is mounted
      if (mounted) { 
        let convertedDate = convertDate(Number(decimalYear));
        setAgeDisplay(decimalYear);
        setParsedDate({
          years: convertedDate.years.toString(),
          months: convertedDate.months.toString(),
          days: convertedDate.days.toString()
        });
      };
    }, 50);
    return () => { mounted = false };
  });
	return (
		<div className="decimalAge">
      <h1>Age: {ageDisplay}</h1>
      <h2>Which Is Approximately: {parsedDate.years} years, {parsedDate.months} months, and {parsedDate.days} days</h2>
    </div>
	);
};