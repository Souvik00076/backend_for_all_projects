import { Router } from "express";
import validateToken from "../../middleware/validateToken.middleware";
import { chat_patchProfile, chatapp_getProfile } from "../../controller-chat";

const router = Router();
router.get("/", validateToken, chatapp_getProfile);
router.patch("/", validateToken, chat_patchProfile);
export default router;
