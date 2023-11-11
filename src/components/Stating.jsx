import React, { useState } from 'react'

function Stating() {

    const[isRed, setRed] = useState(false);

  return (
    <div>
        <h1>Change my color</h1>
        {isRed && <h3>Color is Red</h3>}
        <button onClick={() => setRed(!isRed)}>Change color</button>
    </div>
  )
}

export default Stating