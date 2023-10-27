import express from "express";
import redirectRequest from "../middleware/redirectRequest.js";
import { uploadMultipleImages } from "../middleware/uploadMultipleImages.js";

const router = express.Router();

router.post(
  "/createBooking",
  redirectRequest(`${process.env.BOOKING_SERVICE_URL}/createBooking`)
);

router.get(
  "/getAllBookings/:locationId",
  redirectRequest(`${process.env.BOOKING_SERVICE_URL}/getAllBookings`)
);

router.get(
  "/getBookingById/:bookingId",
  redirectRequest(`${process.env.BOOKING_SERVICE_URL}/getBookingById`)
);

router.patch(
  "/updateBookingById",
  redirectRequest(`${process.env.BOOKING_SERVICE_URL}/updateBookingById`)
);

router.delete(
  "/deleteBookingById/:bookingId",
  redirectRequest(`${process.env.BOOKING_SERVICE_URL}/deleteBookingById`)
);

router.post(
  "/createPrecheckIn",
  uploadMultipleImages,
  redirectRequest(`${process.env.BOOKING_SERVICE_URL}/createPrecheckIn`)
);

export default router;
