import Tip from '../Tip'
import '../common.css'
import "./index.css"
type InputItems = {
  title: string
  placeholder: string
}
interface InputProps {
  inputItems: InputItems[]
}

const inputItems: InputItems[] = [
  { title: 'Singup', placeholder: '4/15 - 6/15' },
  { title: 'Event', placeholder: '6/15 - 7/15' },
  { title: 'Grant Size', placeholder: '200K' },
]

const Input = (props: InputProps) => {
  const { inputItems } = props
  return <div className='flex flex-col gap-2'>
    {inputItems.map(item => (
      <div key={item.title} className="flex justify-between border-b-2 border-solid border-input-line">
        <span className="text-12 font-tip text-input-title">{item.title}</span>
        <span className="text-14 font-neue text-input-text outline-none bg-card-black">{item.placeholder}</span>
      </div>
    ))}
  </div>
}

const Hackathon = () => {
  return (
    <div className="relative w-416 h-278">
      <div className="common_card hackathon_bg">
        <div className="hack_left_line bg-black z-10"></div>
      </div>
      <div className="common_card hackathon_card">
        <div className="flex flex-col px-11 py-8 h-full justify-between">
          <div>
            <h2 className="text-input-text font-title text-lg mb-3" >Moonshot 2023 Summer Hackathon</h2>
            <Tip texts={['All Tracks', 'Solidity', 'ZK']} />
          </div>

          <Input inputItems={inputItems} />
        </div>

        <div className="hack_left_line"></div>
        <div className="hack_right_line"></div>
      </div>
    </div>
  )
}

export default Hackathon