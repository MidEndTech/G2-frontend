import { useState } from "react";

const CreatePost = ({ onClose, addPost }) => {
  // const [title, setTitle] = useState("");
  // const [body, setBody] = useState("");

  const [posts, setPosts] = useState([]);

  const [newPost, setNewPosts] = useState({
    userName: "Anonymous",
    title: "",
    body: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPosts({ ...newPost, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(newPost);

    setNewPosts({ userName: "SPACE", title: "", body: "" });
    onClose();
  };

  return (
    <div className="create">
      <div className="blog-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h1 className="blog-crt-header">Create Post</h1>
        <form onSubmit={handleSubmit}>
          <label>Subject</label>
          <input
            type="text"
            name="title"
            required
            value={newPost.title}
            onChange={handleInputChange}
          />
          <label>Blog body:</label>
          <textarea
            type="text"
            name="body"
            required
            value={newPost.body}
            onChange={handleInputChange}
          ></textarea>
          <button type="submit" className="btn-submit">
            Submitg
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;