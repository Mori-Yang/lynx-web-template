import { useRef, useState } from "@lynx-js/react";
import style from './App.module.css'
import type { Animation, MainThread, TouchEvent } from "@lynx-js/types";
import type { Element } from "@lynx-js/types/main-thread";

export default function App() {
  const animationRef = useRef<Animation | null>(null)
  const [running, setRunning] = useState(false)

  const hanle = () => {
    if (!animationRef.current) {
      const animationEle = lynx.getElementById("xxx")
      const xxxAnimation = animationEle.animate([{
        'transform': "translateX(0px)"
      }, {
        'background-color': 'aqua',
        'transform': "translateX(100px)"
      }], {
        duration: 1000,
        fill: 'forwards'
      })
      animationRef.current = xxxAnimation;
      setRunning(true)
    }
  }

  function handleAnimate() {
    if (running) {
      animationRef.current?.pause()
    } else {
      animationRef.current?.play()
    }
    setRunning(!running)
  }
  return <view
  >
    <text
      id="xxx"
      bindtap={hanle}
    >XXX</text>
    <view bindtap={handleAnimate}><text>changeAnimate</text></view>
  </view>
}


