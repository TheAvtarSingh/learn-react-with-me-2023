import React from 'react'

function Children(props) {

    const heading = props.heading;
  return (
    <>
    <div>{heading}</div>
    <button onClick={props.changeHeadingOnClick}>Change Heading</button>
</>
  )
}

export default Children