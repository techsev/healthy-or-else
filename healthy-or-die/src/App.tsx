import './App.css'
import Snooze from './Snooze.jsx'
import ThreatLevel from './ThreatLevel.jsx'
import StopButton from './StopButton.jsx'
import Timer from './Timer.jsx'

import { useState, useRef, useEffect } from 'react'
import * as tf from '@tensorflow/tfjs'
import '@tensorflow/tfjs-backend-webgl' // set backend to webgl

import Webcam from 'react-webcam'
import { detectVideo } from './utils/detect.js'
import { Application, extend } from '@pixi/react'
import { Container, Graphics, Point, Text } from 'pixi.js'
import '@tensorflow/tfjs-backend-cpu' // set backend to webgl

const MODEL_PATH = './model_nano/model.json'

const editorExtensionId = 'cglehofamioleppjgechidkehkcgkahb'


const triggerEffect = (effect: string) => {
  if (chrome && chrome.runtime) {
    console.log('triggered')
    chrome.runtime.sendMessage(editorExtensionId, {
      type: 'trigger-effect',
      effect: effect
    })
  }
}

function App() {

  const webcamRef = useRef<Webcam>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const modelDrinkRef = useRef<{
    net: tf.GraphModel<string> | null
    inputShape: [1, 0, 0, 3]
  }>({
    net: null,
    inputShape: [1, 0, 0, 3]
  })
  const modelCocoRef = useRef<any | null>(null)

  const [loading, setLoading] = useState({ loading: true, progress: 0 }) // loading state
  const [isDrinking, setIsDrinking] = useState(false)
  const [drinkCenter, setDrinkCenter] = useState({ x: 0, y: 0 })
  const [isSitting, setIsSitting] = useState(false)
  const [sittingCenter, setSittingCenter] = useState({ x: 0, y: 0 })

  const [waterDrank, setWaterDrank] = useState(false)
  const [snooze, setSnooze] = useState(false)
  const [timer, setTimer] = useState(1000)
  const [barValue, setBarValue] = useState(0)
  const [barRate, setBarRate] = useState(10)

  const [heartEmpty, setHeartEmpty] = useState([false, false, false])

  const increaseThreatLevel = () => {
    console.log(heartEmpty)
    for (let i = 0; i < heartEmpty.length; i++) {
      if(heartEmpty[i] === false) {
        heartEmpty[i] = true;
        break
      }
    }
  }

  const snoozeThreatLevel = () => {
    console.log('Snoozed')
  }

  const sendEffect = () => {
    const threatLevel = heartEmpty.filter(Boolean).length

    switch(threatLevel) {
      case 0:
        triggerEffect('stop')
        break
      case 1:
        triggerEffect('replace')
        break
      case 2:
        triggerEffect('blue')
        break
      case 3:
        triggerEffect('spinWords')
        break
    }
  }


  useEffect(() => {
    sendEffect()
  }, heartEmpty)

  

  useEffect(() => {
    tf.ready().then(async () => {
      const drinkModel: any = await tf.loadGraphModel(
        `${window.location.href}/${MODEL_PATH}`,
        {
          onProgress: (fractions) => {
            setLoading({ loading: true, progress: fractions }) // set loading fractions
          }
        }
      )

      // warming up model
      const dummyInput = tf.ones(drinkModel.inputs[0].shape)
      const warmupResults = drinkModel.execute(dummyInput)

      setLoading({ loading: false, progress: 1 })
      modelDrinkRef.current = {
        net: drinkModel,
        inputShape: drinkModel.inputs[0].shape
      } // set model & input shape

      tf.dispose([warmupResults, dummyInput]) // cleanup memory
    })
  }, [])

  return (
    <>
      <div className="gap-4 grid grid-cols-[65%_35%] border-emerald-400 h-full w-full">
        <div className="">
        <div className="w-full h-150 rounded-md border-2 border-emerald-600 mb-8 relative">
                  <Webcam
            ref={webcamRef}
            muted={true}
            onPlay={() => {
              detectVideo(
                webcamRef.current?.video as HTMLVideoElement,
                modelDrinkRef.current,
                modelCocoRef.current,
                canvasRef.current as HTMLCanvasElement,
                setIsDrinking,
                setDrinkCenter,
                setIsSitting,
                setSittingCenter
              )
            }}
            
            style={{
              position: 'absolute',
              textAlign: 'center',
              zIndex: 9,
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
           <div className='absolute inset-0 z-10 w-full h-full flex justify-center items-center '>
            <canvas
              className='h-full aspect-video'
              width={1280}
              height={720}
              ref={canvasRef}
            />
            {/* <Application
              autoStart
              width={1280}
              height={720}
              className='h-full aspect-video absolute inset-0'
              backgroundColor={'transparent'}
              backgroundAlpha={0}
            >
              <pixiContainer x={drinkCenter.x} y={drinkCenter.y}>
                {isDrinking && (
                  <pixiText
                    text='CHUG!!!'
                    anchor={new Point(0.5, 0.75)}
                    style={{
                      fontSize: 75,
                      fontWeight: 'bold',
                      fontFamily: 'Bree Serif',
                      fill: 'white',
                      stroke: {
                        color: 'red',
                        width: 10
                      },
                      dropShadow: {
                        color: 'red',
                        blur: 0,
                        alpha: 1,
                        angle: Math.PI / 4,
                        distance: 10
                      }
                    }}
                  />
                )}
              </pixiContainer>
              <pixiContainer x={sittingCenter.x} y={sittingCenter.y}>
                {isSitting && (
                  <pixiText
                    text='Get Up!!!'
                    anchor={new Point(0.5, 0.75)}
                    style={{
                      fontSize: 75,
                      fontWeight: 'bold',
                      fontFamily: 'Bree Serif',
                      fill: 'white',
                      stroke: {
                        color: 'red',
                        width: 10
                      },
                      dropShadow: {
                        color: 'red',
                        blur: 0,
                        alpha: 1,
                        angle: Math.PI / 4,
                        distance: 10
                      }
                    }}
                  />
                )}
              </pixiContainer>
            </Application> */}
          </div>
          
          </div>
          <h1 className='text-[50px] font-bold'>{isDrinking ? 'Drinking' : 'Not Drinking'}</h1>
          <Timer 
            barRate={barRate} 
            setBarRate={setBarRate} 
            sendEffect={sendEffect}
            increaseThreatLevel={increaseThreatLevel}
            setBarValue={setBarValue}
            barValue={barValue}
          />
          <StopButton setHeartEmpty={setHeartEmpty}/>
      
        </div>
        <div className="">
          <ThreatLevel heartEmpty={heartEmpty}/>
          <Snooze setHeartEmpty={setHeartEmpty}/>

          <button
          className='bg-red-500 text-black px-4 py-2 rounded-md'
          onClick={() => {
            triggerEffect('spinWords')
          }}
        >
          Trigger Effect
        </button>
        </div>
      </div>
    </>
  )
}

export default App
