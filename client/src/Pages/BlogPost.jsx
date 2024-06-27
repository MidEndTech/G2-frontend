import noImg from "../assets/Image_not_available.png";

const BlogPostPage = () => {
  return (
    <>
      <div className="rows">
        <div className="blog">
          <img src={noImg} className="img" />
          <div className="blog-content">
            <h3>Blog Title</h3>
            <p>Blog Content</p>

            <div className="blog-details">
              <a href="#" className="btn-detail">
                Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPostPage;
