import React, { useCallback, useEffect, useState } from 'react'
import getPosts from './helpers/getPost'
import getUser from './helpers/getUser'

// const inicialUser = {
//   name: 'Marlon',
//   email: 'Marlon@gmail.com'
// }
// const inicialPost = [
//   {id: 1, title: 'Post 1'},
//   {id: 2, title: 'Post 2'}
// ]
const FetchCard = () => {
  const [user, setUser] = useState({})
  const [post, setPost] = useState([])

  const updateUser = () => {//users
    getUser()
      .then((newUser) => {
        setUser(newUser)
      })
  }

  const updatePost = useCallback(() => { //posts
    getPosts(user.id)
      .then((newPosts) => {
        setPost(newPosts)
      })
  }, [user.id])


  useEffect(() => {//users
    updateUser()
  }, [])

  useEffect(() => {//posts
    if (user?.id) {
      updatePost()
    }
  }, [user, updatePost])


  return (
    <>
      <button onClick={updateUser}>Another user</button>
      <h1>{user.id} {user.name}</h1>
      <h1>{user.email}</h1>
      <br />
      <h2>post -user: {user.id}</h2>
      <ul>
        {post.map(post => (
          <li key={post.id}>{post.body}</li>
        ))}
      </ul>
    </>
  )
}

export default FetchCard