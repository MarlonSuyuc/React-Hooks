import React, { useState } from 'react'

const ErrorApp = () => {
  const [error, setError] = useState('')
  return (
    <>
      <h2>#3 ErrorApp</h2>
      <button onClick={()=>setError('Error al traer con la API')}>Error</button>
      <button onClick={()=>setError('Credenciale incorrectas')}>another Error</button>
      <button onClick={()=>setError('')}>Proceso exitoso</button>
      {
        error && <h2>{error}</h2>
      }
    </>
  )
}

export default ErrorApp