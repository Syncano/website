import Hex from 'react-hexagon'

const Hexagon = ({width, fill, children, style, position}) => {
  let positionStyle = {}
  const element = (
    <Hex
      diagonal={width || 200}
      style={{
        stroke: 'none',
        fill,
        ...style
      }}
      flatTop
      >
      {children}
    </Hex>
  )

  if (position) {
    positionStyle = {
      position: 'absolute',
      zIndex: 10,
      ...position
    }
  }

  if (width) {
    return (
      <div style={{
        width,
        ...positionStyle
      }}>
        {element}
      </div>
    )
  }

  return element
}

export default Hexagon
