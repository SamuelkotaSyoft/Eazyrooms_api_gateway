import express from "express";
import redirectRequest from "../middleware/redirectRequest.js";

const router = express.Router();

router.post(
  "/createTemplate",
  redirectRequest(`${process.env.CAMPAIGNS_SERVICE_URL}/createTemplate`)
);

router.get(
  "/getAllTemplates/:locationId",
  redirectRequest(`${process.env.CAMPAIGNS_SERVICE_URL}/getAllTemplates`)
);

router.get(
  "/getTemplateById/:templateId",
  redirectRequest(`${process.env.CAMPAIGNS_SERVICE_URL}/getTemplateById`)
);

router.patch(
  "/updateTemplateById",
  redirectRequest(`${process.env.CAMPAIGNS_SERVICE_URL}/updateTemplateById`)
);

router.delete(
  "/deleteTemplateById/:templateId",
  redirectRequest(`${process.env.CAMPAIGNS_SERVICE_URL}/deleteTemplateById`)
);

router.post(
  "/syncTemplatesWith360Dialog/:locationId",
  redirectRequest(
    `${process.env.CAMPAIGNS_SERVICE_URL}/syncTemplatesWith360Dialog`
  )
);

router.post(
  "/createCampaign",
  redirectRequest(`${process.env.CAMPAIGNS_SERVICE_URL}/createCampaign`)
);

router.get(
  "/getAllCampaigns/:locationId",
  redirectRequest(`${process.env.CAMPAIGNS_SERVICE_URL}/getAllCampaigns`)
);

router.get(
  "/getCampaignById/:campaignId",
  redirectRequest(`${process.env.CAMPAIGNS_SERVICE_URL}/getCampaignById`)
);

router.patch(
  "/updateCampaignById",
  redirectRequest(`${process.env.CAMPAIGNS_SERVICE_URL}/updateCampaignById`)
);

router.delete(
  "/deleteCampaignById/:campaignId",
  redirectRequest(`${process.env.CAMPAIGNS_SERVICE_URL}/deleteCampaignById`)
);

router.get(
  "/getAllLists/:locationId",
  redirectRequest(`${process.env.CAMPAIGNS_SERVICE_URL}/getAllLists`)
);
router.post(
  "/createList",
  redirectRequest(`${process.env.CAMPAIGNS_SERVICE_URL}/createList`)
);
router.delete(
  "/deleteListById/:listId",
  redirectRequest(`${process.env.CAMPAIGNS_SERVICE_URL}/deleteListById`)
);
router.get(
  "/getListById/:listId",
  redirectRequest(`${process.env.CAMPAIGNS_SERVICE_URL}/getListById`)
);
router.patch(
  "/updateListById",
  redirectRequest(`${process.env.CAMPAIGNS_SERVICE_URL}/updateListById`)
);

router.patch(
  "/updateListContacts",
  redirectRequest(`${process.env.CAMPAIGNS_SERVICE_URL}/updateListContacts`)
);
router.delete(
  "/deleteListContact/:phoneNumber",
  redirectRequest(`${process.env.CAMPAIGNS_SERVICE_URL}/deleteListContact`)
);

router.post(
  "/createKey",
  redirectRequest(`${process.env.CAMPAIGNS_SERVICE_URL}/createKey`)
);
router.get(
  "/getKey",
  redirectRequest(`${process.env.CAMPAIGNS_SERVICE_URL}/getKey`)
);
router.delete(
  "/deleteKey",
  redirectRequest(`${process.env.CAMPAIGNS_SERVICE_URL}/deleteKey`)
);

export default router;
