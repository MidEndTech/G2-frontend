import { useState } from "react";

const BlogPostPage = () => {
  const [likes, setLikes] = useState(0);

  const handleLikes = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="card">
      <div className="card-header">
        <div className="user-info">
          <div className="avatar"></div>
          <div>
            <h3 className="username">Feisal</h3>
            <h4 className="title">Software Dev</h4>
          </div>
        </div>
        <div className="post-options">
          <span className="post-date">6 2024</span>
          <span className="options-icon">⋮</span>
        </div>
      </div>
      <div className="card-content">
        <p>
          wdawkdakpwodakwdopawkwoakd awkdaowdkapowdkaowpdk
          oakwdoapwdkaowdkaodawdkopk.
        </p>
      </div>
      <div className="card-like">
        <div className="likes-item">
          <button className="like-icon" onClick={handleLikes}>1
            ♡
          </button>
          {/* <span>12</span> */}
        </div>
        <div className="footer-item">
          <span className="icon"> 📊</span>
          <span>202K</span>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
