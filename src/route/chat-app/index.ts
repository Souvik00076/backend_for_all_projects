import { Router } from "express";
import profileRoutes from "./profileRoutes";

const router = Router();
router.use("/profile", profileRoutes);
export default router;
