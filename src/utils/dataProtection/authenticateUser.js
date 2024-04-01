import api from "../../restAPI/dataTransactions";
import { addUser } from "../data/loginDataSlice";
import decryptData from "./decryptData";
import hashingAlgorithm from "./hashingData";

const authenticateUser = (
  mail,
  password,
  setErrorMessage,
  navigate,
  dispatch
) => {
  const authenticateApp = async () => {
    password = await hashingAlgorithm(password);
    const response = await api.get("/auth");
    const users = response.data;
    const authuser = users.filter(
      (user) => decryptData(user.mail) === mail && user.password === password
    );
    if (authuser.length === 0) {
      setErrorMessage("Please enter the proper credentials!!");
    } else {
      authuser[0].signedIn = true;
      const res = await api.put(`/auth/${authuser[0].id}`, authuser[0]);
      localStorage.setItem("user", JSON.stringify(res.data));
      dispatch(addUser(res.data));
      navigate("/");
      setErrorMessage(null);
    } 
  };
  authenticateApp();
};

export default authenticateUser;
