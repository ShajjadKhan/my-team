import React from "react";
import PageTitle from "../Components/PageTitle";
import web from "../../public/img/web.png";
import phone from "../../public/img/phone.png";

export default function Services() {
  return (
    <div className="textColor">
      <PageTitle
        pageName="Services"
        pageMaintitle="Simplicity Solutions"
        pageDes="SOME EXPRESSION OF
        OUR CLIENTS"
      />
      <div className="row grid grid-cols-1 lg:grid-cols-4 gap-5 mt-10">
        <div className="service-item flex  items-center flex-col secondaryBg p-2 borderforrks">
          <img src={web} alt="" />
          <div className="service-text">
            <h1 className="text-xl font-bold text-center mt-3 mb-3">Web Development</h1>
            <p className="text-center text-[#7d7d7d]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              repellat id expedita,
            </p>
          </div>
        </div>
        <div className="service-item flex  items-center flex-col secondaryBg p-2 borderforrks">
          <img src={web} alt="" />
          <div className="service-text">
            <h1 className="text-xl font-bold text-center mt-3 mb-3">Web Development</h1>
            <p className="text-center text-[#7d7d7d]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              repellat id expedita,
            </p>
          </div>
        </div>
        <div className="service-item flex  items-center flex-col secondaryBg p-2 borderforrks">
          <img src={web} alt="" />
          <div className="service-text">
            <h1 className="text-xl font-bold text-center mt-3 mb-3">Web Development</h1>
            <p className="text-center text-[#7d7d7d]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              repellat id expedita,
            </p>
          </div>
        </div>
        <div className="service-item flex  items-center flex-col secondaryBg p-2 borderforrks">
          <img src={web} alt="" />
          <div className="service-text">
            <h1 className="text-xl font-bold text-center mt-3 mb-3">Web Development</h1>
            <p className="text-center text-[#7d7d7d]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              repellat id expedita,
            </p>
          </div>
        </div>
       
      </div>
    </div>
  );
}
