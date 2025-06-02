import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Snooze from './Snooze.jsx'
import VideoPlayer from './Video.jsx'
import ThreatLevel from './ThreatLevel.jsx'
import StopButton from './StopButton.jsx'
import Timer from './Timer.jsx'

function App() {

  const [count, setCount] = useState(0)
  const [threatLevel, setThreatLevel] = useState(10)
  const [waterDrank, setWaterDrank] = useState(false)
  const [snooze, setSnooze] = useState(false)
  const [timer, setTimer] = useState(1000)
  const [barValue, setBarValue] = useState(0)
  const [barRate, setBarRate] = useState(25)

  const resetThreatLevel = () => {
    return setThreatLevel(0)
  }

  const snoozeThreatLevel = () => {
    console.log('Snoozed')
  }

  return (
    <>
      <div className="gap-4 grid grid-cols-[65%_35%] border-emerald-400 h-full w-full">
        <div className="flex flex-col align-middle items-center">
          <VideoPlayer />
          <Timer barValue={barValue} setBarValue={setBarValue} barRate={barRate} setBarRate={setBarRate}/>
          <StopButton resetThreatLevel={resetThreatLevel}/>
        </div>
        <div className="">
          <ThreatLevel threatLevel={threatLevel}/>
          <Snooze />
        </div>
      </div>
    </>
  )
}

export default App
