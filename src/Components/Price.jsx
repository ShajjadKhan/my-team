import React from "react";
import Button from "../Components/Button";
export default function Price() {
  return (
    <div className="price">
      <h1 className="primaryColor flex justify-between">
        Regular Price : <p className="text-[#acacac]">200Tk</p>
      </h1>
      <div className="btns flex justify-center items-center flex-col w-full gap-2">
        <Button btnName="Add To Cart" />
        <Button btnName="Buy Now" />
      </div>
    </div>
  );
}
