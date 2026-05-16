import db from "../config/db.js";

export const addSchoolModel = async (
    name,
    address,
    latitude,
    longitude
) => {

    const query = `
        INSERT INTO schools
        (name,address,latitude,longitude)
        VALUES (?,?,?,?)
    `;

    const [result] = await db.execute(query, [
        name,
        address,
        latitude,
        longitude
    ]);

    return result;
};