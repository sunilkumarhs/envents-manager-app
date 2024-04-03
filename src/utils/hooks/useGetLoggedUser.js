import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../data/loginDataSlice";

const useGetLoggedUser = () => {
  const dispatch = useDispatch();
  const loggedUser = useSelector((store) => store?.user);

  const getLoggedUser = () => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      dispatch(addUser(foundUser));
    }
  };

  useEffect(() => {
    !loggedUser && getLoggedUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useGetLoggedUser;
