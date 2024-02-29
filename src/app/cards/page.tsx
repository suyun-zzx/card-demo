"use client"

import './index.css'
import ConceptLearning from "@/components/ConceptLearning";
import Hackathon from "@/components/Hackathon";
import LearningTracks from "@/components/LearningTracks";
import Syntax from "@/components/Syntax";
import { UIEvent, useRef, useState } from 'react';
let curLeft: number = 0
let scrollInterval: any = null
export default function Cards() {
  const container = useRef<HTMLDivElement>(null)
  const [btnsVisible, setBtnVisible] = useState({
    right: true,
    left: false,
  })

  /** @name 监听滚动 */
  const handleScroll = (e: UIEvent) => {
    const { scrollLeft } = e.currentTarget
    if (scrollLeft < 472 && scrollLeft > 0) {
      setBtnVisible({
        left: true,
        right: true,
      })
    } else if (scrollLeft >= 472) {
      clearInterval(scrollInterval)
      scrollInterval = null
      setBtnVisible({
        left: true,
        right: false,
      })
    } else if (scrollLeft <= 0) {
      clearInterval(scrollInterval)
      scrollInterval = null
      setBtnVisible({
        left: false,
        right: true,
      })
    }
  }

  const handleClickArrow = (type: 'left' | 'right', speed: number) => {
    curLeft = container.current?.scrollLeft || 0
    if (type === 'left') {
      if (!scrollInterval) {
        scrollInterval = setInterval(() => {
          curLeft -= speed
          container.current?.scrollTo({ left: curLeft })
        }, 5)
      }
    }
    if (type === 'right') {
      if (!scrollInterval) {
        scrollInterval = setInterval(() => {
          curLeft += speed
          container.current?.scrollTo({ left: curLeft })
        }, 5)
      }
    }
  }

  return (
    <div ref={container} className="w-1600 mt-28 px-28 overflow-scroll relative card_wrapper" onScrollCapture={handleScroll}>
      <div className="card_container">
        <Syntax />
        <Hackathon />
        <LearningTracks />
        <ConceptLearning />
      </div>
      {btnsVisible.left && <>
        <div className="absolute top-12 left-0 left_shadow">
          <div className="fixed h-80 w-40 left_shadow" />
        </div>
        <div onClick={() => handleClickArrow('left', 10)} className="absolute top-48 left-28 z-20">
          <div className='rounded-full border-solid fixed border-2 border-tip w-11 h-11 rotate-315 card_btn' />
        </div>
      </>}
      {btnsVisible.right &&
        <div onClick={() => handleClickArrow('right', 10)} className="absolute top-48 right-28 z-20 w-11 h-11">
          <div className="fixed top-44 h-80 w-40 right_shadow" />
          <div className='rounded-full border-solid fixed border-2 border-tip w-11 h-11 rotate-135 card_btn' />
        </div>}
    </div>
  );
}
