import express from "express";
import redirectRequest from "../middleware/redirectRequest.js";
const router = express.Router();

router.post(
  "/wa-webhook/whatsapp",
  redirectRequest(`${process.env.WHATSAPP_WEBHOOK_URL}/wa-webhook/whatsapp`)
);

router.post(
  "/wa-webhook/webchat/create",
  redirectRequest(
    `${process.env.WHATSAPP_WEBHOOK_URL}/wa-webhook/webchat/create`
  )
);
router.post(
  "/wa-webhook/webchat/message",
  redirectRequest(
    `${process.env.WHATSAPP_WEBHOOK_URL}/wa-webhook/webchat/message`
  )
);

router.get(
  "/wa-webhook/chats/:chatId/notes",
  redirectRequest(`${process.env.WHATSAPP_WEBHOOK_URL}/wa-webhook/chats`)
);

router.get(
  "/wa-webhook/chats",
  redirectRequest(`${process.env.WHATSAPP_WEBHOOK_URL}/wa-webhook/chats`)
);

router.get(
  "/wa-webhook/messages",
  redirectRequest(`${process.env.WHATSAPP_WEBHOOK_URL}/wa-webhook/messages`)
);

export default router;
