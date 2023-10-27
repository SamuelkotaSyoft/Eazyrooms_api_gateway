import express from "express";
import redirectRequest from "../middleware/redirectRequest.js";

const router = express.Router();

router.post(
  "/scheduleCampaign",
  redirectRequest(`${process.env.CAMPAIGN_LAUNCHER_URL}/scheduleCampaign`)
);

router.get(
  "/getAllScheduledJobs",
  redirectRequest(`${process.env.CAMPAIGN_LAUNCHER_URL}/getAllScheduledJobs`)
);

router.get(
  "/launchCampaign/:campaignId",
  redirectRequest(`${process.env.CAMPAIGN_LAUNCHER_URL}/launchCampaign`)
);

export default router;
