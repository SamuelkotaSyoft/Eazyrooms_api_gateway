import express from "express";
import redirectRequest from "../middleware/redirectRequest.js";

const router = express.Router();

router.post(
  "/createTax",
  redirectRequest(`${process.env.PAYMENT_SERVICE_URL}/createTax`)
);

router.get(
  "/getAllTaxes",
  redirectRequest(`${process.env.PAYMENT_SERVICE_URL}/getAllTaxes`)
);

router.get(
  "/getTaxById/:taxId",
  redirectRequest(`${process.env.PAYMENT_SERVICE_URL}/getTaxById`)
);

router.patch(
  "/updateTaxById",
  redirectRequest(`${process.env.PAYMENT_SERVICE_URL}/updateTaxById`)
);

router.delete(
  "/deleteTaxById/:taxId",
  redirectRequest(`${process.env.PAYMENT_SERVICE_URL}/deleteTaxById`)
);
