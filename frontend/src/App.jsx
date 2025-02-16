import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import UpdateEmployee from './components/UpdateEmployee';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl font-bold mb-8 text-center">Employee Management System</h1>
        <div className="mb-4 flex flex-col py-3 space-y-2">
            <Link to="/add" className="px-4 py-2 bg-blue-500 text-white rounded text-center">Add Employee</Link>
            <Link to="/view" className="px-4 py-2 bg-green-500 text-white rounded text-center">View Employees</Link>
        </div>
    </div>
);

const App = () => {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Header />
                <div className="flex-grow flex flex-col justify-center items-center container mx-auto p-4">
                    <main className="flex-grow flex justify-center items-center bg-white p-6 rounded shadow-md w-full max-w-4xl">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/add" element={<EmployeeForm />} />
                            <Route path="/view" element={<EmployeeList />} />
                            <Route path="/update/:id" element={<UpdateEmployee />} />
                        </Routes>
                    </main>
                </div>
                <Footer />
            </div>
        </Router>
    );
};

export default App;