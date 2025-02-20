# Talent-Sphere Application Documentation

[![Build and Create Docker Images](https://github.com/cloudengine-labs/talent-sphere/actions/workflows/Build-Docker-Image.yaml/badge.svg)](https://github.com/cloudengine-labs/talent-sphere/actions/workflows/Build-Docker-Image.yaml)

## Purpose of the Application

Talent-Sphere is a frontend application designed for managing employee information within an organization. It allows users to add new employees and view a list of existing employees. The application provides a user-friendly interface for performing these tasks efficiently.

## Tech Stack Details

- **Frontend**:
  - React: A JavaScript library for building user interfaces.
  - Tailwind CSS: A utility-first CSS framework for styling.
  - React Router: A library for routing in React applications.
- **Backend**:
  - Node.js: A JavaScript runtime for building server-side applications.
  - Express: A web application framework for Node.js.
  - MongoDB: A NoSQL database for storing employee data.
  - Mongoose: An ODM (Object Data Modeling) library for MongoDB and Node.js.
  - dotenv: A module to load environment variables from a `.env` file.
  - cors: A middleware to enable Cross-Origin Resource Sharing.

## How to Run the Application

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB installed and running on your machine.

### Steps to Run the Application

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/cloudengine-labs/talent-sphere.git
   cd talent-sphere
   ```

2. **Install Dependencies**:
Navigate to the frontend and backend directories and install the dependencies.

   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

3. **Set Up Environment Variables**:

Create a `.env` file in the backend directory and add the following environment variables:

   ```env
   MONGODB_URI=mongodb://localhost:27017/talent-sphere
   PORT=5001
   ```

## How to Start MongoDB

To start MongoDB, ensure you have MongoDB installed on your machine. You can start MongoDB using the following command:

```bash
mongod --dbpath ~/mongodb/data/db
```

If you encounter any issues with the data directory, create the directory and set the appropriate permissions:

```bash
mkdir -p ~/mongodb/data/db
sudo chown -R `id -un` ~/mongodb/data/db
```

4. **Start the Backend Server**:
Navigate to the backend directory and start the server.
   ```bash
   cd backend
   npm start
   ```

5. **Start the Frontend Application**:

Navigate to the frontend directory and start the React application.
   ```bash
   cd frontend
   npm start
   ```

## API Endpoints
The backend server provides the following API endpoints:

1. **Add Employee**:
   - **URL**: `/api/employees/add`
   - **Method**: `POST`
   - **Description**: Adds a new employee to the database.
   - **Request Body**:
     ```json
     {
       "name": "John Doe",
       "empId": "E123",
       "doj": "2023-01-01",
       "dob": "1990-01-01",
       "projectDetails": "Project A",
       "mobile": "1234567890",
       "grossSalary": "50000"
     }
     ```

2. **View Employees**:
   - **URL**: `/api/employees/view`
   - **Method**: `GET`
   - **Description**: Retrieves a list of all employees from the database.

## How to Add and Verify Details

### Adding an Employee

1. Navigate to the home screen of the Talent-Sphere application.
2. Click on the "Add Employee" button.
3. Fill in the employee details in the form.
4. Click the "Submit" button to add the employee.

### Verifying Employee Details

1. Navigate to the home screen of the Talent-Sphere application.
2. Click on the "View Employees" button.
3. A list of all employees will be displayed. Verify the details of the newly added employee in the list.

By following these steps, you can successfully run the Talent-Sphere application, add new employees, and verify their details.

## How to Build and Run Docker Images

### Prerequisites

- Docker installed on your machine.

### Steps to Build and Run Docker Images

1. **Set Up Environment Variables**:

Ensure you have the necessary environment variables set up in the `.env` files for both the frontend and backend.

#### Frontend `.env` File

Create a `.env` file in the frontend directory with the following content:

   ```env
   PORT=3000
   REACT_APP_API_URL=http://localhost:5001
   ```

#### Backend `.env` File

Create a `.env` file in the backend directory with the following content:

   ```env
   MONGODB_URI=mongodb://localhost:27017/talent-sphere
   PORT=5001
   REACT_APP_API_URL=http://localhost:5001
   ```

2. **Build and Run Backend Docker Image**:

Navigate to the backend directory and build the Docker image:

   ```bash
   cd backend
   docker build -t backend-image .
   ```

Run the Docker container:

   ```bash
   docker run -p 5001:5001 backend-image
   ```

3. **Build and Run Frontend Docker Image**:

Navigate to the frontend directory and build the Docker image:

   ```bash
   cd frontend
   docker build -t frontend-image .
   ```

Run the Docker container:

   ```bash
   docker run -p 3000:3000 frontend-image
   ```

By following these steps, you can build and run Docker images for both the frontend and backend of the Talent-Sphere application, running on ports 3000 and 5001 respectively.

### Summary:

- Added sections to the README to explain how to build and run Docker images for the frontend and backend.
- Mentioned updating the `.env` files before running the images.
- Provided detailed steps for building and running the Docker images.
