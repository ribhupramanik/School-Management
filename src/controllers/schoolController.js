import { validationResult } from "express-validator";

import { addSchoolModel } from "../models/schoolModel.js";

import { getAllSchools } from "../models/schoolModel.js";

import { calculateDistance } from "../utils/distanceCalculator.js";

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

export const listSchools = async (req, res) => {

    try {

        const latitude = parseFloat(req.query.latitude);
        const longitude = parseFloat(req.query.longitude);

        if (
            isNaN(latitude) ||
            isNaN(longitude)
        ) {
            return res.status(400).json({
                success: false,
                message: "Valid latitude and longitude required"
            });
        }

        const schools = await getAllSchools();

        const sortedSchools =
            schools
            .map((school) => {

                const distance =
                    calculateDistance(
                        latitude,
                        longitude,
                        school.latitude,
                        school.longitude
                    );

                return {
                    ...school,
                    distance: Number(distance.toFixed(2))
                };
            })
            .sort((a, b) =>
                a.distance - b.distance
            );

        return res.status(200).json({
            success: true,
            count: sortedSchools.length,
            data: sortedSchools
        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};