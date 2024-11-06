/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import Captcha from "../components/Captcha/Button/Captcha";
import Header from "../components/Login/Header";
import { testData } from "../data/user.js";
import ParticleBackground from "../particleBackground/ParticleBackground";
import { errorMessage, notify } from "../utils/Popup";
import "./css/loginpage.css";


const LoginPage = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();
  const [input, setInput] = useState({ email: "", password: "" });
  const result = useSelector((state) => state.captcha.result);
  const [nav,setNav]=useState(false)
  const dispatch = useDispatch();

  // checking user credentials 
  const onSubmit = async (data) => {
    const email = data.email;
    const password=data.password;
    console.log("data:", email, password);
    let flag=false;

    for (let i = 0; i < testData.length; i++) {
      if (email === testData[i].email && password === testData[i].password) {
        flag=true;
        break;
      } 
    }
    if(!flag)errorMessage("login failed");
    else notify("🎉 Login successfull");
  };


  const styling =
    "m-1 w-[17vw] border-2 flex justify-center items-center p-[1px] rounded-xl";

  return (
    <div className="Page">
        <ParticleBackground />
        {(result)?
        <div className="w-[100vw] h-[100vh] flex justify-center items-center">
            <div className="border-2  rounded-xl border-[#D1D5DB] p-20 bg-[#d1d5db28]">
            <div className="mb-[10vh]">
                <Header content={"Login"}/>
              </div>
              
              <form
              action=""
              className="loginForm flex justify-center items-center gap-2 flex-col max-[800px]:text-[12px]"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                className={styling}
                type="text"
                {...register("email")}
                placeholder="Email"
              />
              <input
                className={styling}
                type="password"
                {...register("password")}
                placeholder="Password"
              />
              {
                !nav&&(
                  <input
                className="submitBtn w-[10vw] mt-11 text-center text-white textShado transition-all duration-200 hover:scale-95 px-6 py-2 shadow-xl rounded-md onhover:scale-95 font-bold m-3 bg-[#1d1d1d]"
                disabled={isSubmitting}
                type="Submit"
                name="Submit"
              />
                )
              }
              
            </form>
            </div>
            <ToastContainer /> 
        </div>
        :
        <div>
          <Captcha/>
        </div>
        }
    </div>
  );
};

export default LoginPage;
