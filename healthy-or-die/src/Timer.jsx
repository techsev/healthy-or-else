
import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Timer( {barRate, setBarRate, barValue, setBarValue, triggerEffect, increaseThreatLevel} ) {
  const [count, setCount] = useState(0)
  const [setting, setSetting] = useState(false)

  useEffect (() => {
    const interval = setInterval(() => {
      setBarValue((barValue) => {
        if (barValue >= 1 && !setting) {
          setSetting(true)
          return 0
        } else {
          return barValue + .0008
        }
      })
    }, barRate)
  }, []);

  useEffect(() => {
    if(barValue === 0 ) {
      triggerEffect()
      increaseThreatLevel()
      setTimeout(() => {
        setSetting(false)
    }),"1000"}
  }, barValue)
  

  return (
    <>
      <div className="ml-28 w-100 h-30 flex flex-col">
        Thirst Meter
        <progress className="w-100 h-15 bg-blue-600 rotate-180" value={barValue} onClick={() => setBarValue(0)}></progress>
      </div>
    </>
  )
}

export default Timer
