import express from "express";

import { schoolValidation } from "../middleware/validation.js";

import {
    addSchool
} from "../controllers/schoolController.js";

const router = express.Router();

router.post(
    "/addSchool",
    schoolValidation,
    addSchool
);

router.get("/test",(req,res)=>{
    res.json({
        message:"Routes working"
    });
});

export default router;