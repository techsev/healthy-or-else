import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Snooze from './Snooze.jsx'
import VideoPlayer from './Video.jsx'
import ThreatLevel from './ThreatLevel.jsx'
import StopButton from './StopButton.jsx'

function App() {

  const [count, setCount] = useState(0)
  const [threatLevel, setThreatLevel] = useState(10)
  const [waterDrank, setWaterDrank] = useState(false)
  const [snooze, setSnooze] = useState(false)

  const resetThreatLevel = () => {
    setThreatLevel(0)
  }

  return (
    <>
      <div className="gap-4 grid grid-cols-[65%_35%] border-emerald-400 h-full w-full">
        <div className="">
          <VideoPlayer />
          <StopButton />
        </div>
        <div className="">
          <ThreatLevel threatLevel={threatLevel} resetThreatLevel={resetThreatLevel} />
          <Snooze />
        </div>
      </div>
    </>
  )
}

export default App
