import Icon from '../Icon'
import Span from '../Span'
import Tip from '../Tip'
import '../common.css'
import "./index.css"

const LearningTracks = () => {
  return (
    <div className="relative w-416 h-278">
      <div className="common_card learningtracks_bg" />
      <div className="common_card learningtracks_card">

        <div className="absolute w-16 h-9 right-0 bg-black right-28">
          <div className="tracks_arc"></div>
        </div>

        <div className="absolute w-28 h-9 right-0 bg-black">
          <div className="tracks_radius"></div>
        </div>

        <div className="flex flex-col px-11 py-8 h-full justify-between">
          <div className="flex flex-col gap-3">
            <Span fromColor="#D9E313" toColor="#3CBC34" />
            <h2 className="text-input-text font-title text-lg" >Web 3.0 Programming Advanced</h2>
            <Tip texts={["Beginner"]} />
            <p className="text-12 text-input-title leading-3">
              This course covers the most basic concepts in programming using Solidity as an example.
            </p>
          </div>

          <div className="flex gap-6">
            <Icon code="&#xe6aa;" text="36 Hour" />
            <Icon code="&#xe64c;" text="5 Course" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LearningTracks