import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Snooze() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button className="w-100 h-40 border-2 border-amber-300">The Big Button w-100 h-40</button>
    </>
  )
}

export default Snooze
