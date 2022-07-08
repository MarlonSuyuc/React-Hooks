import React, { useState } from 'react'

const inicialProduct = {
  title: 'title',
  description: 'Description',
  img: {
    small: 'small',
    medium: 'medium',
    big: 'big'
  }
}

const ProductApp = () => {
  const [product, setProduct] = useState(inicialProduct)
  // const [product, setProduct] = useState({})

  const updateProduct = (key, value) => {
    setProduct({
      ...product,
      title: 'otro titulo',
      [key] : value
    })
  }
  return (
    <>
      <h2>#4 ProductApp (Objetos)</h2>

      <button onClick={()=>updateProduct('description', 'Nuevo description')}>Update</button>
      <h4>{product.title}</h4>
      <h4>{product.description}</h4>
      {/* <img src={product.img?.big} alt='product'></img> */}
      <hr/>

      <pre>{JSON.stringify(product,null,2)}</pre>

    </>
  )
}

export default ProductApp