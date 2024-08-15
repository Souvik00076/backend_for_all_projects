import { Router } from "express";
import firebaseRoutes from "./firebase";
const router = Router();
router.use("/firebase", firebaseRoutes);
export default router;
