"use client"

import './index.css'
import ConceptLearning from "@/components/ConceptLearning";
import Hackathon from "@/components/Hackathon";
import LearningTracks from "@/components/LearningTracks";
import Syntax from "@/components/Syntax";
import { UIEvent, useRef, useState } from 'react';

export default function Cards() {
  const container = useRef<HTMLDivElement>(null)
  const [btnsVisible, setBtnVisible] = useState({
    right: true,
    left: false,
  })

  /** @name 监听滚动 */
  const handleScroll = (e: UIEvent) => {
    const { scrollLeft, scrollWidth, clientWidth,clientLeft } = e.currentTarget
    console.log(scrollLeft, clientWidth, scrollWidth, clientLeft)
    if (scrollLeft < 472 && scrollLeft > 0) {
      setBtnVisible({
        left: true,
        right: true,
      })
    } else if (scrollLeft >= 472) {
      setBtnVisible({
        left: true,
        right: false,
      })
    } else if (scrollLeft <= 0) {
      setBtnVisible({
        left: false,
        right: true,
      })
    }
  }

  const handleClickArrow = (type: 'left' | 'right') => {
    if (type === 'left') {
      container.current?.scrollTo({ left: 0 })
    }
    if (type === 'right') {
      container.current?.scrollTo({ left: 472 })
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
        <div onClick={() => handleClickArrow('left')} className="absolute top-48 left-28 z-20">
          <div className='rounded-full border-solid fixed border-2 border-tip w-11 h-11 rotate-315 card_btn' />
        </div>
      </>}
      {btnsVisible.right &&
        <div onClick={() => handleClickArrow('right')} className="absolute top-48 right-28 z-20 w-11 h-11">
          <div className="fixed top-44 h-80 w-40 right_shadow" />
          <div className='rounded-full border-solid fixed border-2 border-tip w-11 h-11 rotate-135 card_btn' />
        </div>}
    </div>
  );
}
