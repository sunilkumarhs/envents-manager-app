import React from "react";
import { useSelector } from "react-redux";
import UpCommingEventCard from "./UpCommingEventCard";
import ShimmerUI from "../utils/ShimmerUI";

const UpcomingEventsList = () => {
  const upEventsData = useSelector((store) => store?.upEvents?.upCommingEvents);
  return (
    <div>
      {upEventsData ? (
        <div className="md:flex justify-between flex-wrap max-md:h-[50rem] h-[30rem] overflow-y-scroll no-scrollbar">
          {upEventsData?.map((event, index) => (
            <div key={index}>
              <UpCommingEventCard upEventDetails={event} />
            </div>
          ))}
        </div>
      ) : (
        <ShimmerUI />
      )}
    </div>
  );
};

export default UpcomingEventsList;
