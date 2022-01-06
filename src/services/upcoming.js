import axios from "axios";
import { apiURL, apiHeaders } from "../utils/";

export const upcoming = (mediaType, locale) => {
  console.log(apiURL)
  return axios.get(
    apiURL + "/movie/upcoming" + mediaType + "?language=" + locale,
    { headers: apiHeaders }
  );
};
