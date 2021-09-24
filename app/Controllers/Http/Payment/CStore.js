"use strict";

class CStore {
  constructor(items = [], customer) {
    this.items = items;
    this.customer = customer;
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
      payment_type: "cstore",
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

  indomaret() {
    let base = this.baseBody();
    let mybody = {
      payment_type: base.payment_type,
      transaction_details: base.transaction_details,
      customer_details: base.customer_details,
      item_details: base.item_details,
      cstore: {
        store: "indomaret",
        message: "12345678",
      },
    };

    return mybody;
  }

  alfamart() {
    let base = this.baseBody();
    let mybody = {
      payment_type: base.payment_type,
      transaction_details: base.transaction_details,
      customer_details: base.customer_details,
      item_details: base.item_details,
      bank_transfer: {
        store: "alfamart",
        alfamart_free_text_1: "Thanks for shopping with us!,",
        alfamart_free_text_2: "Like us on our Facebook page,",
        alfamart_free_text_3: "and get 10% discount on your next purchase.",
      },
    };

    return mybody;
  }
}

module.exports = CStore;
