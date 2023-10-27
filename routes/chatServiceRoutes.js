import express from "express";
import redirectRequest from "../middleware/redirectRequest.js";

const router = express.Router();

router.get(
  "/getAllChats/:locationId",
  redirectRequest(`${process.env.CHAT_SERVICE_URL}/getAllChats`)
);

router.post(
  "/saveChatHistory",
  redirectRequest(`${process.env.CHAT_SERVICE_URL}/saveChatHistory`)
);

router.patch(
  "/updateChatHistoryById",
  redirectRequest(`${process.env.CHAT_SERVICE_URL}/updateChatHistoryById`)
);

router.get(
  "/getChatById/:chatId",
  redirectRequest(`${process.env.CHAT_SERVICE_URL}/getChatById`)
);

router.post(
  "/createNotes",
  redirectRequest(`${process.env.CHAT_SERVICE_URL}/createNotes`)
);
router.get(
  "/getAllNotes",
  redirectRequest(`${process.env.CHAT_SERVICE_URL}/getAllNotes`)
);

router.patch(
  "/updateNotesById/:updateNotesById",
  redirectRequest(`${process.env.CHAT_SERVICE_URL}/updateNotesById`)
);
router.get(
  "/getNotesById",
  redirectRequest(`${process.env.CHAT_SERVICE_URL}/getNotesById`)
);
//messages
router.get(
  "/messages/:chatId",
  redirectRequest(`${process.env.CHAT_SERVICE_URL}/messages`)
);
router.post(
  "/messages/:chatId",
  redirectRequest(`${process.env.CHAT_SERVICE_URL}/messages`)
);

//notes
router.get(
  "/chats/:chatId/notes",
  redirectRequest(`${process.env.CHAT_SERVICE_URL}/notes`)
);
router.delete(
  "/chats/:chatId/notes/:noteId",
  redirectRequest(`${process.env.CHAT_SERVICE_URL}/notes`)
);
router.post(
  "/chats/:chatId/notes",
  redirectRequest(`${process.env.CHAT_SERVICE_URL}/notes`)
);
router.put(
  "/chats/:chatId/notes/:noteId",
  redirectRequest(`${process.env.CHAT_SERVICE_URL}/notes`)
);

//end
router.get(
  "/chats/:chatId/join",
  redirectRequest(`${process.env.CHAT_SERVICE_URL}/chats/join`)
);
router.get("/chats", redirectRequest(`${process.env.CHAT_SERVICE_URL}/chats`));
router.post(
  "/chats/:chatId/add",
  redirectRequest(`${process.env.CHAT_SERVICE_URL}/chats/add`)
);

router.post(
  "/chats/:chatId/transfer",
  redirectRequest(`${process.env.CHAT_SERVICE_URL}/chats/transfer`)
);

router.get(
  "/chats/:chatId",
  redirectRequest(`${process.env.CHAT_SERVICE_URL}/chats`)
);

export default router;
