# School Management API

A REST API built using **Node.js**, **Express.js**, **MySQL/TiDB**, and deployed on **Railway**.

This application allows users to:

- Add schools with location details
- Retrieve schools sorted by proximity to a user’s location
- Store school data in a cloud database
- Test APIs using Postman or live endpoints

---

# Live Deployment

Base URL:

```txt
https://school-management-production-f501.up.railway.app
```

Health Check:

```txt
GET /
```

Response:

```json
{
  "success": true,
  "message": "School Management API Running"
}
```

---

# Tech Stack

- Node.js
- Express.js
- MySQL / TiDB Cloud
- Railway
- Postman

---

# Project Setup

Clone repository:

```bash
git clone YOUR_GITHUB_REPO_URL

cd School-Management
```

Install dependencies:

```bash
npm install
```

Create `.env`

For local MySQL:

```env
PORT=3000

DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_NAME=school_management
```

For TiDB Cloud:

```env
DB_HOST=YOUR_TIDB_HOST
DB_PORT=4000
DB_USER=YOUR_TIDB_USER
DB_PASSWORD=YOUR_TIDB_PASSWORD
DB_NAME=school_management
```

Run project:

```bash
npm run dev
```

Server:

```txt
http://localhost:3000
```

---

# Database Setup

Create database:

```sql
CREATE DATABASE school_management;
```

Use database:

```sql
USE school_management;
```

Create schools table:

```sql
CREATE TABLE schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL
);
```

---

# API Documentation

## 1) Add School

Adds a new school record.

### Endpoint

```http
POST /addSchool
```

### Full URL

```txt
https://school-management-production-f501.up.railway.app/addSchool
```

### Request Body

```json
{
    "name":"ABC School",
    "address":"Mumbai",
    "latitude":19.0760,
    "longitude":72.8777
}
```

### Validation Rules

- name → required
- address → required
- latitude → required numeric value
- longitude → required numeric value

### Success Response

```json
{
   "success": true,
   "message":"School added successfully"
}
```

### Error Response

```json
{
   "success": false,
   "message":"All fields are required"
}
```

---

## 2) List Schools

Returns schools sorted by nearest distance from user coordinates.

### Endpoint

```http
GET /listSchools
```

### Full URL

```txt
https://school-management-production-f501.up.railway.app/listSchools?latitude=19.0760&longitude=72.8777
```

### Query Parameters

| Parameter | Type | Required |
|------------|------|-----------|
| latitude | Number | Yes |
| longitude | Number | Yes |

Example:

```txt
/listSchools?latitude=19.0760&longitude=72.8777
```

### Success Response

```json
[
    {
        "id":1,
        "name":"ABC School",
        "address":"Mumbai",
        "latitude":19.076,
        "longitude":72.8777,
        "distance":0
    }
]
```

---

# Postman Testing

Import the provided Postman collection.

Test sequence:

### Step 1

Call:

```http
POST /addSchool
```

Insert:

```json
{
    "name":"Test School",
    "address":"Delhi",
    "latitude":28.6139,
    "longitude":77.2090
}
```

### Step 2

Call:

```http
GET /listSchools?latitude=28.6139&longitude=77.2090
```

Verify schools return sorted by nearest distance.

---

# Deployment

Application deployed using:

- Railway (Backend Hosting)
- TiDB Cloud (Database)

Live URL:

```txt
https://school-management-production-f501.up.railway.app
```

---

# Deliverables

✔ Source Code Repository

✔ Live API Deployment

✔ Cloud Database Integration

✔ Postman Collection

✔ Add School API

✔ List Schools API

---

# Author

Ribhu Pramanik