import axios from "axios";

const apiUrl = import.meta.env.VITE_RAWG_API_KEY;

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: apiUrl,
  },
});
