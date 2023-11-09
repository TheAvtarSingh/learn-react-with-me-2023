import React, { useState } from 'react'

function ArraysAndMaps() {
    const [data, setData] = useState([
    { id: 1, name: 'John Doe', age: 24 },
    { id: 2, name: 'Jane Doe', age: 23 },
    { id: 3, name: 'John Smith', age: 20 },
    { id: 4, name: 'Jane Smith', age: 21 },
    { id: 5, name: 'John Doe', age: 24 },
    { id: 6, name: 'Jane Doe', age: 23 },
    { id: 7, name: 'John Smith', age: 20 },
    { id: 8, name: 'Jane Smith', age: 21 },
    { id: 9, name: 'John Doe', age: 24 },
    { id: 10, name: 'Jane Doe', age: 23 },
    { id: 11, name: 'John Smith', age: 20 },
    { id: 12, name: 'Jane Smith', age: 21 },
    ]);

    const addData = () => {
        setData([...data, {id: 13, name: 'John Doe', age: 24}])
    }
  return (
    <div>
        <ol>
            {/* Need of Key --- It is used for performance improvement beacause if we like update the data not whole data will be changed it only changes the changed key
            -- if the key is not unique / duplication is there then it will rerender/update the multiple values which makes application slow */}
            {data.map((item)=> <li key={item.id}>{item.name}</li>)}
        </ol>
        <button onClick={addData}></button>
    </div>
  )
}

export default ArraysAndMaps