import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../../restAPI/dataTransactions";
import decryptData from "../dataProtection/decryptData";
import { addUpEvents } from "../data/UpcomingEventsSlice";

const useGetUpcomingEvents = () => {
  const dispatch = useDispatch();
  const upEnventsLink = useSelector(
    (store) => store?.events?.detailsLink?.upcomming
  );
  const getUpEvents = async () => {
    const link = decryptData(upEnventsLink);
    try {
      const response = await api.get(link);
      const events = [...response.data.events];
      if (response.status === 200) {
        events.map((event) => dispatch(addUpEvents(event)));
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    upEnventsLink && getUpEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [upEnventsLink]);
};

export default useGetUpcomingEvents;
