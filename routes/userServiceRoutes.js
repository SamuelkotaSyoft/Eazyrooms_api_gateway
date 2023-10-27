import express from "express";
import redirectRequest from "../middleware/redirectRequest.js";
import { uploadMultipleImages } from "../middleware/uploadMultipleImages.js";

const router = express.Router();

router.post(
  "/createGuest",
  redirectRequest(`${process.env.USER_SERVICE_URL}/createGuest`)
);

router.get(
  "/getAllGuests/:locationId",
  redirectRequest(`${process.env.USER_SERVICE_URL}/getAllGuests`)
);

router.get(
  "/getGuestById/:guestId",
  redirectRequest(`${process.env.USER_SERVICE_URL}/getGuestById`)
);

router.patch(
  "/updateGuestById",
  redirectRequest(`${process.env.USER_SERVICE_URL}/updateGuestById`)
);

router.delete(
  "/deleteGuestById/:guestId",
  redirectRequest(`${process.env.USER_SERVICE_URL}/deleteGuestById`)
);

router.post(
  "/createPropertyAdmin",
  redirectRequest(`${process.env.USER_SERVICE_URL}/createPropertyAdmin`)
);

router.post(
  "/createRole",
  redirectRequest(`${process.env.USER_SERVICE_URL}/createRole`)
);
router.patch(
  "/editRole",
  redirectRequest(`${process.env.USER_SERVICE_URL}/editRole`)
);

router.get(
  "/getAllUsers/:locationId",
  redirectRequest(`${process.env.USER_SERVICE_URL}/getAllUsers`)
);

router.get(
  "/getUserById/:userId",
  redirectRequest(`${process.env.USER_SERVICE_URL}/getUserById`)
);

router.get(
  "/getUserDetails",
  redirectRequest(`${process.env.USER_SERVICE_URL}/getUserDetails`)
);

router.patch(
  "/updateRoleById",
  redirectRequest(`${process.env.USER_SERVICE_URL}/updateRoleById`)
);

router.delete(
  "/deleteRoleById/:guestId",
  redirectRequest(`${process.env.USER_SERVICE_URL}/deleteRoleById`)
);

router.post(
  "/createUser",
  redirectRequest(`${process.env.USER_SERVICE_URL}/createUser`)
);

export default router;
