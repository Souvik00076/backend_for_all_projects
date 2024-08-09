import { Router } from "express";
import authRoutes from "./auth";
import chatAppRoutes from "./chat-app/index";
const router = Router();
router.use("/auth", authRoutes);
router.use("/chat-buddies", chatAppRoutes);
export default router;
