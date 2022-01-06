import axios from "axios";
import { apiURL, apiHeaders } from "../utils/";

export const detail = (movieID, locale) => {
  console.log(apiURL)
  return axios.get(
    apiURL + "/movie/" + movieID + "?language=" + locale,
    { headers: apiHeaders }
  );
};

export const credits = (movieID, locale) => {
  console.log(apiURL)
  return axios.get(
    apiURL + "/movie/" + movieID + "/credits?language=" + locale,
    { headers: apiHeaders }
  );
};
