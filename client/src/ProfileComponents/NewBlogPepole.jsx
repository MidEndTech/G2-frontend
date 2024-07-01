import React, { useState } from "react";

function NewBlogPepole() {
  const [newBlogUsers, setNewBlogUser] = useState([
    {
      AvatarImgUrl: "",
      firstName: "Shelby",
      lastName: "Goode",
      status: "Online",
    },
    {
      AvatarImgUrl: "",
      firstName: "Rebert",
      lastName: "Bacins",
      status: "Busy",
    },
    {
      AvatarImgUrl: "",
      firstName: "John",
      lastName: "Carilo",
      status: "Online",
    },
    {
      AvatarImgUrl: "",
      firstName: "Adriene",
      lastName: "Watson",
      status: "Online",
    },
  ]);

  return (
    <div>
      <h2 style={{ fontSize: "bold" }}>New Blog</h2>
      {newBlogUsers.map((element, index) => {
        //todo:after change to the branch
      })}
    </div>
  );
}

export default NewBlogPepole;
