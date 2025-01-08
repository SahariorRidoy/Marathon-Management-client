import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { Typewriter } from "react-simple-typewriter";
import { Helmet } from "react-helmet";
import googleImg from "../../assets/google.png";
import animationData from "../../assets/Animation2.json";
import Lottie from "react-lottie-player";
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userLogin, handleGoogleLogin, setUser } = useContext(AuthContext);
  // Google Login
  const submitGoogleLogin = (e) => {
    e.preventDefault();
    handleGoogleLogin()
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Login Successful!", {
          duration: 4000,
        });
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 500);
      })
      .catch((error) => {});
  };
  // Login
  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Login Successful!", {
          duration: 2000,
        });
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 500);
      })
      .catch((error) => {
        toast.error(
          "Invalid email or password. Please Provide valid information.",
          {
            duration: 4000,
          }
        );
      });
  };

  // Password toggling
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="max-w-[1320px] mx-auto border bg-white shadow-md rounded-md px-6 lg:px-12">
      <Helmet>
        <title>Dashboard | Login</title>
      </Helmet>

      <div className="hero bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row p-0">
          <Lottie
            loop
            animationData={animationData}
            play
            style={{ width: 500, height: 600 }}
          />
          <div className="lg:w-[308px]">
            <div className="text-center mb-8">
              <h1 className="text-[#1D3557] text-3xl font-semibold">
                <Typewriter
                  words={["Login to your account!"]}
                  cursorStyle="|"
                  typeSpeed={70}
                  delaySpeed={1000}
                />
              </h1>
            </div>
            <form onSubmit={handleLogIn} className="space-y-6">
              {/* Email Input */}
              <div>
                <label className="block text-[#457B9D] text-sm font-medium mb-1">
                  Email Address
                </label>
                <input
                  className="w-full border border-gray-300 focus:ring-2 focus:ring-[#24a062] rounded-md px-4 py-2 text-gray-700 placeholder-gray-400 focus:outline-none"
                  type="text"
                  name="email"
                  placeholder="example@mail.com"
                />
              </div>

              {/* Password Input */}
              <div className="relative">
                <label className="block text-[#457B9D] text-sm font-medium mb-1">
                  Password
                </label>
                <input
                  className="w-full border border-gray-300 focus:ring-2 focus:ring-[#24a062] rounded-md px-4 py-2 text-gray-700 placeholder-gray-400 focus:outline-none"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                />
                {showPassword ? (
                  <FaEye
                    onClick={handleShowPassword}
                    className="absolute text-gray-500 right-4 top-[36px] cursor-pointer"
                  />
                ) : (
                  <FaEyeSlash
                    onClick={handleShowPassword}
                    className="absolute text-gray-500 right-4 top-[36px] cursor-pointer"
                  />
                )}
              </div>

              {/* Login Button */}
              <button
                className="w-full bg-[#24a062] hover:bg-[#1f8c56] transition text-white font-semibold py-2 rounded-md"
                type="submit"
              >
                Login
              </button>

              {/* Divider */}
              <div className="flex items-center my-4">
                <div className="flex-grow h-px bg-gray-300"></div>
                <span className="px-2 text-sm text-gray-500">or</span>
                <div className="flex-grow h-px bg-gray-300"></div>
              </div>

              {/* Google Login */}
              <div
                onClick={submitGoogleLogin}
                className="w-full flex items-center justify-center gap-3 border border-gray-300 hover:shadow-lg transition rounded-md py-2 cursor-pointer"
              >
                <img src={googleImg} alt="Google Icon" className="w-6 h-6" />
                <span className="text-gray-700">Login with Google</span>
              </div>

              {/* Register Link */}
              <p className="text-sm text-gray-600 text-center">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="text-[#EA6C00] font-medium hover:underline"
                >
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
