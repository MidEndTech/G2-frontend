import React from "react";

const BlogDetails = ({ post, onClose, onDelete, onEdit }) => {
  const { userName, title, date, content, initialLike, views } = post;

  // Debug: Log the content
  console.log("Post Content:", content);

  const handleDelete = () => {
    onDelete(post.id);
  };

  const handleEdit = () => {
    onEdit(post);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>
        <div className="card">
          <div className="card-header">
            <div className="user-info">
              <div className="avatar"></div>
              <div>
                <h3 className="username">{userName}</h3>
                <h4 className="title">{title}</h4>
              </div>
            </div>
            <div className="post-options">
              <span className="post-date">{date}</span>
              <button type="button" className="post-options-btn">
                ...
              </button>
            </div>
          </div>
          <div className="card-content">
            <p>{content}</p>
          </div>
          <div className="card-like">
            <div className="likes-item">
              <button type="button" className="like-icon">
                ♡ {initialLike}
              </button>
            </div>
            <div className="footer-item">
              <span className="icon"> 📊</span>
              <span>{views}</span>
            </div>
          </div>
          <div className="card-actions">
            <button className="edit-btn" onClick={handleEdit}>
              Edit Post
            </button>
            <button className="delete-btn" onClick={handleDelete}>
              Delete Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
