import React, { useContext, useState } from "react";
import Button from "../Components/Button";
import { Link, Navigate, useNavigate } from "react-router-dom";
import registerimg from "../../public/img/authentication/register.svg";
import { MyContext } from "../Provider/Provider";
import { Helmet } from "react-helmet-async";

export default function Register() {
  const { register, randomId,error,success } = useContext(MyContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const handleRegister = (e) =>{
    e.preventDefault();
    setLoading(true)
    const name = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    setTimeout(() => {
      setLoading(false)
     register(name,email,password)
    }, 1000);
    
  }
  
  return (
    <form onSubmit={handleRegister}>
      <Helmet>
        <title>Rks Team || Register </title>
      </Helmet>
      <div className="row flex justify-between flex-col lg:flex-row items-center form lg:gap-3 mt-10">
        <div className="left-side hidden lg:block w-[50%] ">
          <img src={registerimg} className="w-full" alt="" />
        </div>
        <div className="right-side textColor w-full lg:w-[50%] bg-[#00002C] p-3 lg:p-8">
          <div className="form-content text-center flex justify-center items-center flex-col">
            <h1 className="text-2xl font-medium">Register</h1>
            <p className="text-[#A6A1A1] w-full lg:w-[80%] text-sm mt-2">
              Create your account today and unlock a world of possibilities!
              Register now to get started."{" "}
            </p>
          </div>
          <div className="form-group">
            {
              error &&  <p className="primaryBg p-2 mt-2">{error}</p>
            }
            {
              success &&  <p className="bg-green-500 p-2 mt-2">{success}</p>
            }
           
            <div className="form-control">
              <h3 className="text-sm">
                Your Name <span className="primaryColor">*</span>
              </h3>
              <input type="text" placeholder="Name" name="username" autoComplete="false" required/>
            </div>
            <div className="form-control">
              <h3 className=" text-sm">
                Your Email Address<span className="primaryColor">*</span>
              </h3>
              <input type="text" placeholder="Email" name="email" autoComplete="false" required/>
            </div>
            <div className="form-control">
              <h3 className=" text-sm">
                Your Password <span className="primaryColor">*</span>
              </h3>
              <input type="text" placeholder="Password" name="password" autoComplete="false" required/>
            </div>
            <div className="form-control">
              <p className="text-[#A6A1A1]">
                Don't Have An Account ?{" "}
                <Link to="/login" className="primaryColor">
                  Login
                </Link>{" "}
              </p>
            </div>

            <div className="form-control flex flex-col">
              {loading ? (
                <button className="spinner py-2 px-5 text-white rounded-sm btn">
                  <span></span>
                </button>
              ) : (
                <Button btnName="Register"></Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
