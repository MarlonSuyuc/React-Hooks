import React, { useState } from 'react'

const ConditionalApp = () => {
  const [condition, setCondition] = useState(true)

  return (
    <>
      <h2>#2 ConditionalApp(if-else)</h2>
      <button onClick={() => setCondition(!condition)}>Toggle</button>
      {/* {
        condition
          ? <h1>Show message in true</h1>
          : <h1>Anther message in false</h1>
      } */}
      {
        condition &&
        <h1>Show message in true</h1>
      }

      <h4>state value is {condition.toString()}</h4>{/* Mostrando el valor de un Boolean */}
    </>
  )
}

export default ConditionalApp