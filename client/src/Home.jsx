import BlogPost from './Pages/BlogPost'


const Home = () => {
  return (
    <>
      <div className="contianer">
        <div className="blogs-header">
          <h2 className="posts-hdr">posts</h2>
          <a href="#" className="btn-crt">
            create
          </a>
        </div>
        <BlogPost />
        <BlogPost />
      </div>
      </>
  )
}

export default Home;
