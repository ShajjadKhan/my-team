import React, { useState } from "react";
import PageTitle from "../Components/PageTitle";
import list from "../../public/img/icon/list.png";
import grid from "../../public/img/icon/menu.png";
import projectImg from "../../public/img/project/1-video-gallery 2.png";
import Button from "../Components/Button";
import { Link, useLoaderData } from "react-router-dom";
export default function Portfolio() {

 const obj = useLoaderData();
 console.log(obj)
  return (
    <div className="textColor">
      <PageTitle pageMaintitle="Impressive Portfolio" pageName="Portfolio" />
   
      <div className="row grid grid-cols-1 lg:grid-cols-3 gap-5">
        {obj.map((data) => (
          <div className="portfolio-item borderforrks mt-3 p-2 bg-[#00002C]">
            <div className="portfolio-img w-full">
              <img
                src={projectImg}
                className="w-full h-[150px] lg:h-[200px] object-cover"
                alt=""
              />
            </div>
            <div className="portfolio-text mt-2 w-full flex justify-between items-center">
              <div className="text-content">
                <h1 className="primaryColor">
                  Name :{" "}
                  <span className="text-[#A6A1A1]">Chat Application</span>
                </h1>
                <p className="primaryColor">
                  Price : <span className="text-[#A6A1A1]">200Tk</span>
                </p>
              </div>
              <Link to={`/viewdetails/${data.id}`}>
              <Button btnName="View" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
