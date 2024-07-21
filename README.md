# AgriVision4U-Task

![Skill Portal](./src/assets/dashboard.png)

Skill Portal is a full-stack application designed to provide a comprehensive dashboard for skill assessments. This project includes user authentication, profile management, and skill tracking features. The frontend is built using React, while the backend is powered by Express.js, with MongoDB serving as the database.

## Features

- User Authentication (Register, Login, Logout)
- Profile Management
- Skill Tracking and Analysis
- Dynamic Charts and Graphs
- Responsive Design

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Screenshots](#screenshots)
- [Video Demo](#video-demo)
- [License](#license)

## Installation

### Backend

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/skill-portal.git
    ```

2. Navigate to the backend directory:

    ```bash
    cd skill-portal/backend
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Create a `.env` file in the root of the backend directory and add the following:

    ```env
    PORT=5000
    MONGO_URI=mongodb://localhost:27017/skill-portal
    JWT_SECRET=your_jwt_secret
    ```

5. Start the backend server:

    ```bash
    npm start
    ```

### Frontend

1. Navigate to the frontend directory:

    ```bash
    cd ../frontend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the frontend development server:

    ```bash
    npm start
    ```

## Usage

- Register a new user or login with existing credentials.
- Update your profile information.
- Track and analyze your skill assessments through the dashboard.

## API Endpoints

### Auth Routes

- `POST /api/auth/register`: Register a new user.
- `POST /api/auth/login`: Login an existing user.

### User Routes

- `GET /api/users/data`: Get the logged-in user's data.
- `PUT /api/users/update`: Update the logged-in user's data.

## Technologies Used

- **Frontend**: React, Recharts, Axios, Joyride
- **Backend**: Express.js, Mongoose, JWT, Bcrypt
- **Database**: MongoDB

## Screenshots

### Dashboard

![Dashboard](./src/assets/dashboard.png)

### Login

![Login](./src/assets/login.png)

### Registration

![Registration](./src/assets/register.png)

## Video Demo

[![Skill Portal Video Demo](./src/assets/video-thumbnail.png)](https://www.youtube.com/watch?v=your_video_id)

## License

This project is licensed under the MIT License.
