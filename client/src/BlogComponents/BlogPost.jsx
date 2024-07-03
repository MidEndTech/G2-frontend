import "../styles/Blog.css";

const BlogPostPage = ({
  userName,
  title,
  date,
  content,
  initialLike,
  views,
}) => {
  return (
    <form>
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
              ♡
            </button>
          </div>
          <div className="footer-item">
            <span className="icon"> 📊</span>
            <span>{views}</span>
          </div>
        </div>
      </div>
    </form>
  );
};

export default BlogPostPage;
