import { body } from "express-validator";

export const schoolValidation = [
    body("name")
        .trim()
        .notEmpty()
        .withMessage("School name is required"),

    body("address")
        .trim()
        .notEmpty()
        .withMessage("Address is required"),

    body("latitude")
        .notEmpty()
        .withMessage("Latitude required")
        .isFloat({ min: -90, max: 90 })
        .withMessage("Latitude must be between -90 and 90"),

    body("longitude")
        .notEmpty()
        .withMessage("Longitude required")
        .isFloat({ min: -180, max: 180 })
        .withMessage("Longitude must be between -180 and 180")
];