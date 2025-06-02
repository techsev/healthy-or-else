import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function ThreatLevel({ threatLevel }) {
  const [count, setCount] = useState(0)
  const [heartEmpty, setHeartEmpty] = useState([false, false, false])
  return (
    <> 
      <div className="border-pink-800 border-2 w-full h-150  mb-8 ">
      <h1>Threat Level : {threatLevel}</h1>
        <div className="flex flex-col justify-center items-center w-full">
          <img className ="w-1/4" src="./assets/emptyHeart.png"/>
          <img className ="w-1/4" src="./assets/emptyHeart.png"/>
          <img className ="w-1/4" src="./assets/fullHeart.png"/>
        </div>
      </div>
    </>
  )
}

export default ThreatLevel
