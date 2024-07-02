import React, { useState } from "react";
import CreatePost from "./Components/CreatePost";

const PostHeader = () => {
  const [showCreate, setShowCreate] = useState(false);

  const openCreate = () => {
    setShowCreate(true);
  };

  const closeCreate = () => {
    setShowCreate(false);
  };

  return (
    <div>
      <div className="blogs-header">
        <h2 className="posts-hdr">Blog</h2>
        <a href="#" className="btn-crt" onClick={openCreate}>
          Create
        </a>
      </div>
      {showCreate && <CreatePost onClose={closeCreate} />}
    </div>
  );
};

export default PostHeader;