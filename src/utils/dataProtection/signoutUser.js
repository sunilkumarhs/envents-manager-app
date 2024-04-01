import api from "../../restAPI/dataTransactions";
import { removeUser } from "../data/loginDataSlice";

const signoutUser = async (dispatch, curUser) => {
  try {
    const response = await api.put(`/auth/${curUser.id}`, curUser);
    if (response.status === 200) {
      dispatch(removeUser());
      localStorage.clear();
    }
  } catch (error) {
    console.log(error);
  }
};

export default signoutUser;
