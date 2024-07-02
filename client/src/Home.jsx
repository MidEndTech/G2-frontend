import { useState } from "react";
import BlogPost from "./Pages/BlogPost";
import CreatePost from "./Components/CreatePost";
import "./postHome.css";

const Home = () => {
  const [showCreate, setShowCreate] = useState(false);
  const [posts, setPosts] = useState([
    {
      userName: "John Doe",
      title: "My first blog post",
      date: "2021-08-01",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo.",
      initialLike: 0,
      views: 100,
    },
    {
      userName: "BOB",
      title: "My first blog post",
      date: "2021-08-01",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo.",
      initialLike: 0,
      views: 100,
    },

    
   
  ]);

  const addPost = (newPost) => {
    // const date = new Date().toISOString().split("T")[0];
    setPosts([...posts, { ...newPost, initialLike: 0, views: 0 }]);
  };
  const openCreate = () => {
    setShowCreate(true);
  };
  const closeCreate = () => {
    setShowCreate(false);
  };

  return (
    <>
      <div className="contianer">
        <div className="blogs-header">
          <h2 className="posts-hdr">Blog</h2>
          <a href="#" className="btn-crt" onClick={openCreate}>
            Create
          </a>
        </div>
        <section className="blogs">
          <div className="posts1" >
        {posts.map((post, key) => (
          <BlogPost
            key={key}
            userName={post.userName}
            title={post.title}
            date={post.date}
            content={post.content}
            initialLike={post.initialLike}
            views={post.views}
          />
        ))}
        </div> 
        </section>
      </div>
      
    

      {showCreate && <CreatePost onClose={closeCreate} />}
    </>
  );
};

export default Home;