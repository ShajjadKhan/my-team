import React, { useContext, useState } from "react";
import Menus from "./Menus";
import Button from "./Button";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { MyContext } from "../Provider/Provider";

export default function Navbar({ handleClick, click, setClick }) {
  const { user } = useContext(MyContext);
  const [isActive, setIsActive] = useState(false);
  const handleNav = () => {
    setIsActive(true);
  };
  const handleHidemenu = () => {
    setIsActive(false);
  };
  return (
    <div className="navbar">
      <div className="flex justify-between items-center">
        <div className="logo">
          <Logo />
        </div>
        <div
          className={
            isActive ? "active hamburger lg:hidden" : "lg:hidden hamburger"
          }
          onClick={() => setIsActive(!isActive)}
        >
          <span></span>
        </div>
        <div
          className={
            isActive
              ? " menus menubar gap-10 items-center justify-center active"
              : "menus menubar gap-10 items-center justify-center"
          }
        >
          <Menus handleHidemenu={handleHidemenu} />
        </div>
        <div className="lg:block hidden">
          {user ? (
            <Button
              btnName={user.displayName}
              setClick={setClick}
              click={click}
            />
          ) : (
            <Button btnName="Register" />
          )}
        </div>
      </div>
    </div>
  );
}
