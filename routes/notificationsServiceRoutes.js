import express from "express";
import redirectRequest from "../middleware/redirectRequest.js";

const router = express.Router();
/**
 * create notification this will be triggered over notification service
 * you can pass an extra parameter called stores which is an array of store ids is optional
 * for further information head over to notification service
 */
router.post(
  "/createNotification",
  redirectRequest(`${process.env.NOTIFICATION_SERVICE_URL}/createNotification`)
);

router.get(
  "/getAllNotificationsForUsers",
  redirectRequest(
    `${process.env.NOTIFICATION_SERVICE_URL}/getAllNotificationsForUsers`
  )
);
router.delete(
  "/deleteNotificationForGuest/:notificationId",
  redirectRequest(
    `${process.env.NOTIFICATION_SERVICE_URL}/deleteNotificationForGuest`
  )
);
router.get(
  "/getAllNotificationsForGuest/:guestId",
  redirectRequest(
    `${process.env.NOTIFICATION_SERVICE_URL}/getAllNotificationsForGuest`
  )
);
router.post(
  "/updateNotificationForUsers",
  redirectRequest(
    `${process.env.NOTIFICATION_SERVICE_URL}/updateNotificationForUsers`
  )
);
router.delete(
  "/deleteNotificationById/:notificationId",
  redirectRequest(
    `${process.env.NOTIFICATION_SERVICE_URL}/deleteNotificationById`
  )
);
export default router;
