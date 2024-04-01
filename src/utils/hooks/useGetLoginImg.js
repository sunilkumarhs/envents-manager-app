import { useEffect } from "react";
import api from "../../restAPI/dataTransactions";
import { addImg } from "../data/loginImgSlice";
import { useDispatch, useSelector } from "react-redux";

const useGetLoginImg = () => {
  const dispatch = useDispatch();
  const loginImgLink = useSelector((store) => store?.imgLink?.loginImage);
  const getAppData = async () => {
    const response = await api.get("/images");
    dispatch(addImg(response.data));
  };
  useEffect(() => {
    !loginImgLink && getAppData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useGetLoginImg;
