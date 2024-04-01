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
      navigate("/browse");
      setErrorMessage(null);
      dispatch(addUser(authuser));
    }
    console.log(authuser);
  };
  authenticateApp();
};

export default authenticateUser;
