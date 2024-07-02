const BlogPostPage = ({
  userName,
  title,
  date,
  content,
  initialLike,
  views,
}) => {
  // const [likes, setLikes] = useState(0);

  // const handleLikes = () => {
  //   setLikes(likes + 1);
  // };

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
          </div>
        </div>
        <div className="card-content">
          <p>{content}</p>
        </div>
        <div className="card-like">
          <div className="likes-item">
            <button className="like-icon"> ♡</button>
          </div>
          <div className="footer-item">
            <span className="icon"> 📊</span>
            <span>{views}</span>
          </div>
          <div className="footer-item">
            <button className="btn-details">Details</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default BlogPostPage;