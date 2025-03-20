# Uber Clone Backend

## Project Setup

### Prerequisites
- Install [Node.js](https://nodejs.org/)
- Install [MongoDB](https://www.mongodb.com/)

### Installation
1. **Clone the repository**:
   ```sh
   git clone https://github.com/your-repo/uber-clone-backend.git
   cd uber-clone-backend
   ```
2. **Install dependencies**:
   ```sh
   npm install
   ```
3. **Create a `.env` file** with the following variables:
   ```env
   PORT=4000
   DB_CONNECT=mongodb://0.0.0.0/uber-clone
   JWT_SECRET=uber-clone-secret
   ```
4. **Start the server**:
   ```sh
   npm start
   ```

---

## API Endpoints

### 1. Register User

... (existing documentation for `/users/register`)

---

### 2. Login User

... (existing documentation for `/users/login`)

---

### 3. Get User Profile

#### **Endpoint**
`GET /users/profile`

#### **Description**
This endpoint retrieves the profile of the currently authenticated user. The user must be logged in and provide a valid JWT token.

#### **Headers**
| Header            | Value           | Required | Description                     |
|--------------------|-----------------|----------|---------------------------------|
| Authorization      | Bearer `<token>` | Yes      | The JWT token of the logged-in user |

#### **Responses**

**200 OK**

**Description:** Successfully retrieved user profile.

**Response Body:**
```json
{
  "user": {
    "_id": "user_id_here",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

**401 Unauthorized**

**Description:** User is not authenticated or token is invalid.

**Response Body:**
```json
{
  "message": "Unauthorized"
}
```

#### **Example CURL Request**
```sh
curl -X GET http://localhost:4000/users/profile \
-H "Authorization: Bearer <your_jwt_token>"
```

---

### 4. Logout User

#### **Endpoint**
`GET /users/logout`

#### **Description**
This endpoint logs out the currently authenticated user by clearing the token from cookies and blacklisting it.

#### **Headers**
| Header            | Value           | Required | Description                     |
|--------------------|-----------------|----------|---------------------------------|
| Authorization      | Bearer `<token>` | Yes      | The JWT token of the logged-in user |

#### **Responses**

**200 OK**

**Description:** Successfully logged out.

**Response Body:**
```json
{
  "message": "Logged out"
}
```

**401 Unauthorized**

**Description:** User is not authenticated or token is invalid.

**Response Body:**
```json
{
  "message": "Unauthorized"
}
```

#### **Example CURL Request**
```sh
curl -X GET http://localhost:4000/users/logout \
-H "Authorization: Bearer <your_jwt_token>"
```
---

### 5. Register Captain

#### **Endpoint**
`POST /captains/register`

#### **Description**
This endpoint registers a new captain. It validates the input data, hashes the password, creates a new captain in the database, and returns a JSON Web Token (JWT) along with the captain details.

#### **Request Body**
The request body should be a JSON object with the following fields:

| Field               | Type    | Required | Description                                      |
|---------------------|---------|----------|--------------------------------------------------|
| fullname            | Object  | Yes      | Contains captain's first and last name          |
| fullname.firstname  | String  | Yes      | Minimum 3 characters                            |
| fullname.lastname   | String  | Yes      | Minimum 3 characters                            |
| email               | String  | Yes      | Must be a valid email address                   |
| password            | String  | Yes      | Minimum 6 characters                            |
| vehicle             | Object  | Yes      | Contains vehicle details                        |
| vehicle.color       | String  | Yes      | Minimum 3 characters                            |
| vehicle.plate       | String  | Yes      | Minimum 3 characters                            |
| vehicle.capacity    | Number  | Yes      | Must be a number                                |
| vehicle.vehicleType | String  | Yes      | Must be one of `car`, `auto`, or `motorcycle`   |

#### **Example Request**
```json
{
    "fullname": {
        "firstname": "test_captain_firstname",
        "lastname": "test_captain_lastname"
    },
    "email": "test_email@gmail.com",
    "password": "test_captain",
    "vehicle": {
        "color": "red",
        "plate": "MP 04 XY 6204",
        "capacity": 3,
        "vehicleType": "car"
    }
}
```

#### **Responses**

**200 OK**

**Description:** Captain registered successfully.

**Response Body:**
```json
{
  "token": "jwt_token_here",
  "captain": {
    "_id": "captain_id_here",
    "fullname": {
      "firstname": "test_captain_firstname",
      "lastname": "test_captain_lastname"
    },
    "email": "test_email@gmail.com",
    "vehicle": {
      "color": "red",
      "plate": "MP 04 XY 6204",
      "capacity": 3,
      "vehicleType": "car"
    }
  }
}
```

**400 Bad Request**

**Description:** Validation error or missing required fields.

**Response Body:**
```json
{
  "errors": [
    {
      "msg": "Error message here",
      "param": "field_name",
      "location": "body"
    }
  ]
}
```

**401 Unauthorized**

**Description:** Captain already exists.

**Response Body:**
```json
{
  "message": "Captain already exists"
}
```

#### **Example CURL Request**
```sh
curl -X POST http://localhost:4000/captains/register \
-H "Content-Type: application/json" \
-d '{
    "fullname": {
        "firstname": "test_captain_firstname",
        "lastname": "test_captain_lastname"
    },
    "email": "test_email@gmail.com",
    "password": "test_captain",
    "vehicle": {
        "color": "red",
        "plate": "MP 04 XY 6204",
        "capacity": 3,
        "vehicleType": "car"
    }
}'
```

---

## Additional Notes
- Ensure MongoDB is running before starting the server.
- Use a strong `JWT_SECRET` in production.
- Extend the API with additional endpoints such as captain login and ride management functionalities.
---

## Additional Notes
- Ensure MongoDB is running before starting the server.
- Use a strong `JWT_SECRET` in production.
- Extend the API with additional endpoints such as profile management and ride-booking functionalities.

---

## License
This project is licensed under the [MIT License](LICENSE).