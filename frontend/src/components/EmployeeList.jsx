import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const EmployeeList = () => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetch(`${apiUrl}/api/employees/view`)
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setEmployees(data);
                } else {
                    console.error('API response is not an array:', data);
                }
            })
            .catch(err => console.error('Error fetching employees:', err));
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl font-bold mb-4">Employee List</h2>
            <ul className="w-full max-w-md bg-white p-6 rounded shadow-md">
                {employees.map(employee => (
                    <li key={employee._id} className="mb-4 p-4 border-b">
                        <div>
                            <div className="font-bold text-lg">{employee.name}</div>
                            <div className="text-gray-700">{employee.projectDetails}</div>
                        </div>
                        <Link to={`/update/${employee._id}`} className="text-blue-500 hover:text-blue-700">
                            <FontAwesomeIcon icon={faPen} />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmployeeList;