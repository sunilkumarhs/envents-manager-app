import React, { useCallback, useRef, useState } from "react";
import { useSelector } from "react-redux";
import UpCommingEventCard from "./UpCommingEventCard";
import ShimmerUI from "../utils/ShimmerUI";
import useGetNestUpEvents from "../utils/hooks/useGetNestUpEvents";

const UpcomingEventsList = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const observer = useRef();
  const { loading, hasMore, error } = useGetNestUpEvents(
    "upcoming",
    pageNumber
  );
  const upEventsData = useSelector((store) => store?.upEvents?.upCommingEvents);
  const lastEventElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && pageNumber <= 4) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [loading, hasMore]
  );

  if (error) console.log(error);

  return (
    <div>
      {upEventsData ? (
        <div>
          <div className="py-2 text-3xl">{loading && "Loading...."}</div>
          <div className="md:flex justify-between flex-wrap max-md:h-[50rem] h-[30rem] overflow-y-scroll no-scrollbar">
            {upEventsData?.map((event, index) => {
              if (upEventsData.length === index + 1) {
                return (
                  <div ref={lastEventElementRef} key={index}>
                    <UpCommingEventCard upEventDetails={event} />
                  </div>
                );
              } else {
                return (
                  <div key={index}>
                    <UpCommingEventCard upEventDetails={event} />
                  </div>
                );
              }
            })}
          </div>
        </div>
      ) : (
        <ShimmerUI />
      )}
    </div>
  );
};

export default UpcomingEventsList;
