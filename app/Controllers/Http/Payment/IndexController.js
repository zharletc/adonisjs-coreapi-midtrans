"use strict";

const CoreApi = require("../Midtrans/CoreApi");
const BankTransfer = require("./BankTransfer");
const CreditCard = require("./CreditCard");
const GoPay = require("./GoPay");
const CStore = require("./CStore");
const Transaction = require("../../../Models/Transaction");

class IndexController {
  async bankTransfer({ request, response }) {
    let data;
    let body = request.body;
    let customers = {
      email: "classicimplements@gmail.com",
      first_name: "Classic",
      last_name: "Implements",
      phone: "0893526773882",
    };
    var bankTransfer = new BankTransfer(body.items, customers);
    switch (body.channel) {
      case "BCA":
        data = bankTransfer.bca();
        break;
      case "BNI":
        data = bankTransfer.bni();
        break;
      case "PERMATA":
        data = bankTransfer.permata();
        break;
    }

    return CoreApi.charge(data);
  }

  async goPay({ request, response }) {
    let data;
    let body = request.body;
    let customers = {
      email: "classicimplements@gmail.com",
      first_name: "Classic",
      last_name: "Implements",
      phone: "0893526773882",
    };

    var goPay = new GoPay(body.items, customers);
    data = goPay.basic();

    return CoreApi.charge(data);
  }

  async cstore({ request, response }) {
    let data;
    let body = request.body;
    let customers = {
      email: "classicimplements@gmail.com",
      first_name: "Classic",
      last_name: "Implements",
      phone: "0893526773882",
    };
    var cStore = new CStore(body.items, customers);
    switch (body.store) {
      case "INDOMARET":
        data = cStore.indomaret();
        break;
      case "ALFAMART":
        data = cStore.alfamart();
        break;
    }

    return CoreApi.charge(data);
  }

  async getToken({ request, response }) {
    return CoreApi.token(request.body);
  }

  async creditCard({ request, response }) {
    let data;
    let body = request.body;
    let customers = {
      email: "classicimplements@gmail.com",
      first_name: "Classic",
      last_name: "Implements",
      phone: "0893526773882",
    };

    var creditCard = new CreditCard(body.items, customers, body.token);
    switch (body.type) {
      case "AUTHORIZE":
        data = creditCard.withAuth();
        break;
    }
    return data;
    return CoreApi.charge(data);
  }

  async getStatus({ request, response }) {
    let order_id = request.qs.order_id;
    return CoreApi.status(order_id);
  }

  async testTable() {
    const myTransaction = await Transaction.all();

    return myTransaction;
  }
}

module.exports = IndexController;
