import React from 'react'

const Avatar = ({children, backgroundColor, px, py, color='black', borderRadius, fontSize, cursor='pointer'}) => {

  const style = {
    backgroundColor,
    padding: `${py} ${px}`,
    color,
    borderRadius,
    fontSize,
    textAlign: "center",
    cursor,
  }

  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Avatar