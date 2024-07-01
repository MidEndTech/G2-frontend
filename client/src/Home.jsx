  import { useState } from "react";
  import BlogPost from "./BlogComponents/BlogPost";
  import CreatePost from "./BlogComponents/CreatePost";
  import BlogDetails from "./BlogComponents/BlogDetails";
  import "./Home.css";

  const Home = () => {
    const [showCreate, setShowCreate] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);
    const [posts, setPosts] = useState([
      {
        id: 1,
        userName: "John Doe",
        title: "My first blog post",
        date: "2021-08-01",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        initialLike: 0,
        views: 100,
      },
    ]);

    const addPost = (newPost) => {
      setPosts([...posts, { ...newPost, id: posts.length + 1, initialLike: 0, views: 0 }]);
    };

    const openCreate = () => {
      setShowCreate(true);
    };

    const closeCreate = () => {
      setShowCreate(false);
    };

    const openDetails = (post) => {
      setSelectedPost(post);
    };

    const closeDetails = () => {
      setSelectedPost(null);
    };

    const deletePost = (postId) => {
      setPosts(posts.filter(post => post.id !== postId));
      setSelectedPost(null); // Close the details modal after deletion
    };
    return (
      <>
        <div className="herosection">
          <video src="src/assets/video-2.mp4" autoPlay loop muted />
          <h1 className="headerr">HASHTAG BLOG</h1>
          <p>
            Welcome to the Public Blog This site is an interactive content sharing...
          </p>

          <div className="button">
            <button className="btn">Read More..</button>
          </div>
          <div className="container">
            <div className="blogs-header">
              <h2 className="posts-hdr">Posts</h2>
              <a href="#" className="btn-crt" onClick={openCreate}>
                Create
              </a>
            </div>
            {posts.map((post) => (
              <div key={post.id} onClick={() => openDetails(post)}>
                <BlogPost
                  userName={post.userName}
                  title={post.title}
                  date={post.date}
                  content={post.content}
                  initialLike={post.initialLike}
                  views={post.views}
                />
              </div>
            ))}
          </div>
        </div>

        {showCreate && <CreatePost onClose={closeCreate} addPost={addPost} />}
        {selectedPost && <BlogDetails post={selectedPost} onClose={closeDetails} onDelete={deletePost} />}
      </>
    );
  };

  export default Home;