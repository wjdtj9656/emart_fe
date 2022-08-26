import axios from "axios";
const url = `http://${window.location.hostname}:3000/`;
console.log(window.location.hostname);
const itemDataApi = axios.create({
  baseURL: url,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});
export default itemDataApi;
