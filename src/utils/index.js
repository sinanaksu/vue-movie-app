export const utils = {
  methods: {
    toSeoUrl(url) {
      var encodedUrl = url.toString().toLowerCase();
      encodedUrl = encodedUrl.split(/&+/).join("-and-");
      encodedUrl = encodedUrl.split(/[^a-z0-9]/).join("-");
      encodedUrl = encodedUrl.split(/-+/).join("-");
      encodedUrl = encodedUrl.trim("-");
      return encodedUrl;
    },
    dateConvert(d) {
      var date = new Date(d);
      var result =
        "" +
        (date.getUTCMonth() + 1) +
        "/" +
        date.getUTCDay() +
        "/" +
        date.getFullYear();
      return result;
    },
    imgFullURL(img) {
      return process.env.VUE_APP_IMG_PATH + img;
    },
  },
};

export const apiHeaders = {
  Authorization: "Bearer " + process.env.VUE_APP_API_KEY,
  "Content-Type": "application/json;charset=utf-8",
};

export const apiURL = process.env.VUE_APP_API_URL;
