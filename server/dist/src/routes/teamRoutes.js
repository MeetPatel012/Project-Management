"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tamController_1 = require("../controllers/tamController");
const router = (0, express_1.Router)();
router.get("/", tamController_1.getTeams);
exports.default = router;
