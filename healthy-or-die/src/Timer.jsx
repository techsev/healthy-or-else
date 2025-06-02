
import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Timer( {barRate, setBarRate, barValue, setBarValue} ) {
  const [count, setCount] = useState(0)

  useEffect (() => {
    const interval = setInterval(() => {
      setBarValue((barValue) => {
        if (barValue >= 1) {
          setBarValue(0)
        } else {
          return barValue + .0008
        }
      })
    }, barRate)
  }, []);
  

  return (
    <>
      <div className="w-100 h-30">
        <progress className="w-100 h-15" value={barValue} onClick={() => setBarValue(0)}></progress>
      </div>
    </>
  )
}

export default Timer
