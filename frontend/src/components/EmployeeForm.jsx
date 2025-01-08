import React, { useState } from 'react';

const EmployeeForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        empId: '',
        doj: '',
        dob: '',
        projectDetails: '',
        mobile: '',
        grossSalary: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5001/api/employees/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (response.ok) alert('Employee added successfully!');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h2 className="text-2xl font-bold mb-4">Add Employee</h2>
            <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white p-6 rounded shadow-md">
                <div className="mb-4">
                    <label className="block text-gray-700">Name</label>
                    <input
                        name="name"
                        placeholder="Name"
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Employee ID</label>
                    <input
                        name="empId"
                        placeholder="Employee ID"
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Date of Joining</label>
                    <input
                        name="doj"
                        placeholder="Date of Joining"
                        type="date"
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Date of Birth</label>
                    <input
                        name="dob"
                        placeholder="Date of Birth"
                        type="date"
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Project Details</label>
                    <input
                        name="projectDetails"
                        placeholder="Project Details"
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Mobile</label>
                    <input
                        name="mobile"
                        placeholder="Mobile"
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Gross Salary</label>
                    <input
                        name="grossSalary"
                        placeholder="Gross Salary"
                        type="number"
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default EmployeeForm;