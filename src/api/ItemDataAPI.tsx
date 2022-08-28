import axios from "axios";
let url = `https://${window.location.hostname}/emart_fe/`;
if (window.location.hostname === "localhost") url = `http://${window.location.hostname}:3000/`;
const itemDataApi = axios.create({
  baseURL: url,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});
export default itemDataApi;
