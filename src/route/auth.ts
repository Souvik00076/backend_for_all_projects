import { Router } from "express";
import { loginAuth, registerAuth } from "../controller-common";

const router = Router();
router.post("/login", loginAuth);
router.post("/sign-up", registerAuth);
export default router;
