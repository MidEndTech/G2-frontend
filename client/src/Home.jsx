import { useState } from "react";

import BlogPost from "./Pages/BlogPost";
import CreatePost from "./Components/CreatePost";

const Home = () => {
  const [showCreate, setShowCreate] = useState(false);

  const openCreate = () => {
    setShowCreate(true);
  };
  const closeCreate = () => {
    setShowCreate(false);
  };

  return (
    <>
      <div className="contianer">
        <div className="blogs-header">
          <h2 className="posts-hdr">posts</h2>
          <a href="#" className="btn-crt" onClick={openCreate}>
            create
          </a>
        </div>
        <BlogPost
          userName={"John Doe"}
          title={"My first blog post"}
          date={"2021-08-01"}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo."
          }
          initialLike={0}
          views={100}
        />
        <BlogPost
          userName={"BOB"}
          title={"My first blog post"}
          date={"2021-08-01"}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo."
          }
          initialLike={0}
          views={100}
        />
      </div>

      {showCreate && <CreatePost onClose={closeCreate} />}
    </>
  );
};

export default Home;
