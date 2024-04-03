import React from "react";
import { IMG_PATH } from "../utils/constants";
import { ImLocation2 } from "react-icons/im";
// import { useNavigate } from "react-router-dom";

const EventCard = ({ eventDetails }) => {
  //   const navigate = useNavigate();
  const poster = eventDetails?.imgUrl;
  const posterId = poster.split("/");
  const dateData = eventDetails?.date?.split("T");
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
  const distance = Number(eventDetails?.distanceKm);
  return (
    <div className="py-2 pr-4">
      <div className="py-2 lg:w-[200px] lg:h-[18rem] w-[17rem] relative">
        <div className="text-white w-full absolute text-xs lg:px-4 px-5 lg:bottom-5 bottom-6">
          <p className="font-bold py-1">{eventDetails?.eventName}</p>
          <div className="flex justify-between ">
            <div className="flex">
              <ImLocation2 className="mt-[2px]" />
              <p>{eventDetails?.cityName}</p>
            </div>
            <p>{strDate}</p>
          </div>
          <div className="flex justify-between py-1">
            <p>{eventDetails?.weather}</p>
            <p>{distance.toFixed(2)}KM</p>
          </div>
        </div>
        <img
          className="rounded-md h-full w-full"
          alt="movieImage"
          src={IMG_PATH + posterId[5]}
        />
      </div>
    </div>
  );
};

export default EventCard;
