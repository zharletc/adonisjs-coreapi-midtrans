"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.group(() => {
  Route.post("/charge", "Payment/IndexController.bankTransfer");
}).prefix("va");

Route.group(() => {
  Route.post("/charge", "Payment/IndexController.creditCard");
  Route.post("/token", "Payment/IndexController.getToken");
}).prefix("cc");

Route.group(() => {
  Route.post("/charge", "Payment/IndexController.goPay");
}).prefix("em");

Route.group(() => {
  Route.post("/charge", "Payment/IndexController.cstore");
}).prefix("cs");

Route.group(() => {
  Route.get("/method", "Payment/AvailablePayment.method");
  Route.get("/providers/:type", "Payment/AvailablePayment.providers");
}).prefix("payment");

Route.get("/status", "Payment/IndexController.getStatus");

// test
Route.get("/testtable", "Payment/IndexController.testTable");
