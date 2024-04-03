import { useDispatch, useSelector } from "react-redux";
import api from "../../restAPI/dataTransactions";
import { addDetails } from "../data/eventsDataSlice";
import { useEffect } from "react";

const useGetEventsDetails = () => {
  const dispatch = useDispatch();
  const eventDetails = useSelector((store) => store?.events?.detailsLink);
  const fecthData = async () => {
    try {
      const response = await api.get("/appData");
      if (response.status === 200) dispatch(addDetails(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    !eventDetails && fecthData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useGetEventsDetails;
