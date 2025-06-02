import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function StopButton( { resetThreatLevel } ) {
  const [count, setCount] = useState(0)

  return (
    <>
      <button class="invisible w-100 h-40 border-2 border-blue-900" onClick={() => resetThreatLevel()}>Stop</button>
    </>
  )
}

export default StopButton
