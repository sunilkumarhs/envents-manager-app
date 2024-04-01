import CryptoJS from "crypto-js";
import { ENCRYPT_KEY } from "../constants";

const decryptData = (data) => {
  const bytes = CryptoJS.AES.decrypt(data, `${ENCRYPT_KEY}`);
  const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

  return decryptedData;
};

export default decryptData;
