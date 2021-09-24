"use strict";

class CreditCard {
  constructor(items = [], customer, token) {
    this.items = items;
    this.customer = customer;
    this.token = token;
  }

  baseBody() {
    let gross_amount = 0;
    let order_id = new Date().getTime();

    let items = this.items;
    let customer = this.customer;

    items.forEach(function (item, index) {
      gross_amount += item.price * item.quantity;
    });

    let body = {
      payment_type: "credit_card",
      transaction_details: {
        gross_amount: gross_amount,
        order_id: order_id,
      },
      customer_details: {
        email: customer.email,
        first_name: customer.firt_name,
        last_name: customer.last_name,
        phone: customer.phone,
      },

      item_details: this.items,
    };

    return body;
  }

  withAuth() {
    let base = this.baseBody();
    let mybody = {
      payment_type: base.payment_type,
      transaction_details: base.transaction_details,
      customer_details: base.customer_details,
      item_details: base.item_details,
      credit_card: {
        token_id: this.token,
        authentication: true,
        bank: "bni",
      },
    };
    return mybody;
  }

  basic() {
    let base = this.baseBody();
    let mybody = {
      payment_type: base.payment_type,
      transaction_details: base.transaction_details,
      customer_details: base.customer_details,
      item_details: base.item_details,
      credit_card: {
        token_id: this.token,
      },
    };
    return mybody;
  }
}

module.exports = CreditCard;
