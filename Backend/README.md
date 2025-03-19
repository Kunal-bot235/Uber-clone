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

## Additional Notes
- Ensure MongoDB is running before starting the server.
- Use a strong `JWT_SECRET` in production.
- Extend the API with additional endpoints such as profile management and ride-booking functionalities.

---

## License
This project is licensed under the [MIT License](LICENSE).