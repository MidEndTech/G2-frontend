import { useState } from 'react'

import BlogPost from './Pages/BlogPost'
import CreatePost from './Components/CreatePost'


const Home = () => {
  const [showCreate, setShowCreate] = useState(false)

  const openCreate = () =>{
    setShowCreate(true)
  }
  const closeCreate = () =>{
    setShowCreate(false)
  } 

  return (
    <>
      <div className="contianer">
        <div className="blogs-header">
          <h2 className="posts-hdr">posts</h2>
          <a href="#" className="btn-crt" onClick={openCreate}>
            create
          </a>
        </div>
        <BlogPost />
        <BlogPost />
      </div>

      {showCreate && <CreatePost onClose={closeCreate} />}
      </>
  )
}

export default Home;
