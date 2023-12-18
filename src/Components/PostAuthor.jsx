import React from "react";
import profile from "../../public/img/profile.png";
export default function PostAuthor() {
  return (
    <div className="page-author flex items-center gap-2 secondaryBg borderforrks p-2 cursor-pointer">
      <div className="author-img w-[50px] h-[50px] rounded-[50%] p-[2px] primaryBg">
        <img
          src={profile}
          alt="profile-pic"
          className="w-[full] h-[full] rounded-[50%]"
        />
      </div>
      <div className="author-name ">
        <h1>Rakib Khan Shamim</h1>
        <h3 className="text-sm text-[#acacac] flex justify-center items-center gap-1 ">
          <span className="mb-1"></span> <p>Full Stack Developer</p>
        </h3>
      </div>
    </div>
  );
}
