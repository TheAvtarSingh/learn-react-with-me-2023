import React, { useEffect, useState } from 'react'

function Time() {
    const [counter, setCounter] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            console.log(counter);
            setCounter(counter + 1);

        }, 1000)

        return () => clearInterval(interval)
    }, [])
    return (
        <div>{counter}</div>
    )
}

export default Time