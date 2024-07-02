import { useState } from "react";

import BlogDetails from "./BlogComponents/BlogDetails";
import EditPost from "./BlogComponents/EditBlog";
import "./Home.css";

import BlogPost from "./Pages/BlogPost";
import "./postHome.css";


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

  const [editingPost, setEditingPost] = useState(null);

  const addPost = (newPost) => {
    setPosts([
      ...posts,
      { ...newPost, id: posts.length + 1, initialLike: 0, views: 0 },
    ]);
  };


  const updatePost = (updatedPost) => {
    setPosts(
      posts.map((post) => (post.id === updatedPost.id ? updatedPost : post))
    );
    setEditingPost(null);
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

  const openEdit = (post) => {
    setEditingPost(post);
  };

  const closeEdit = () => {
    setEditingPost(null);
  };

  const deletePost = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
    setSelectedPost(null);
  };
  return (
    <>
   
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
      {selectedPost && (
        <BlogDetails
          post={selectedPost}
          onClose={closeDetails}
          onDelete={deletePost}
          onEdit={openEdit}
        />
      )}
      {editingPost && (
        <EditPost
          post={editingPost}
          onClose={closeEdit}
          savePost={updatePost}
        />
      )}

    </>
  );
};

export default Home;
