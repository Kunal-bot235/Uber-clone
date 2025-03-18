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

#### **Endpoint**
`POST /users/register`

#### **Description**
This endpoint registers a new user. It validates the input data, hashes the password, creates a new user in the database, and returns a JSON Web Token (JWT) along with the user details.

#### **Request Body**
The request body should be a JSON object with the following fields:

| Field       | Type    | Required | Description                         |
|------------|--------|----------|-------------------------------------|
| fullname   | Object | Yes      | Contains user's first and last name |
| firstname  | String | Yes      | Minimum 3 characters               |
| lastname   | String | No       | Minimum 3 characters               |
| email      | String | Yes      | Must be a valid email address       |
| password   | String | Yes      | Minimum 6 characters               |

#### **Example Request**
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### **Responses**

**200 OK**

**Description:** User registered successfully.

**Response Body:**
```json
{
  "token": "jwt_token_here",
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

#### **Example CURL Request**
```sh
curl -X POST http://localhost:4000/users/register \
-H "Content-Type: application/json" \
-d '{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}'
```

---

## Additional Notes
- Ensure MongoDB is running before starting the server.
- Use a strong `JWT_SECRET` in production.
- Extend the API with additional endpoints such as login, profile management, and ride-booking functionalities.

---

## License
This project is licensed under the [MIT License](LICENSE).
