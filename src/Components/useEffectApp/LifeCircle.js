import React, { useState, useEffect } from 'react'
console.log('ggg ')
const LifeCircle = () => {
  const [counter1, setCounter1] = useState(0)
  const [counter2, setCounter2] = useState(0)

  /** useEffect: Recibe 2 parametros:
   * 1: Es una funcion 
   * 2: Es un arreglo de dependencias q podemos enviarlo o no, deacuerdo lo q le enviamos en dicho arreglo de Dependencias el useEffect se comportara de una forma 
   * La funcion que esta dentro del efecto se va a ejecutar cada vez que haya un render de componente es decir:  cada vez que se Cargue o cada vez que cambie un estado del componente, pues esto vuelve a generar una renderizacion y en effecto se ejecuta esta funcion
  */

  //  cuando no le pasamos el array se va a ejecutar la primera vez q cargue el componente y cada vez que el estado cambie es decir cada vez q aumnetamso el counter
  useEffect(() => {
    console.log('useEffect no dependency')
  })

  // cuando le pasamos el array  se va a ejecutar la primera vez q cargue el componente y nunca mas se va ejecutar no importando se cambia el estado solo una vez se va a ejecutar
  useEffect(()=>{
    console.log('useEffect []')
  },[])

  // cuando le pasamos el array con dependencias, el useEffect se va a ejecutar  en la primera carga del componente Y CADA vez que el estado cambie en el counter1
  useEffect(()=>{
    console.log('useEffect [counter1]')
  },[counter1])
  // cuando le pasamos el array con dependencias, el useEffect se va a ejecutar  en la primera carga del componente Y CADA vez que el estado cambie en el counter2
  useEffect(()=>{
    console.log('useEffect [counter2]')
  },[counter2])

  // cuando le pasamos el array con dependencias, el useEffect se va a ejecutar  en la primera carga del componente Y CADA vez que el estado cambie en counter1 o en counter 2
  useEffect(()=>{
    console.log('useEffect [counter1, counter2]')
  },[counter1, counter2])

  return (
    <>
      <h1>Ciclo de vida en React</h1>
      <h2>Clicks c1: {counter1}</h2>
      <h2>Clicks c2: {counter2}</h2>

      <button onClick={() => setCounter1(counter1 + 1)}>
        Increment c1
      </button>
      <button onClick={() => setCounter2(counter2 + 1)}>
        Increment c2
      </button>
    </>
  )
}

export default LifeCircle