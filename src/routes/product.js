import express from "express";

export const router = express.Router();

router.route("/").get(functionName);
router.route("/:id").get(functionName);
router.route("/").post(functionName);
router.route("/:id").put(functionName);

export default router;
