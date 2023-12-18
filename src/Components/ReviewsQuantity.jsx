import React from "react";

export default function ReviewsQuantity() {
  return (
    <div className="riviews cursor-pointer ">
      <div className="row flex mt-3 mb-3 lg:mb-0 lg: mtitems-center gap-4">
        <div className="rating">
          <h1 className="primaryColor secondaryBg borderforrks p-2">
            5 Star Rating : <small className="textColor text-base">3.5K</small>
          </h1>
        </div>
        <div className="comment secondaryBg borderforrks p-2">
          <h1 className="primaryColor">
            Comment : <small className="textColor text-base">5K</small>
          </h1>
        </div>
      </div>
    </div>
  );
}
