import React from "react";
import NavBar from "../auth/NavBar";
import { useSelector } from "react-redux";
import ShimmerUI from "../utils/ShimmerUI";
import decryptData from "../utils/dataProtection/decryptData";
import { BiArrowFromLeft } from "react-icons/bi";
import RecomendedList from "./RecomendedList";
import MainDetailsPage from "./MainDetailsPage";
import UpcomingEventsList from "./UpcomingEventsList";

const BrowsePage = () => {
  const bgImageLink = useSelector((store) => store?.events?.detailsLink);
  const recomendedEvents = useSelector(
    (store) => store?.events?.recomendedData
  );

  return (
    <div>
      <NavBar />
      {bgImageLink && recomendedEvents ? (
        <div className="relative overflow-hidden">
          <div className="absolute h-screen">
            <div className="w-screen h-screen browseBg1 absolute"></div>
            <img
              src={decryptData(bgImageLink?.bannerImage)}
              alt="bannerImage"
              className="h-screen w-screen object-cover"
            />
          </div>
          <div className="relative">
            <MainDetailsPage />
            <div className="lg:py-8 py-10"></div>
            <h1 className="text-white font-bold flex pl-10 md:pl-20 xl:pl-32">
              Recomended Shows <BiArrowFromLeft className="text-2xl mt-[2px]" />
            </h1>
            <div className=" pl-10 md:pl-20 xl:pl-32">
              <RecomendedList recEventsData={recomendedEvents} />
            </div>
            <div className="lg:py-2 py-4"></div>
            <h1 className="bg-white text-black font-bold flex pl-10 md:pl-20 xl:pl-32">
              Upcomming Shows <BiArrowFromLeft className="text-2xl mt-[2px]" />
            </h1>
            <div className="py-2 bg-white"></div>
            <div className=" pl-10 md:pl-20 xl:pl-32">
              <UpcomingEventsList />
            </div>
          </div>
        </div>
      ) : (
        <ShimmerUI />
      )}
    </div>
  );
};

export default BrowsePage;
