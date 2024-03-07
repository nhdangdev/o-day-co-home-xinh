import React from "react";
import Image from "next/image";
import "../assets/css/login.css";

const LoginPage = () => {
  // const container = document.getElementById("container");
  // const registerBtn = document.getElementById("register");
  // const loginBtn = document.getElementById("login");

  // registerBtn.addEventListener("click", () => {
  //   container.classList.add("active");
  // });

  // loginBtn.addEventListener("click", () => {
  //   container.classList.remove("active");
  // });
  return (
    <div className="animate-fade-down ">
      <h1 className="flex justify-center items-center text-5xl font-semibold mb-10 ">
        Login Page
      </h1>
      <div
        className="relative rounded-[30px] shadow-[0_5px_15px_rgba(0,0,0,0.35)] bg-white w-[768px] max-w-full min-h-[480px] overflow-hidden container"
        id="container"
      >
        <div className="absolute top-0 h-full transition-all duration-600 ease-in-out left-0 w-1/2 opacity-0 z-[1] animate-move">
          <form className="bg-white flex items-center justify-center flex-col h-full py-0 px-10">
            <h1>Create Account</h1>
            <div className="social-icons">
              <a
                href="#"
                className="text-[13px] no-underline text-[#333] mt-[15px] mb-[10px] icon"
              >
                <i className="fa-brands fa-google-plus-g"></i>
              </a>
              <a
                href="#"
                className="text-[13px] no-underline text-[#333] mt-[15px] mb-[10px] icon"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="text-[13px] no-underline text-[#333] mt-[15px] mb-[10px] icon"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="#"
                className="text-[13px] no-underline text-[#333] mt-[15px] mb-[10px] icon"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
            <span className="text-[12px]">
              or use your email for registeration
            </span>
            <input
              className="bg-[#eee] border-none my-2 mx-0 py-[10px] px-[15px] text-[13px] rounded-lg w-full outline-0"
              type="text"
              placeholder="Name"
            />
            <input
              className="bg-[#eee] border-none my-2 mx-0 py-[10px] px-[15px] text-[13px] rounded-lg w-full outline-0"
              type="email"
              placeholder="Email"
            />
            <input
              className="bg-[#eee] border-none my-2 mx-0 py-[10px] px-[15px] text-[13px] rounded-lg w-full outline-0"
              type="password"
              placeholder="Password"
            />
            <button className="bg-[#512da8] text-white text-xs py-[10px] px-[45px] rounded-lg font-semibold mt-[10px] uppercase border to-transparent tracking-[0.5px] cursor-pointer">
              Sign Up
            </button>
          </form>
        </div>
        <div className="absolute top-0 h-full transition-all duration-600 ease-in-out left-0 w-1/2 z-[2]">
          <form className="bg-white flex items-center justify-center flex-col h-full py-0 px-10">
            <h1>Sign In</h1>
            <div className="social-icons">
              <a
                href="#"
                className="text-[13px] no-underline text-[#333] mt-[15px] mb-[10px] icon"
              >
                <i className="fa-brands fa-google-plus-g"></i>
              </a>
              <a
                href="#"
                className="text-[13px] no-underline text-[#333] mt-[15px] mb-[10px] icon"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="text-[13px] no-underline text-[#333] mt-[15px] mb-[10px] icon"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="#"
                className="text-[13px] no-underline text-[#333] mt-[15px] mb-[10px] icon"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
            <span className="text-[12px]">or use your email password</span>
            <input
              className="bg-[#eee] border-none my-2 mx-0 py-[10px] px-[15px] text-[13px] rounded-lg w-full outline-0"
              type="email"
              placeholder="Email"
            />
            <input
              className="bg-[#eee] border-none my-2 mx-0 py-[10px] px-[15px] text-[13px] rounded-lg w-full outline-0"
              type="password"
              placeholder="Password"
            />
            <a className="hover:text-red-600" href="#">
              Forget Your Password?
            </a>
            <button className="bg-[#512da8] text-white text-xs py-[10px] px-[45px] rounded-lg font-semibold mt-[10px] uppercase border to-transparent tracking-[0.5px] cursor-pointer">
              Sign In
            </button>
            <span className="underline text-sm mt-2 text-gray-400 hover:text-gray-500 cursor-pointer">
              Back To Home
            </span>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all of site features</p>
              <button className="hidden" id="login">
                Sign In
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hello, Friend!</h1>
              <p>
                Register with your personal details to use all of site features
              </p>
              <Image />
              <button className="hidden" id="register">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
