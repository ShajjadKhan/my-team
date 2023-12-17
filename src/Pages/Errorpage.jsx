import React from "react";
import Navbar from "../Components/Navbar";
import notFound from "../../public/img/404/404.png";
export default function Errorpage() {
  return (
    <div>
       <Navbar />
       <div className="textColor flex justify-center items-center flex-col">
     
     <div className="w-[400px] flex justify-center items-center">
       <img className="w-full" src={notFound} alt="" />
     </div>
     <h1 className="text-3xl font-bold mt-5">Oops 404 Not Found</h1>
   </div>
    </div>
   
  );
}
