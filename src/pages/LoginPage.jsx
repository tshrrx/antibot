// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";
import ParticleBackground from "../particleBackground/ParticleBackground";
import "./css/loginpage.css";
import { ToastContainer } from "react-toastify";
import { errorMessage, notify } from "../utils/Popup";
import { useForm } from "react-hook-form";
import Header from "../components/Login/Header";


const LoginPage = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();
  const [input, setInput] = useState({ email: "", password: "" });
  const [nav,setNav]=useState(false)

  const testData = [
    { email: "userA", password: "password123" },
    { email: "userB", password: "securePass456" },
    { email: "userC", password: "myPass789" },
    { email: "userD", password: "loginPass001" },
    { email: "userE", password: "access2023" },
    { email: "userF", password: "userKey321" },
    { email: "userG", password: "safeLogin876" },
    { email: "userH", password: "uniquePass654" },
    { email: "userI", password: "authCode987" },
    { email: "userJ", password: "welcome123" },
  ];

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
    "m-1 border-2 flex justify-center items-center p-[1px] rounded-xl";

  return (
    <div className="Page">
        <ParticleBackground />
        <div className="w-[100vw] h-[100vh] flex justify-center items-center">
            <div>
              <div>
                <Header content={"Login"}/>
              </div>
              
              <form
              action=""
              className="flex flex-col max-[800px]:text-[12px]"
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
                className="submitBtn text-center text-white textShado transition-all duration-200 hover:scale-95 px-6 py-2 shadow-xl rounded-md onhover:scale-95 font-bold m-3 bg-[#1d1d1d]"
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
    </div>
  );
};

export default LoginPage;
