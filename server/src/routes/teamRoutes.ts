import { Router } from "express";
import { getTeams } from "../controllers/tamController";

const router = Router();

router.get("/", getTeams);

export default router;
