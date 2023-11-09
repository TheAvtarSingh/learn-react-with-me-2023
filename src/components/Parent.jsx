import React, { useState } from 'react'
import Children from './Children'

function Parent() {

    const[heading, setHeading] = useState("This is heading passed from Parent to Children")

    const changeHeading = () => {
        setHeading("This is heading changed by Children")
    }

  return (
    <>
    {/* Passing data from parent to Children */}
    <h1>This is Parent Component Passing heading to Children</h1>
    <Children heading={heading} changeHeadingOnClick={changeHeading} />
    
    {/* Child changing data */}

    </>
  )
}

export default Parent