import cors from "cors";
import dotenv from "dotenv";
import express from "express";
// import mongoose from "mongoose";
import path from "path";
// import "./firebase-config.js";
import redirectRequest from "./middleware/redirectRequest.js";
import morgan from "morgan";
const app = express();
const port = 3000;

app.use(cors());
app.use(morgan("dev"));

app.use(express.json());

/**
 *
 * dotenv config
 */
const __dirname = path.resolve();
dotenv.config({
  path: path.resolve(__dirname, ".env"),
});

/**
 *
 * connect to mongodb
 */
// await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
// console.log("MONGODB CONNECTED...");

/**
 *
 * routes
 */

app.use(
  "/api/v1/userService",
  (await import("./routes/userServiceRoutes.js")).default
);

app.use(
  "/api/v1/chatbotService",
  (await import("./routes/chatbotServiceRoutes.js")).default
);

app.use(
  "/api/v1/bookingService",
  (await import("./routes/bookingServiceRoutes.js")).default
);

app.use(
  "/api/v1/chatService",
  (await import("./routes/chatServiceRoutes.js")).default
);

app.use(
  "/api/v1/campaignLauncherService",
  (await import("./routes/campaignLauncherServiceRoutes.js")).default
);

app.use(
  "/api/v1/campaignsService",
  (await import("./routes/campaignsServiceRoutes.js")).default
);

app.use(
  "/api/v1/propertyService",
  (await import("./routes/propertyServiceRoutes.js")).default
);

app.use(
  "/api/v1/bookingService",
  (await import("./routes/bookingServiceRoutes.js")).default
);

app.use(
  "/api/v1/storeService",
  (await import("./routes/storeServiceRoutes.js")).default
);

app.use(
  "/api/v1/orderService",
  (await import("./routes/ordersService.js")).default
);

app.use(
  "/api/v1/paymentService",
  (await import("./routes/paymentSerivceRoutes.js")).default
);
app.use(
  "/api/v1/notificationService",
  (await import("./routes/notificationsServiceRoutes.js")).default
);

app.use(
  "/api/v1/webhookService",
  (await import("./routes/webhookServiceRoutes.js")).default
);

/**
 *
 * start listening to requests
 */
app.listen(port, () => {
  console.log(`API gateway listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.status(200).json({ status: "OK", service: "API" });
});
