
import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Timer( {barRate, setBarRate, barValue, setBarValue, triggerEffect, increaseThreatLevel} ) {
  const [count, setCount] = useState(0)
  const [setting, setSetting] = useState(false)
  const barValueRef = useRef(barValue)

  useEffect (() => {
    const interval = setInterval(() => {
      if (barValueRef.current >= 1) {
        barValueRef.current = 0
        triggerEffect()
        increaseThreatLevel()
      } else {
        barValueRef.current = barValueRef.current + .0008
      }
      setCount(count + 1)
      setBarValue(barValueRef.current)
    }, barRate)
  }, []);


  

  return (
    <>
      <div className="ml-28 w-100 h-30 flex flex-col">
        Thirst Meter
        {barValue}
        <progress className="w-100 h-15 bg-blue-600 rotate-180" value={barValue} onClick={() => setBarValue(0)}></progress>
      </div>
    </>
  )
}

export default Timer
