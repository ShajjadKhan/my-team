import React from "react";
import img from '../../public/img/project/1-video-gallery 2.png'
export default function PortfolioItem({className}) {
  return (
    <div className={className}>
      <img src={img} alt="" />
    </div>
  );
}
