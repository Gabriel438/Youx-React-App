import axios from "axios";

const api = axios.create({
  baseURL: "https://final-spring-boot-youx.herokuapp.com/",
});

export default api;
