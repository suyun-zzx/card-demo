interface SpanProps {
  fromColor?: string
  toColor?: string
  dirction?: 'right' | 'bottom'
}
const Span = (props: SpanProps) => {
  let { fromColor = 'white', toColor = 'black', dirction = 'bottom' } = props

  return <span className={`inline-block w-12 h-1 rounded-md`} style={{ backgroundImage: `linear-gradient(to ${dirction},${fromColor} , ${toColor})` }} />
}

export default Span