import * as tf from '@tensorflow/tfjs'
import * as cocoSsd from '@tensorflow-models/coco-ssd'

interface ModelDrink {
    net: tf.GraphModel<string> | null
    inputShape: [1, number, number, 3]
}

export function detectVideo(
    vidSource: HTMLVideoElement,
    modelDrink: ModelDrink,
    modelCoco: cocoSsd.ObjectDetection | null,
    canvasRef: HTMLCanvasElement,
    setIsDrinking: (isDrinking: boolean) => void,
    setDrinkCenter: (center: { x: number; y: number }) => void,
    setIsSitting: (isSitting: boolean) => void,
    setSittingCenter: (center: { x: number; y: number }) => void
): void 