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
    dateConvert(d, t = 0) {
      var date = new Date(d);
      if(t == 1) {
        return date.getFullYear();
      }
      var result =
        "" +
        (date.getUTCMonth() + 1) +
        "/" +
        date.getUTCDay() +
        "/" +
        date.getFullYear();
      return result;
    },
    imgFullURL(img, w=0, h=0) {
      if(img == null) {
        return "https://via.placeholder.com/220x330?text=."
      }
        if(w == 0) {
          return process.env.VUE_APP_IMG_PATH + img;
        } else {
          return process.env.VUE_APP_IMG_PATH.replace("w220", "w" + w).replace("h330", "h" + h) + img;
        }
    },
  },
};

export const apiHeaders = {
  Authorization: "Bearer " + process.env.VUE_APP_API_KEY,
  "Content-Type": "application/json;charset=utf-8",
};

export const apiURL = process.env.VUE_APP_API_URL;
