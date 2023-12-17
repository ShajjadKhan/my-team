import React from "react";
import LeftContainer from "../Components/LeftContainer";
import { Outlet } from "react-router-dom";

export default function UserDetails() {
  return (
    <div>
      <div className="row textColor grid grid-cols-4 ">
      <LeftContainer/>
        <div className="grid-cols-2"></div>
        <div className="grid-cols-1"></div>
      </div>
 
    </div>
  );
}
