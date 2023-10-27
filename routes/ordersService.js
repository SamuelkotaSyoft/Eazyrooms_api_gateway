import express from "express";
import redirectRequest from "../middleware/redirectRequest.js";

const router = express.Router();

/**
 *
 * store routes
 */

router.get(
  "/getOrdersByLocationId/:locationId",
  redirectRequest(`${process.env.ORDER_SERVICE_URL}/getOrdersByLocationId`)
);
router.get(
  "/getOrderById/:orderId",
  redirectRequest(`${process.env.ORDER_SERVICE_URL}/getOrderById`)
);
router.get(
  "/getOrderByStoreId/:storeId",
  redirectRequest(`${process.env.ORDER_SERVICE_URL}/getOrderByStoreId`)
);
router.get(
  "/getOrdersByPropertyId",
  redirectRequest(`${process.env.ORDER_SERVICE_URL}/getOrdersByPropertyId`)
);
router.get(
  "/getOrdersByGuestId/:guestId",
  redirectRequest(`${process.env.ORDER_SERVICE_URL}/getOrdersByGuestId`)
);
router.patch(
  "/updateOrdersById",
  redirectRequest(`${process.env.ORDER_SERVICE_URL}/updateOrdersById`)
);
router.post(
  "/createOrder/:guest",
  redirectRequest(`${process.env.ORDER_SERVICE_URL}/createOrder`)
);
router.post(
  "/creatOrderByWhatsapp/:guest",
  redirectRequest(`${process.env.ORDER_SERVICE_URL}/creatOrderByWhatsapp`)
);
router.get(
  "/getStaffOrders",
  redirectRequest(`${process.env.ORDER_SERVICE_URL}/getStaffOrders`)
);
router.get(
  "/getOrderStatus",
  redirectRequest(`${process.env.ORDER_SERVICE_URL}/getOrderStatus`)
);

export default router;
