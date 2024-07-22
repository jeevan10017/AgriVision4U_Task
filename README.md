# AgriVision4U-Task

 
![dashboard](https://github.com/user-attachments/assets/e02f8851-52d7-4176-b861-adc48110e1cc)




This Task is a full-stack application designed to provide a comprehensive dashboard for marks assessments. This project includes user authentication, profile management, and marks tracking features. The frontend is built using React, while the backend is powered by Express.js, with MongoDB serving the database.

## Features

- User Authentication (Register, Login, Logout)
- Profile Management
- Skill Tracking and Analysis
- Dynamic Charts and Graphs
- Responsive Design
- Share facility

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Screenshots](#screenshots)
- [Video Demo](#video-demo)

## Installation

### Backend

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/AgriVision4U_Task.git
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
    npm server.js
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

![Screenshot 2024-07-21 183222](https://github.com/user-attachments/assets/b4679ee9-10b5-4e64-b42f-881087ea449b)



![image](https://github.com/user-attachments/assets/c763faba-f000-4890-beef-4232c1513ceb)




![Screenshot 2024-07-21 183431](https://github.com/user-attachments/assets/f76ad482-d6d6-42a7-a7b2-001d13303e43)



### Login

![Uploading Screenshot 2024-07-21 182722 (1) (1).png…]()



### Registration

![Screenshot 2024-07-21 183138 (1)](https://github.com/user-attachments/assets/8cfaf278-4a85-4018-aa53-2ccd11855bff)



## Video Demo

[![Watch the video](https://img.youtube.com/vi/UxBiRgZ1WQ8/maxresdefault.jpg)](https://www.youtube.com/watch?v=UxBiRgZ1WQ8)


