import axios from "axios";

export default axios.create({
  baseURL: "https://events-data-server.onrender.com/",
});
