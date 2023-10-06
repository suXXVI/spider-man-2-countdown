import React from 'react';
import Countdown from 'react-countdown';
import './styles/styles.css';

export default function App() {
  const customDate = new Date(2023, 9, 20, 0, 0).getTime();

  // Renderer function to display only days, hours, minutes, and seconds
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render something when the countdown is completed
      return <span>Countdown expired</span>;
    } else {
      // Render the countdown with a custom style
      return (
        <span style={{ color: 'white', fontSize: '50px', fontWeight: '600' }}>
          {days}d {hours}h {minutes}m {seconds}s
        </span>
      );
    }
  };

  return (
    <div className="h-screen w-full flex justify-center items-center pattern">
      <div className='countdown-container bg-black bg-opacity-75 p-10 flex flex-col justify-center items-center rounded-lg'>
        <p className='font-bold text-4xl text-white'>Countdown</p>
        <Countdown date={customDate} renderer={renderer} style={{ color: 'white' }} />
      </div>
    </div>
  );
}
