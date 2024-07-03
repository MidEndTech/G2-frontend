import React, { useState } from "react";
import CreatePost from "./BlogComponents/CreatePost";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const PostHeader = () => {
  const [showCreate, setShowCreate] = useState(false);
  const navigate = useNavigate();


  const user = Cookies.get("accessToken");

  
    const openCreate = () => {
    if(user !== undefined){
        setShowCreate(true);
      }else{
        navigate("/LogInPage", { replace: true });
      } 
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