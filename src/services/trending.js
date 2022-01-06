import axios from "axios";
import { apiURL, apiHeaders } from "../utils/";

export const trending = (mediaType, locale) => {
  console.log(apiURL)
  return axios.get(
    apiURL + "/trending/" + mediaType + "/week?language=" + locale,
    { headers: apiHeaders }
  );
};
