import React from "react";
import { BsMenuButtonWideFill } from "react-icons/bs";
import { RiSearchEyeLine } from "react-icons/ri";
import { BsFillHeartFill } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaUserLarge } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import signoutUser from "../utils/dataProtection/signoutUser";

const NavBar = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store?.user);
  const dispatch = useDispatch();

  const logOutUser = () => {
    const curUser = { ...user };
    curUser.signedIn = false;
    signoutUser(dispatch, curUser);
  };

  return (
    <div className="w-full xl:pl-10 xl:pr-20 lg:pl-6 lg:pr-12 pl-4 pr-8 py-2 max-md:px-4">
      <div className="flex max-md:justify-between">
        <div className="md:w-2/5">
          <h1 className="text-red-500 font-bold md:text-2xl text-xl">
            BookUsNow
          </h1>
        </div>
        <div className="md:hidden pt-1 flex">
          <RiSearchEyeLine className="text-xl p-0 text-slate-400 mx-2" />
          <BsFillHeartFill className="text-slate-400  p-0 text-xl mx-2" />
          <FaUserLarge className="text-slate-400 p-0 text-xl ml-2" />
        </div>
        <div className="flex w-full max-md:hidden">
          <button className="flex bg-black rounded-md px-3 pt-1 pb-2">
            <BsMenuButtonWideFill className="text-slate-400 mt-1 text-sm" />{" "}
            <p className="text-slate-400 pl-2 text-sm">Categories</p>
          </button>
          <div className="px-2"></div>
          <div className="flex w-full">
            <input
              className="rounded-l-md w-full px-4  text-lg border-2 border-r-0 border-gray-200"
              placeholder="search"
            />
            <div className="px-1 rounded-r-md border-2 border-l-0 border-gray-200">
              <RiSearchEyeLine className="text-2xl p-1 text-slate-400" />
            </div>
          </div>
          <div className="px-5"></div>
          <BsFillHeartFill className="text-slate-400 -mt-1 p-0 text-4xl" />
          <p className="text-slate-400 pl-2 pr-3">Favorites</p>
          {user ? (
            <button
              className="border-2 border-gray-200 rounded-md px-3 pb-1 text-sm text-slate-400"
              onClick={logOutUser}
            >
              SignOut
            </button>
          ) : (
            <button
              className="border-2 border-gray-200 rounded-md px-3 pb-1 text-sm text-slate-400"
              onClick={() => navigate("/login")}
            >
              SignIn
            </button>
          )}
        </div>
      </div>
      <div className="md:flex md:py-3 pt-1 text-center">
        <div className="flex">
          <ImLocation2 className="text-slate-400 text-lg -ml-1" />
          <div className="lg:px-2 px-1"></div>
          <p className="text-slate-400 text-sm">Bengaluru, India</p>
          <MdKeyboardArrowRight className="text-slate-400 text-2xl" />
        </div>
        <div className="xl:pl-48 lg:pl-36 md:pl-10 max-md:py-3">
          <ul className="flex text-slate-400 text-sm max-md:overflow-x-scroll">
            <li className="px-4">Liveshows</li>
            <li className="px-4">Streams</li>
            <li className="px-4">Movies</li>
            <li className="px-4">Plays</li>
            <li className="px-4">Events</li>
            <li className="px-4">Sports</li>
            <li className="pl-4">Activities</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
