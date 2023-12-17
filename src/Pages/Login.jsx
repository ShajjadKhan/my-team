import React, { useContext, useState } from "react";
import Button from "../Components/Button";
import { Link, useNavigate } from "react-router-dom";
import register from "../../public/img/authentication/login.svg";
import { MyContext } from "../Provider/Provider";
export default function Login() {
  const { login } = useContext(MyContext);
  const [myerror, setMyError] = useState(null);
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true)
    const email = e.target.email.value;
    const password = e.target.password.value;
    setTimeout(() => {
      setLoading(false)
      login(email, password)
        .then((user) => {
          if (user) {
            navigate("/");
          }
        })
        .catch((err) => {
          if (err.code == "auth/invalid-credential") {
            setMyError("Invalid User!");
          }
        });
    }, 1000);
  };
  return (
    <form onSubmit={handleLogin}>
      <div className="row flex justify-between items-center form gap-3 mt-10">
        <div className="left-side hidden lg:block w-[50%] ">
          <img src={register} className="w-full" alt="" />
        </div>
        <div className="right-side textColor w-full lg:w-[50%] bg-[#00002C] p-3 lg:p-8">
          <div className="form-content text-center flex justify-center items-center flex-col">
            <h1 className="text-2xl font-medium">Login</h1>
            <p className="text-[#A6A1A1] w-full lg:w-[80%] text-sm mt-2">
              Do not share your login information with anyone{" "}
            </p>
          </div>
          <div className="form-group">
            {myerror && <p className="primaryBg p-2 mt-2">{myerror}</p>}
            <div className="form-control">
              <h3 className="text-sm">
                Your Email Address<span className="primaryColor">*</span>
              </h3>
              <input type="text" placeholder="example@gmail.com" name="email" required/>
            </div>
            <div className="form-control">
              <h3 className="text-sm">
                Your Password <span className="primaryColor">*</span>
              </h3>
              <input type="text" placeholder="password123$#" name="password" required/>
            </div>
            <div className="form-control">
              <p className="text-[#A6A1A1]">
                New here ?{" "}
                <Link to="/register" className="primaryColor">
                  Register
                </Link>{" "}
                in seconds to access exclusive features and personalized
                content!{" "}
              </p>
            </div>
           
            <div className="form-control flex flex-col">
              {loading ? (
                <button className="spinner py-2 px-5 text-white rounded-sm btn">
                  <span></span>
                </button>
              ) : (
                <Button btnName="Login"></Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
