/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { useRef, useState, useCallback } from 'react';

// useRef 

import './index.css';

function App() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  let ulRef = useRef()
  // let timerRef = useRef()

  const addNumber = () => {
    setNumbers((prev) => [...prev, prev[prev.length - 1] + 1]);
  };


  const handleScroll = useCallback(() => {
    console.log('Scroll');
  }, [])

  const start = () => {
    ulRef.current.addEventListener('scroll', handleScroll)
    // timerRef.current = setInterval(addNumber, 1000)
  };

  const stop = () => {
    ulRef.current.removeEventListener('scroll', handleScroll)
    // clearInterval(timerRef.current)
  };

  return (
    <div>
      <ul ref={ulRef}>
        {numbers.map((n) => (
          <li key={n}>{n}</li>
        ))}
      </ul>
      <button onClick={addNumber}>✅ Добавить число</button>
      <button onClick={start}>▶️ Старт</button>
      <button onClick={stop}>⏹ Стоп</button>
    </div>
  );
}

export default App;
