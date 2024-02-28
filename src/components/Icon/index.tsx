interface IconProps {
  code?: string
  text?: string
  className?: string
}

const Icon = (props: IconProps) => {
  const { code, text, className } = props
  return (
    <div className={className}>
      <span className="iconfont text-input-text">{code}</span>
      <span className="ml-1.5 font-neue text-input-text text-12">{text}</span>
    </div>
  )
}

export default Icon