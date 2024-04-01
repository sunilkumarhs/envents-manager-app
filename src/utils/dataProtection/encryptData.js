import CryptoJS from "crypto-js";
import { ENCRYPT_KEY } from "../constants";

const encryptData = (data) => {
  const ciphertext = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    `${ENCRYPT_KEY}`
  ).toString();

  return ciphertext;
};

export default encryptData;
