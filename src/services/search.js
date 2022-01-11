import axios from "axios";
import { apiURL, apiHeaders } from "../utils/";

export const search = (q, locale) => {
  return axios.get(
    apiURL + "search/movie?query=" + encodeURI(q) + "&language=" + locale,
    { headers: apiHeaders }
  );
};
