import express from "express";
import redirectRequest from "../middleware/redirectRequest.js";
import { uploadSingleAudio } from "../middleware/uploadSingleAudio.js";
import { uploadSingleDocument } from "../middleware/uploadSingleDocument.js";
import { uploadSingleImage } from "../middleware/uploadSingleImage.js";
import { uploadSingleVideo } from "../middleware/uploadSingleVideo.js";

const router = express.Router();

router.post(
  "/createChatbot",
  redirectRequest(`${process.env.CHATBOT_SERVICE_URL}/bot/api/chatbot/create`)
);

router.post(
  "/createChatbotFromTemplate",
  redirectRequest(
    `${process.env.CHATBOT_SERVICE_URL}/bot/api/chatbot/create-from-template`
  )
);

router.get(
  // "/getAllChatbots/:locationId",
  "/getAllChatbots",
  redirectRequest(`${process.env.CHATBOT_SERVICE_URL}/bot/api/chatbot/list`)
);

router.get(
  // "/getAllChatbots/:locationId",
  "/getAllChatbotTemplates",
  redirectRequest(
    `${process.env.CHATBOT_SERVICE_URL}/bot/api/chatbot/list-templates`
  )
);

router.get(
  // "/getAllChatbots/:locationId",
  "/getChatbotTemplateCategories",
  redirectRequest(
    `${process.env.CHATBOT_SERVICE_URL}/bot/api/chatbot/categories`
  )
);

router.get(
  "/getChatbotById/:chatbotId",
  redirectRequest(`${process.env.CHATBOT_SERVICE_URL}/bot/api/chatbot/get`)
);
router.post(
  "/createChatbotFlow",
  redirectRequest(`${process.env.CHATBOT_SERVICE_URL}/bot/api/flow/create`)
);
router.get(
  "/getAllChatbotFlows/:chatbotId",
  redirectRequest(`${process.env.CHATBOT_SERVICE_URL}/bot/api/flow/list`)
);
router.get(
  "/getChatbotFlowById/:flowId",
  redirectRequest(`${process.env.CHATBOT_SERVICE_URL}/bot/api/flow/get`)
);

router.put(
  "/updateChatbotFlow/:flowId",
  redirectRequest(`${process.env.CHATBOT_SERVICE_URL}/bot/api/flow/update`)
);

router.delete(
  "/deleteChatbotFlowById/:flowId",
  redirectRequest(`${process.env.CHATBOT_SERVICE_URL}/bot/api/flow/delete`)
);
router.put(
  "/updateChatbotById/:chatbotId",
  uploadSingleImage,
  redirectRequest(`${process.env.CHATBOT_SERVICE_URL}/bot/api/chatbot/update`)
);

router.delete(
  "/deleteChatbotById/:chatbotId",
  redirectRequest(`${process.env.CHATBOT_SERVICE_URL}/bot/api/chatbot/delete`)
);

// router.get(
//   "/checkChatbotName",
//   redirectRequest(`${process.env.CHATBOT_SERVICE_URL}/checkChatbotName`)
// );

// router.patch(
//   "/updateChatbotActiveStatus",
//   redirectRequest(
//     `${process.env.CHATBOT_SERVICE_URL}/updateChatbotActiveStatus`
//   )
// );

router.post(
  "/uploadVideo",
  uploadSingleImage,
  redirectRequest(`${process.env.CHATBOT_SERVICE_URL}/bot/api/upload/video`)
);

router.post(
  "/uploadImage",
  uploadSingleImage,
  redirectRequest(`${process.env.CHATBOT_SERVICE_URL}/bot/api/upload/image`)
);

router.post(
  "/uploadDocument",
  uploadSingleImage,
  redirectRequest(`${process.env.CHATBOT_SERVICE_URL}/bot/api/upload/document`)
);

router.post(
  "/uploadAudio",
  uploadSingleImage,
  redirectRequest(`${process.env.CHATBOT_SERVICE_URL}/bot/api/upload/audio`)
);

router.post(
  "/integrateWA360dialog/:botId",
  redirectRequest(
    `${process.env.CHATBOT_SERVICE_URL}/bot/api/chatbot/update/connect-dialog-360`
  )
);

export default router;
