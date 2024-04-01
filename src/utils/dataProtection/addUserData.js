import api from "../../restAPI/dataTransactions";
import encryptData from "./encryptData";
import hashingAlgorithm from "./hashingData";

const addUserData = (uMail, uName, uPassword, setSingUp, setErrorMessage) => {
  const user = {
    id: Date.now(),
    name: encryptData(uName),
    mail: encryptData(uMail),
    password: uPassword,
  };
  const addUserInfo = async () => {
    try {
      user.password = await hashingAlgorithm(uPassword);
      const response = await api.post("/auth", user);
      if (response.status === 201) {
        setSingUp(false);
        setErrorMessage(null);
      }
    } catch (error) {
      console.log(error);
    }
  };
  addUserInfo();
};

export default addUserData;
