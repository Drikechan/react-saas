import axios from "axios";

const services = axios.create({
  baseURL: "http://fatwxapp.rhecube.com/",
  timeout: 10000,
});

// services.interceptors.request((res) => {});
