import React from "react";
import { IMG_PATH } from "../utils/constants";
import { ImLocation2 } from "react-icons/im";

const UpCommingEventCard = ({ upEventDetails }) => {
  const poster = upEventDetails?.imgUrl;
  const posterId = poster.split("/");
  const dateData = upEventDetails?.date?.split("T");
  const months = [
    "",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const sortedDate = dateData[0].split("-");
  const strDate = `${months[sortedDate[1].slice(1)]} ${sortedDate[2]}, ${
    sortedDate[0]
  }`;
  const distance = Number(upEventDetails?.distanceKm);
  return (
    <div className="py-4 w-full pr-6">
      <div className="py-2 xl:w-[300px] xl:h-[18rem] md:w-[360px] md:h-[20rem]  w-full relative border-[1px] bg-white border-gray-300 rounded-md">
        <div className="w-full h-[80%] relative">
          <div className="absolute w-full bottom-3 xl:bottom-3 md:bottom-4 px-4">
            <div className="browseBg1 py-1 px-6 rounded-b-md">
              <p className="text-sm text-white">{strDate}</p>
            </div>
          </div>
          <img
            className="rounded-md h-full w-full"
            alt="movieImage"
            src={IMG_PATH + posterId[5]}
          />
        </div>
        <div className="w-full text-xs lg:px-4 px-5 lg:bottom-5 font-semibold bottom-6">
          <p className="font-bold text-sm">{upEventDetails?.eventName}</p>
          <div className="flex justify-between py-2">
            <div className="flex">
              <ImLocation2 className="text-xl" />
              <p>{upEventDetails?.cityName}</p>
            </div>
            <p>
              {upEventDetails?.weather} | {distance.toFixed(2)}KM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpCommingEventCard;
