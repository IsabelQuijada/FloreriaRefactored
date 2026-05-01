import React from 'react';
import styles from './Petals.module.css';

const PETALS = [
  { left: '10%', width: 18, height: 18, duration: '15s', delay: '0s',    bg: 'linear-gradient(135deg, rgba(255,182,193,0.5) 0%, rgba(255,192,203,0.3) 100%)' },
  { left: '25%', width: 27, height: 27, duration: '18s', delay: '2s',    bg: 'linear-gradient(135deg, rgba(218,112,214,0.5) 0%, rgba(221,160,221,0.3) 100%)' },
  { left: '40%', width: 21, height: 21, duration: '20s', delay: '4s',    bg: 'linear-gradient(135deg, rgba(255,182,193,0.6) 0%, rgba(255,192,203,0.4) 100%)' },
  { left: '55%', width: 24, height: 24, duration: '17s', delay: '1s',    bg: 'linear-gradient(135deg, rgba(255,192,203,0.5) 0%, rgba(255,182,193,0.3) 100%)' },
  { left: '70%', width: 20, height: 20, duration: '19s', delay: '3s',    bg: 'linear-gradient(135deg, rgba(218,112,214,0.6) 0%, rgba(221,160,221,0.4) 100%)' },
  { left: '85%', width: 26, height: 26, duration: '16s', delay: '5s',    bg: 'linear-gradient(135deg, rgba(255,182,193,0.5) 0%, rgba(255,192,203,0.3) 100%)' },
  { left: '20%', width: 23, height: 23, duration: '21s', delay: '6s',    bg: 'linear-gradient(135deg, rgba(255,192,203,0.6) 0%, rgba(255,182,193,0.4) 100%)' },
  { left: '65%', width: 21, height: 21, duration: '22s', delay: '7s',    bg: 'linear-gradient(135deg, rgba(218,112,214,0.5) 0%, rgba(221,160,221,0.3) 100%)' },
  { left: '15%', width: 24, height: 24, duration: '19s', delay: '8s',    bg: 'linear-gradient(135deg, rgba(255,182,193,0.6) 0%, rgba(255,192,203,0.4) 100%)' },
  { left: '45%', width: 20, height: 20, duration: '23s', delay: '2.5s',  bg: 'linear-gradient(135deg, rgba(218,112,214,0.6) 0%, rgba(221,160,221,0.4) 100%)' },
  { left: '75%', width: 23, height: 23, duration: '20s', delay: '5.5s',  bg: 'linear-gradient(135deg, rgba(255,192,203,0.5) 0%, rgba(255,182,193,0.3) 100%)' },
  { left: '90%', width: 26, height: 26, duration: '18s', delay: '9s',    bg: 'linear-gradient(135deg, rgba(255,182,193,0.5) 0%, rgba(255,192,203,0.3) 100%)' },
  { left: '5%',  width: 21, height: 21, duration: '24s', delay: '3.5s',  bg: 'linear-gradient(135deg, rgba(218,112,214,0.6) 0%, rgba(221,160,221,0.4) 100%)' },
  { left: '35%', width: 24, height: 24, duration: '21s', delay: '10s',   bg: 'linear-gradient(135deg, rgba(255,182,193,0.5) 0%, rgba(255,192,203,0.3) 100%)' },
  { left: '50%', width: 23, height: 23, duration: '19s', delay: '4.5s',  bg: 'linear-gradient(135deg, rgba(255,192,203,0.6) 0%, rgba(255,182,193,0.4) 100%)' },
  { left: '60%', width: 20, height: 20, duration: '22s', delay: '11s',   bg: 'linear-gradient(135deg, rgba(218,112,214,0.5) 0%, rgba(221,160,221,0.3) 100%)' },
  { left: '80%', width: 27, height: 27, duration: '20s', delay: '1.5s',  bg: 'linear-gradient(135deg, rgba(255,182,193,0.6) 0%, rgba(255,192,203,0.4) 100%)' },
];

const Petals: React.FC = () => (
  <div className={styles.petalsContainer}>
    {PETALS.map((p, i) => (
      <div
        key={i}
        className={styles.petal}
        style={{
          left: p.left,
          width: p.width,
          height: p.height,
          animationDuration: p.duration,
          animationDelay: p.delay,
          background: p.bg,
        }}
      />
    ))}
  </div>
);

export default Petals;
