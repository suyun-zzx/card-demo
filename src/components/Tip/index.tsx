interface TipProps {
  texts: string[],
}

const Tip = (props: TipProps) => {
  const { texts = [] } = props
  return (
    <div className="flex gap-4">
      {texts.map((text) => (
        <span key={text} className="border-solid border-tip rounded-xl border-.5 font-tip text-white text-9 px-3 py-1">
          {text}
        </span>
      ))}
    </div>
  )
}

export default Tip