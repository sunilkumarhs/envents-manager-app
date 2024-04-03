import { useDispatch, useSelector } from "react-redux";
import api from "../../restAPI/dataTransactions";
import decryptData from "../dataProtection/decryptData";
import { useEffect } from "react";
import { addRecData } from "../data/eventsDataSlice";

const useGetRecomendedEvents = () => {
  const dispatch = useDispatch();
  const recEnventsLink = useSelector(
    (store) => store?.events?.detailsLink?.recomended
  );

  const recEventData = useSelector((store) => store?.events?.recomendedData);
  const getRecData = async () => {
    const link = decryptData(recEnventsLink);
    try {
      const response = await api.get(link);
      if (response.status === 200) dispatch(addRecData(response.data.events));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    !recEventData && recEnventsLink && getRecData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recEnventsLink]);
};

export default useGetRecomendedEvents;
