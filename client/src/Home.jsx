import { useState } from "react";
import BlogPost from "./Pages/BlogPost";
import CreatePost from "./Components/CreatePost";
import "./Home.css";

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

  const c = (newPost) => {
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
    <div className="herosection">
      <video src="src\assets\video-2.mp4" autoPlay loop muted />
      <h1 className="headerr">HASHTAG BLOG</h1>
      <p> Welcome to the Public Blog This site is an interactive content sharing <br/> platform aimed at fostering communication and exchange <br/> among people around the world. </p>

      <div className="button">
        <button className="btn">Read More..</button>
      </div>
      <div className="contianer">
        <div className="blogs-header">
          <h2 className="posts-hdr">Posts</h2>
          <a href="#" className="btn-crt" onClick={openCreate}>
            Create
          </a>
        </div>
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
    </div>

      {showCreate && <CreatePost onClose={closeCreate} />}
    </>
  );
};

export default Home;