import Icon from '../Icon'
import Span from '../Span'
import '../common.css'
import './index.css'
const ConceptLearning = () => {
  return (
    <div className="relative w-416 h-278">
      <div className="common_card conceptlearning_bg" />
      <div className="common_card conceptlearning_card">
        <picture>
          <img alt="bitcoin" className="bitcoin_bg" />
        </picture>
        <div className="flex flex-col h-full justify-between">
          <div className="z-10">
            <div className="flex h-4 justify-between pl-4 w-44 items-center bg-card-black relative">
              <Span fromColor="#E0AD38" toColor="#EB3E1C" />
              <div className="bg-image h-4 w-4 rounded-tl-2xl" />
            </div>
            <div className="h-4 w-40 bg-card-black">
              <div className="float-right w-4 h-4 bg-image">
                <div className="w-4 h-4 rounded-br-2xl bg-card-black" />
              </div>
            </div>
            <div className="h-6 w-6 bg-card-black">
              <div className="h-6 w-6 bg-image rounded-tl-3xl" />
            </div>
          </div>
          <div className="z-10">
            <div className="relative w-44 h-16 bg-card-black rounded-tr-3xl py-3 px-3">
              <h2 className="font-title text-input-text">What is Bitcoin</h2>
              <div className="absolute w-4 h-4 bg-card-black left-full bottom-0">
                <div className="w-4 h-4 bg-image rounded-bl-3xl" />
              </div>
              <div className="absolute w-6 h-6 bg-card-black bottom-full left-0">
                <div className="w-6 h-6 bg-image rounded-bl-3xl" />
              </div>
            </div>
            <div className="w-345 h-6 bg-card-black">
              <div className="relative w-full h-3">
                <div className="absolute right-0 w-3 h-3 bg-image" />
                <div className="absolute w-full h-3 z-10 rounded-tr-3xl bg-card-black" />
              </div>
              <div className="relative w-full h-3">
                <Icon className="absolute -bottom-1.5 right-8" code="&#xe6aa;" text="36 Hour" />
                <div className="absolute w-3 h-3 left-full bg-card-black">
                  <div className="w-3 h-3 bg-image rounded-bl-3xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConceptLearning