"use strict";

const { list } = require("@adonisjs/framework/src/Route/Store");

class AvailablePayment {
  async method() {
    let list = [
      {
        title: "Virtual Account",
        type: "va",
        providers: "BCA, BNI, PERMATA, MANDIRI, BRI",
        icon: [],
      },
      {
        title: "Credit Card",
        type: "cc",
        providers: "Mater Card, JCB, Visa",
        icon: [],
      },
      {
        title: "E-Wallet / E-Money",
        type: "em",
        providers: "GoPay",
        icon: [],
      },
      {
        title: "Retail Outlet / CStore",
        type: "cs",
        providers: "Alfamart, Indomaret",
        icon: [],
      },
    ];

    return list;
  }

  async providers({ request, response, params }) {
    let list = [];
    switch (params.type) {
      case "va":
        list = [
          {
            title: "Bank Permata",
            provider_var: "PERMATA",
            icon: "",
          },
          {
            title: "Bank Central Asia",
            provider_var: "PERMATA",
            icon: "",
          },
          {
            title: "Bank BRI",
            provider_var: "MANDIRI",
            icon: "",
          },
          {
            title: "Bank BNI",
            provider_var: "BNI",
            icon: "",
          },
        ];
        break;
      case "em":
        list = [
          {
            title: "GoPay",
            provider_var: "GOPAY",
            icon: "",
          },
        ];
        break;
      case "cs":
        list = [
          {
            title: "Alfamart",
            provider_var: "ALFAMART",
            icon: "",
          },
          {
            title: "Indomaret",
            provider_var: "INDOMARET",
            icon: "",
          },
        ];
        break;

      default:
        break;
    }
    return list;
  }
}

module.exports = AvailablePayment;
