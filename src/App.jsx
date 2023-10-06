import React from 'react';
import Countdown from 'react-countdown';
import './styles/styles.css';

export default function App() {
  // Create customDate in EST timezone (2023-10-20, 00:00 EST)
  const customDate = new Date('2023-10-20T00:00:00-05:00').getTime();

  const today = new Date().getTime(); // Get the current timestamp

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
      {today !== customDate && (
        <div className="h-screen w-full flex justify-center items-center pattern">
          <div className='countdown-container bg-black bg-opacity-75 p-10 flex flex-col justify-center items-center rounded-lg'>
            <p className='font-bold text-4xl text-white'>Countdown</p>
            <Countdown date={customDate} renderer={renderer} style={{ color: 'white' }} />
          </div>
        </div>
      )}
      {today === customDate && (
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
