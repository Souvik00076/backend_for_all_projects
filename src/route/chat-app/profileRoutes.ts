import { Router } from "express";
import validateToken from "../../middleware/validateToken.middleware";
import { chatapp_getProfile } from "../../controller-chat";

const router = Router();
router.get("/", validateToken, chatapp_getProfile);
export default router;
