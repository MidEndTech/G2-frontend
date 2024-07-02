import{ useState } from "react";

const EditPost = ({ post, onClose, savePost }) => {


  const [editedPost, setEditedPost] = useState(post);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedPost({ ...editedPost, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    savePost(editedPost);
    onClose();
  };

  return (
    <div className="edit">
      <div className="blog-content">
        <span className="close" onClick={onClose}>
          ×
        </span>
        <h1 className="blog-edit-header">Edit Post</h1>
        <form onSubmit={handleSubmit}>
          <label>Subject</label>
          <input
            type="text"
            name="title"
            required
            value={editedPost.title}
            onChange={handleInputChange}
          />
          <label>Blog body:</label>
          <textarea
            type="text"
            name="content"
            required
            value={editedPost.content}
            onChange={handleInputChange}
          ></textarea>
          <button type="submit" className="btn-submit">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditPost;