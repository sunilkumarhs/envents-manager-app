import { sha256 } from "crypto-hash";

const hashingAlgorithm = async (data) => {
  const hashData = await sha256(data);
  return hashData;
};

export default hashingAlgorithm;
