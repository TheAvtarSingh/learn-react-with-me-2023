import React, { useState } from 'react'

function Stating() {

  const [isRed, setRed] = useState(false);

  // Using Callback function to get the previous state

  const [count, addCount] = useState(0);

  /*
  const updateCount = () => {
    addCount((prevCount) => {
      console.log('previous count : ',prevCount);
      return prevCount + 1;
    });
  };

  */


  // useState is async

  const updateCount = () => {
    console.log('before function call', count);
    addCount((prevCount) => {
      console.log('previous count : ', prevCount);
      return prevCount + 1;
    });
    console.log('after function call : ', count);
  };

   


  return (
    <div>
      <h1>Change my color</h1>
      {isRed && <h3>Color is Red</h3>}
      <button onClick={() => setRed(!isRed)}>Change color</button>
      <h1>Add Count</h1>
      count: {count}
      <button onClick={updateCount}>Add Count</button>
    </div>
  )
}

export default Stating