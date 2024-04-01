import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../data/loginDataSlice";

const useGetLoggedUser = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      dispatch(addUser(foundUser));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useGetLoggedUser;
