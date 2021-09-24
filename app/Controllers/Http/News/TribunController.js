"use strict";
const axios = require("axios");
const cheerio = require("cheerio");
const url = "https://www.tribunnews.com/index-news";

class TribunController {
  async getIndex({ request, response }) {
    // part 1
    return {
      result: "LOL",
    };

    let result = axios.get(url).then((res) => {});
  }
}

module.exports = TribunController;
