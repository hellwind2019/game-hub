import axios from "axios";

const apiUrl = import.meta.env.VITE_RAWG_API_KEY;

axios.create({
  params: {
    key: apiUrl,
  },
});
