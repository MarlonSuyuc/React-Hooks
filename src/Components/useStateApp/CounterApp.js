import React, { useState } from 'react'

export default function CounterApp() {
  const [counter, setCounter] = useState(0)

  return (
    <>
      <h2>#1 contador(numero)</h2>

      <button onClick={() => {
        setCounter(counter + 1)
        // si necesitamos actualizar el estado en le mismo scope devemos de hace lo q siguiente 
        // pasaele una funcion al setCounter cuyo argumento es prevCounter y va a retornar es funcicion es la actualizacion del nuevo estado q en este caso es preCounter + 1 
        // Entonces haria lo siguiente
        //  la primera actualizacion seria conter + 1  y eso nos dara el valor de counter = 1
        // la 2da nos dara el valor de couneter que es 1 y despues le sumara 1  mas  y el resultado de counter sera counter = 2  y el siguiente 4,6,8,10 etc
        setCounter(prevCounter => prevCounter + 1)
      }}>Increment</button>

      <button onClick={() => setCounter(counter - 1)}>Decrement</button>

      <h3>Clicks: {counter}</h3>
    </>
  )
}