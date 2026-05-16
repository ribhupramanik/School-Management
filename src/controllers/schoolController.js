import { validationResult } from "express-validator";

import { addSchoolModel } from "../models/schoolModel.js";

export const addSchool = async (req, res) => {

    try {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                success:false,
                errors: errors.array()
            });
        }

        const {
            name,
            address,
            latitude,
            longitude
        } = req.body;

        await addSchoolModel(
            name,
            address,
            latitude,
            longitude
        );

        return res.status(201).json({
            success:true,
            message:"School added successfully"
        });

    } catch(error){

        console.log(error);

        return res.status(500).json({
            success:false,
            message:"Internal Server Error"
        });
    }

};