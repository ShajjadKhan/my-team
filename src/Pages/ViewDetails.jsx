import React from "react";

import Button from "../Components/Button";
import PostAuthor from "../Components/PostAuthor";
import ReviewsQuantity from "../Components/ReviewsQuantity";
import PostTime from "../Components/PostTime";
import PostImageContainer from "../Components/PostImageContainer";
import PostDetails from "../Components/PostDetails";
import PostTechnologyContainer from "../Components/PostTechnologyContainer";
import Price from "../Components/Price";
export default function ViewDetails() {
  return (
    <div className="textColor">
      <div className="row flex justify-between flex-col lg:flex-row">
        <div className="left-row w-full lg:w-[60%]">
          <div className="page-content">
            <div className="page-title">
              <h1 className="text-xl lg:text-3xl font-bold mt-10">
                KALLYAS - Creative eCommerce Multi-Purpose WordPress Theme
              </h1>
            </div>
            <div className="row flex justify-between flex-col  lg:flex-row items-center mt-4">
              <PostAuthor />
              <ReviewsQuantity />
              <PostTime />
            </div>
            <div className="post-img-container ">
              <PostImageContainer />
            </div>
            <div className="post-btn mt-5 w-full flex justify-center items-center">
              <Button btnName="Live Preview" />
            </div>
            <div className="post-details-container">
              <PostDetails />
            </div>
            <div className="post-technoloy-container">
              <PostTechnologyContainer />
            </div>
          </div>
        </div>
        <div className="right-row view-details-right-side secondaryBg borderforrks p-2 lg:w-[20%] h-[400px] mt-20">
          <Price />
        </div>
      </div>
    </div>
  );
}
