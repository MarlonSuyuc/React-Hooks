import React, { useState } from 'react'

const inicialCart = [
  { id: 1, title: 'product', description: 'Desc' },
  { id: 2, title: 'product 2', description: 'Desc 2' }
]

const ShoppingCart = () => {
  const [cart, setCart] = useState(inicialCart)

  const deleteProduct = (productId) => {
    const changeCart = cart.filter(product => product.id !== productId)
    setCart(changeCart)
  }

  const addProduct = (newProduct) => {
    newProduct.id = Date.now()
    const changeCart = [
      newProduct,
      ...cart
    ]
    setCart(changeCart)
  }

  const updateProduct = (editProduct) => {
    const changedCart = cart.map(product => (
      product.id === editProduct.id
        ? editProduct
        : product
    ))
    setCart(changedCart)
  }

  return (
    <>
      <h1>#5 ShoppingCart(array)</h1>

      <button onClick={() => addProduct({ title: 'New title', description: 'New Des' })} >Add</button>

      <div>
        {cart.map(product => (
          <div key={product.id}>
            <h2>{product.id} {product.title}</h2>
            <p>{product.description}</p>

            <button onClick={() => deleteProduct(product.id)}>Deletee</button>
            <button onClick={() => updateProduct({ id: product.id, title: 'Edit title', description: 'Edit  Desc' })} >update</button>
          </div>
        ))}
      </div>

      <pre>{JSON.stringify(cart,null,2)}</pre>
    </>
  )
}

export default ShoppingCart