import React, { useEffect } from 'react'

function Text({dataPassed}) {
    useEffect(() => {
        console.log(`Passed Data updated ${dataPassed}`);
    }, [dataPassed])
  return (
    <div>
        {dataPassed}
    </div>
  )
}

export default Text