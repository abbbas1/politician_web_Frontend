import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "http://localhost:3344",
  timeout: 100000,
  headers: {
      "Content-Type":"application/json"
  },
  withCredentials:true
});

export default AxiosInstance;
