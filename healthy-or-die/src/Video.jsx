import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function VideoPlayer() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="w-full h-150 rounded-md border-2 border-emerald-600 mb-8">
        <div>
          Video
          <img className="h-60 w-auto" src="https://imgs.search.brave.com/zqJtvDaK1pkkiaBHYTydvchES5mm5ybD6310vxp-aME/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9naWZz/ZWMuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIyLzEyL3Vu/ZGVyLWNvbnN0cnVj/dGlvbi1naWYtMTcu/Z2lm.gif"/>
        </div>
      </div>
    </>
  )
}

export default VideoPlayer
