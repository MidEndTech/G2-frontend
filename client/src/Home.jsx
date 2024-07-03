import { useState } from "react";

import Cookies from "js-cookie";
import BlogDetails from "./BlogComponents/BlogDetails";
import EditPost from "./BlogComponents/EditBlog";
import "./Pages/Home.css";

import BlogPost from "./BlogComponents/BlogPost";
import CreatePost from "./BlogComponents/CreatePost";
import "./postHome.css";

const Home = () => {
  const host = import.meta.env.VITE_SERVER_HOST;
  const port = import.meta.env.VITE_SERVER_PORT;


  const [showCreate, setShowCreate] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [likesCount, setLikesNumber] = useState();

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

  // const addPost = (newPost) => {
  //   setPosts([
  //     ...posts,
  //     { ...newPost, id: posts.length + 1, initialLike: 0, views: 0 },
  //   ]);
  // };

  // showPosts
  const showPosts = async (id) => {
    const token = Cookies.get("accessToken");
    const res = await fetch(`http://${host}:${port}/api/${id}`, { 
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  const addPost = async (newPost) => {
    const token = Cookies.get("accessToken");
    const res = await fetch(`http://${host}:${port}/api/store`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newPost),
    });

    if (res.ok) {
      const createdPost = await res.json();
      setPosts([
        ...posts,
        { ...createdPost, id: posts.length + 1, initialLike: 0, views: 0 },
      ]);
    } else {
      console.log("Failed to create post");
    }
  };

  // const updatePost = (updatedPost) => {
  //   setPosts(
  //     posts.map((post) => (post.id === updatedPost.id ? updatedPost : post))
  //   );
  //   setEditingPost(null);
  // };
  const updatePost = async (updatedPost) => {
    const token = Cookies.get("accessToken");
    const res = await fetch(`http://${host}:${port}/api/${updatedPost.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedPost),
    });
x
    if (res.ok) {
      const newPost = await res.json();
      setPosts(
        posts.map((post) => (post.id === updatedPost.id ? newPost : post))
      );
      setEditingPost(null);
    } else {
      console.log("Failed to update post");
    }
  };

  // // async function likeCounter(postId) 

  // const likeCounter = async (postId) => {
  //   const token = Cookies.get("accessToken");
  //   const res = await fetch("", {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${token}`,

  //     },
  //     body: JSON.stringify({ postId }),
  //   });

  

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

  // const deletePost = (postId) => {
  //   setPosts(posts.filter((post) => post.id !== postId));
  //   setSelectedPost(null);
  // };

  const deletePost = async (postId) => {
    const token = Cookies.get("accessToken");
    const res = await fetch(`http://${host}:${port}/api/delete/${postId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.ok) {
      setPosts(posts.filter((post) => post.id !== postId));
      setSelectedPost(null);
    } else {
      console.error("Failed to delete post");
    }
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