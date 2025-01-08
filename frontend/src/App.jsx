// filepath: talent-sphere/frontend/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import UpdateEmployee from './components/UpdateEmployee'; // Import the update component

const Home = () => (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-8">Employee Management System</h1>
        <div className="space-x-4">
            <Link to="/add" className="px-4 py-2 bg-blue-500 text-white rounded">Add Employee</Link>
            <Link to="/view" className="px-4 py-2 bg-green-500 text-white rounded">View Employees</Link>
        </div>
    </div>
);

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add" element={<EmployeeForm />} />
                <Route path="/view" element={<EmployeeList />} />
                <Route path="/update/:id" element={<UpdateEmployee />} /> {/* Add the update route */}
            </Routes>
        </Router>
    );
};

export default App;