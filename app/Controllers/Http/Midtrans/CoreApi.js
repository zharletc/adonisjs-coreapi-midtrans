"use strict";

const ApiRequestor = require("./ApiRequestor");
const Config = require("./Config");

class CoreApi {
  static charge(payloads) {
    let result = ApiRequestor.post(
      Config.getBaseUrl() + "/charge",
      Config.serverKey,
      payloads
    );

    return result;
  }

  static token(payloads) {
    let query = `client_key=${payloads.client_key}&card_number=${payloads.card_number}&card_exp_month=${payloads.card_exp_month}&card_exp_year=${payloads.card_exp_year}&card_cvv=${payloads.card_cvv}`;

    let result = ApiRequestor.get(
      Config.getBaseUrl() + "/token?" + query,
      Config.serverKey,
      payloads
    );

    return result;
  }

  static status(order_id) {
    let result = ApiRequestor.get(
      Config.getBaseUrl() + `/${order_id}/status`,
      Config.serverKey,
      order_id
    );

    return result;
  }
}

module.exports = CoreApi;
