# Talent-Sphere Application Documentation

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
   git clone https://github.com/your-username/talent-sphere.git
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

4. **Start MongoDB**:
Ensure MongoDB is running. You can start MongoDB using the following command:

   ```bash
   mongod --dbpath ~/mongodb/data/db
   ```

5. **Start the Backend Server**:

Navigate to the backend directory and start the server.
   ```bash
   cd backend
   npm start
   ```

6. **Start the Frontend Application**:

Navigate to the frontend directory and start the React application.
   ```bash
   cd frontend
   npm start
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
