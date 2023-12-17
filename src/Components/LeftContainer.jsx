import React from "react";
import profilePic from "../../public/img/profile.png";
import userImg from "../../public/img/icon/user.png";
import orderHistory from "../../public/img/icon/smartphone.png";
import Button from "../Components/Button";
import { NavLink } from "react-router-dom";
export default function LeftContainer() {
  return (
    <div className="leftContainer grid-cols-1 secondaryBg p-3 borderforrks">
      <div className="left-side   flex justify-center items-center flex-col">
        <div className="profile-pic w-[100px] h-[100px] rounded-[50%] p-[5px] primaryBg">
          <img
            src={profilePic}
            alt="user-img"
            className="w-full h-full rounded-[50%]"
          />
        </div>
        <div className="profile-name mt-2 mb-2">
          <h1 className="primaryColor ">Rakib Khan Shamim</h1>
        </div>
        <div className="profile-id mb-2 text-[#acacac]">
          <h2>RksTeam-78956</h2>
        </div>
        <div className="profile-email text-[#acacac]">
          <h2>rakibkhan@gmail.com</h2>
        </div>
        <div className="profile-button mb-2 mt-2">
          <button className="py-1 px-5 primaryBg">Admin</button>
        </div>
      </div>
      <ul className="mt-5 cursor-pointer userDetails">
        <li className="flex gap-2 items-center w-full  p-2">
          <span className="mb-[3px]">
            <img src={userImg} alt="" />
          </span>
          <NavLink to="" className="text-[#acacac]">
            Profile
          </NavLink>
        </li>
        <li className="flex gap-2 items-center w-full  p-2">
          <span className="mb-[3px]">
            <img src={userImg} alt="" />
          </span>
          <NavLink to="" className="text-[#acacac]">
            Additional Info
          </NavLink>
        </li>
        <li className="flex gap-2 items-center w-full  p-2">
          <span className="mb-[3px]">
            <img src={orderHistory} alt="" />
          </span>
          <NavLink to="/orderhistory" className="text-[#acacac]">
            Order History
          </NavLink>
        </li>
        <li className="flex gap-2 items-center w-full  p-2">
          <span className="mb-[3px]">
            <img src={userImg} alt="" />
          </span>
          <NavLink to="" className="text-[#acacac]">
            Address
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
