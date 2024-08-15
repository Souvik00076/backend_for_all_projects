import { Router } from "express";
import authRoutes from "./auth";
import chatAppRoutes from "./chat-app/index";
import serviceRoutes from "./service";
const router = Router();
router.use("/auth", authRoutes);
router.use("/service", serviceRoutes);
router.use("/chat-buddies", chatAppRoutes);
export default router;
