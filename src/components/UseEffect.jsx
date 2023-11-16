import React, { useEffect, useState } from 'react'
import Text from './Text'
import Time from './Time'

function UseEffect() {


  // without dependency array

  /*
    useEffect(()=>{
        console.log("This will run on every start and rerender by useState");
    })

    const [data, setData] = useState(0);
*/


  // with dependency array - []

  /*
  useEffect(()=>{
      console.log("This will run on every start not rendering by useState");
  },[])
  const [data, setData] = useState(0);

  */

  // updating data when state vaiable changes 
  /*
  const [data, setData] = useState(0);
  useEffect(() => {
    console.log("Data updated");
  }, [data])  
  */

  // We can also use when we update the props varible to next component
  /*
    const [dataPassed, setDataPassed] = useState(0);
    useEffect(() => {
      console.log("Passed Data updated");
    }, [dataPassed])  
  
  */

    // Memory leak Example -- >

    // check time component
    const [show,setShow] = useState(true);
   
    //  How to solve


  return (

    <div>

      {/* {data}
      <button onClick={() => setData(data + 1)}>Update Data</button> */}
      {/* Passed and Rerender on Props Updation */}
      {/* <button onClick={() => setDataPassed(dataPassed + 1)}>Update Passed Data</button> 
      <Text dataPassed={dataPassed} />
      */}
      {/* Starting Interval at startup */}
      <button onClick={()=>setShow(!show)}>Show/Hide</button>
      {show && <Time />}
    </div>

  )
}

export default UseEffect