import React from "react";
import project from "../../public/img/project/project.png";
import Button from "../Components/Button";
export default function PostImageContainer() {
  return (
    <div className="post-img mt-3 p-[2px] primaryBg borderforrks">
      <img src={project} alt="post-img" className="w-full z-0" />
      <div className="preview-overlay textColor">
        <Button btnName="Live Preview" />
      </div>
    </div>
  );
}
