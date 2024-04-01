import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import authenticateUser from "../utils/dataProtection/authenticateUser";
import { useNavigate } from "react-router-dom";
import addUserData from "../utils/dataProtection/addUserData";
import decryptData from "../utils/dataProtection/decryptData";

const LoginPage = () => {
  const imageLink = useSelector((store) => store?.imgLink?.loginImg);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const regEmail = useRef(null);
  const name = useRef(null);
  const regPassword = useRef(null);
  const conRegPassword = useRef(null);
  const [singUp, setSingUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const signInUser = () => {
    email.current.value && password.current.value
      ? authenticateUser(
          email.current.value,
          password.current.value,
          setErrorMessage,
          navigate,
          dispatch
        )
      : setErrorMessage("Please enter the your mailId and password!!");
  };
  const signUpUser = () => {
    if (
      regEmail.current.value &&
      name.current.value &&
      regPassword.current.value
    ) {
      if (regPassword.current.value === conRegPassword.current.value) {
        addUserData(
          regEmail.current.value,
          name.current.value,
          regPassword.current.value,
          setSingUp,
          setErrorMessage
        );
      } else {
        setErrorMessage("Password's didn't match!!");
      }
    } else {
      setErrorMessage("Please enter the required credntials!!");
    }
  };
  return (
    <>
      {imageLink ? (
        <div className="overflow-hidden absolute min-h-[100vh] w-full -z-10 block">
          <img
            src={decryptData(imageLink)}
            alt="bg-img"
            className="h-screen  min-w-full"
          />
          <div className="absolute top-0 right-0 bottom-0 left-0 signBg1">
            <div className="absolute top-0 right-0 bottom-0 left-0 signBg2">
              <div className="w-full flex justify-between">
                <div className="px-4 pt-2">
                  <button className="text-red-600 bg-black p-3 font-serif font-bold border-2 border-red-600">
                    Events LookUp
                  </button>
                </div>
                <div className="px-4 pt-2">
                  <button
                    className={`bg-red-500 rounded-md text-sm px-5 my-1 py-2 mx-1 font-semibold text-white ${
                      singUp ? "" : "hidden"
                    }`}
                    onClick={() => setSingUp(false)}
                  >
                    Sign In
                  </button>
                </div>
              </div>
              <form
                className="text-center lg:my-0 my-6"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="signInput md:mx-[250px] xl:mx-[360px] mx-2 md:p-[4rem] p-8">
                  <h1 className="md:text-4xl text-2xl font-semibold text-white text-left">
                    Sign In
                  </h1>
                  <div className="text-left md:py-6 py-3">
                    <input
                      ref={email}
                      placeholder="Email or phone number"
                      type="email"
                      className={`text-l text-white my-2 w-full py-3 px-6 bg-zinc-700 rounded-sm ${
                        singUp ? "hidden" : ""
                      }`}
                    />
                    <input
                      ref={regEmail}
                      placeholder="Email or phone number"
                      type="email"
                      className={`text-l text-white my-2 w-full py-3 px-6 bg-zinc-700 rounded-sm ${
                        singUp ? "" : "hidden"
                      }`}
                    />
                    <input
                      ref={name}
                      placeholder="UserName"
                      type="text"
                      className={`text-l text-white my-2 w-full py-3 px-6 bg-zinc-700 rounded-sm ${
                        singUp ? "" : "hidden"
                      }`}
                    />
                    <input
                      ref={password}
                      placeholder="Password"
                      type="password"
                      className={`text-l text-white my-2 w-full py-3 px-6 bg-zinc-700 rounded-sm ${
                        singUp ? "hidden" : ""
                      }`}
                    />
                    <input
                      ref={regPassword}
                      placeholder="Password"
                      type="password"
                      className={`text-l text-white my-2 w-full py-3 px-6 bg-zinc-700 rounded-sm ${
                        singUp ? "" : "hidden"
                      }`}
                    />
                    <input
                      ref={conRegPassword}
                      placeholder="Confirm Password"
                      type="password"
                      className={`text-l text-white my-2 w-full py-3 px-6 bg-zinc-700 rounded-sm ${
                        singUp ? "" : "hidden"
                      }`}
                    />
                    {errorMessage ? (
                      <p className="text-red-600 font-semibold">
                        {errorMessage}
                      </p>
                    ) : (
                      ""
                    )}
                    <button
                      className={`text-l w-full mt-6 font-semibold text-white bg-red-600 rounded-sm px-14 py-3 ${
                        singUp ? "hidden" : ""
                      }`}
                      onClick={signInUser}
                    >
                      Sign In
                    </button>
                    <button
                      className={`text-l w-full mt-6 font-semibold text-white bg-red-600 rounded-sm px-14 py-3 ${
                        singUp ? "" : "hidden"
                      }`}
                      onClick={signUpUser}
                    >
                      Sign Up
                    </button>
                    <div className="md:py-12 py-6">
                      <p
                        className={`text-l text-slate-500 ${
                          singUp ? "hidden" : ""
                        }`}
                      >
                        New to Events LookUp?{" "}
                        <span
                          className="text-l text-white font-semibold cursor-pointer"
                          onClick={() => setSingUp(true)}
                        >
                          Sign Up Now
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default LoginPage;
