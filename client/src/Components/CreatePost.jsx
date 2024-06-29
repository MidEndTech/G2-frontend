import { useState } from "react";

const CreatePost = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body };

    console.log(blog);
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
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Blog body:</label>
          <textarea
            type="text"
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
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
