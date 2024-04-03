import React, { useRef, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import EventCard from "./EventCard";

const RecomendedList = ({ recEventsData }) => {
  const ref1 = useRef(null);
  const [scrollvalue, setScrollValue] = useState(0);
  const [mouseState, setMouseState] = useState(false);
  const scrollOffers = (scrollOffset) => {
    ref1.current.scrollLeft += scrollOffset;
    setScrollValue(ref1.current.scrollLeft);
  };
  const mouseIn = () => {
    setMouseState(true);
  };
  const mouseOut = () => {
    setMouseState(false);
  };
  return (
    <div className="">
      <div
        className="flex cursor-pointer overflow-x-scroll no-scrollbar"
        ref={ref1}
        onMouseOver={mouseIn}
        onMouseOut={mouseOut}
      >
        {recEventsData?.map((eventData, index) => (
          <EventCard eventDetails={eventData} key={index} />
        ))}
      </div>
      <button
        className="lg:block hidden float-left signInput lg:-mt-[22%] xl:-mt-[18%] relative z-20 rounded-full m-2"
        onMouseOver={mouseIn}
        onClick={() => scrollOffers(-1090)}
      >
        {mouseState && scrollvalue > 0 ? (
          <IoIosArrowBack className="text-white text-8xl" />
        ) : (
          ""
        )}
      </button>
      <button
        className="lg:block hidden float-right signInput lg:-mt-[22%] xl:-mt-[18%] relative z-20 rounded-full m-2"
        onMouseOver={mouseIn}
        onClick={() => scrollOffers(1090)}
      >
        {mouseState ? (
          <IoIosArrowForward className="text-white text-8xl" />
        ) : (
          ""
        )}
      </button>
    </div>
  );
};

export default RecomendedList;
