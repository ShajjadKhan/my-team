import React from "react";

export default function PageTitle({pageMaintitle,pageName,pageDes}) {
  return (
    <div className="page-title w-full textColor text-center flex justify-center items-center flex-col mt-10">
      <h1 className="text-3xl font-bold primaryColor">{pageMaintitle}</h1>
      <h1>
        Home <span className="indecator"></span> {pageName}
      </h1>
      <p className="w-full lg:w-1/2 text-sm mt-3 text-[#A6A1A1]">
       {pageDes}
      </p>
    </div>
  );
}
