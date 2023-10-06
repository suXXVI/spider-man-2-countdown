import React, { useEffect, useState } from 'react';
import Countdown from 'react-countdown';
import moment from 'moment-timezone';
import './styles/styles.css';

export default function App() {
  const customDate = new Date(2023, 9, 20, 0, 0).getTime();

  const [today, setToday] = useState(null);

  useEffect(() => {
    // Get the current timestamp in EST time zone
    const estNow = moment.tz('America/New_York');
    setToday(estNow);
  }, []);

  const psCode = '44DH-ERNG-BJQ2';

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>Countdown expired</span>;
    } else {
      return (
        <span style={{ color: 'white', fontSize: '50px', fontWeight: '600' }}>
          {days}d {hours}h {minutes}m {seconds}s
        </span>
      );
    }
  };

  return (
    <>
      {today && (
        <div className="h-screen w-full flex justify-center items-center pattern">
          <div className='countdown-container bg-black bg-opacity-75 p-10 flex flex-col justify-center items-center rounded-lg'>
            <p className='font-bold text-4xl text-white'>Countdown</p>
            <Countdown date={customDate} renderer={renderer} style={{ color: 'white' }} />
          </div>
        </div>
      )}
      {today && today.isSameOrAfter(customDate) && (
        <div className="h-screen w-full flex justify-center items-center pattern">
          <div className='countdown-container bg-black bg-opacity-75 p-10 flex flex-col justify-center items-center rounded-lg'>
            <p className='font-bold text-4xl text-white'>Countdown</p>
            <h1 className='text-4xl text-white font-bold mt-5'>{psCode}</h1>
          </div>
        </div>
      )}
    </>
  );
}
