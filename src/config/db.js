// Uncomment the code below for local testing

// import mysql from "mysql2";
// import dotenv from "dotenv";

// dotenv.config();

// const connection = mysql.createPool({
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0
// });

// connection.getConnection((err, conn) => {
//     if (err) {
//         console.log("Database connection failed:", err.message);
//     } else {
//         console.log("MySQL Connected Successfully");
//         conn.release();
//     }
// });

// export default connection.promise();


// Comment the code below for local testing

import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const db = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,

    ssl: {
        minVersion: "TLSv1.2",
        rejectUnauthorized: false
    },

    waitForConnections: true,
    connectionLimit: 10
});

try {

    const conn = await db.getConnection();

    console.log("TiDB Connected Successfully");

    conn.release();

} catch (error) {

    console.log("Database Error:", error.message);

}

export default db;