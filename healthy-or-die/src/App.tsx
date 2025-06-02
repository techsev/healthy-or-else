import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useState, useRef, useEffect } from 'react'
import * as tf from '@tensorflow/tfjs'
import '@tensorflow/tfjs-backend-webgl' // set backend to webgl

import Webcam from 'react-webcam'
import { detectVideo } from './utils/detect.js'
import { Application, extend } from '@pixi/react'
import { Container, Graphics, Point, Text } from 'pixi.js'
import '@tensorflow/tfjs-backend-cpu' // set backend to webgl

function App() {

  const webcamRef = useRef<Webcam>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)


  const [count, setCount] = useState(0)

  return (
    <>

      <Webcam
            ref={webcamRef}
            muted={true}
            
            style={{
              position: 'absolute',
              textAlign: 'center',
              zIndex: 9,
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
