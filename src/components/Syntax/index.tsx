import Icon from '../Icon'
import Span from '../Span'
import Tip from '../Tip'
import '../common.css'
import "./index.css"

const Syntax = () => {
  return (
    <div className="relative w-416 h-278">
      <div className="common_card syntax_bg">
        <div className="syn_left_line bg-black z-10"></div>
      </div>
      <div className="common_card syntax_card">

        <div className="flex flex-col pl-11 pr-4 py-8 h-full justify-between">
          <div className="flex flex-col gap-3">
            <Span fromColor="#38C1A5" toColor="#0891D5" />
            <h2 className="text-input-text font-title text-lg" >Introduction to programming</h2>
            <Tip texts={["Beginner"]} />
            <p className="text-12 text-input-title leading-3">
              This course covers the most basic concepts in programming using Solidity as an example.
            </p>
          </div>

          <div className="flex justify-between items-center justify-center">
            <div className='flex gap-6'>
              <Icon code="&#xe6aa;" text="36 Hour" />
              <Icon code="&#xe64c;" text="5 Course" />
            </div>
            <div className="bg-btn rou px-4 py-2 rounded-3xl text-10px text-btn-text">
              <span className="iconfont">&#xf2ed;</span>
              <span className="ml-2.5 font-tip">45% COMPLETED</span>
            </div>
          </div>
        </div>

        <div className="syn_left_line"></div>
        <div className="syn_right_line"></div>
      </div>
    </div>
  )
}

export default Syntax