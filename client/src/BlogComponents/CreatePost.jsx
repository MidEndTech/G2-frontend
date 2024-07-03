import { useState } from "react";

const CreatePost = ({ onClose, addPost }) => {
  const [newPost, setNewPosts] = useState({
    subject: "",
    content: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPosts({ ...newPost, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(newPost);

    setNewPosts({ title: "", content: "" });
    onClose();
  };


  return (
    <div className="create">
      <div className="blog-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h1 className="blog-crt-header">Create Post</h1>
        <form className="form1" onSubmit={handleSubmit}>
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
            name="content"
            required
            value={newPost.content}
            onChange={handleInputChange}
          ></textarea>
          <button type="submit" className="btn-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
