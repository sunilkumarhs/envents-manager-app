import { useEffect } from "react";
import api from "../../restAPI/dataTransactions";
import { addImg } from "../data/loginImgSlice";
import { useDispatch, useSelector } from "react-redux";

const useGetLoginImg = () => {
  const dispatch = useDispatch();
  const loginImgLink = useSelector((store) => store?.imgLink);
  const getAppData = async () => {
    try {
      const response = await api.get("/images");
      if (response.status === 200) dispatch(addImg(response.data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    !loginImgLink && getAppData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useGetLoginImg;
