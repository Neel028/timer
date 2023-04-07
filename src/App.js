import React, { useEffect, useState } from 'react'
import './app.css'

function App() {

    let [state, setstate] = useState(0)

    useEffect(() => {
        const time = setInterval(() => {
            setstate(++state)
        }, 1000)


        return () => {
            clearInterval(time)
        }
    },[state])


    return (
        <div>
            <h1>{state}</h1>
        </div>
    )

}

export default App;
