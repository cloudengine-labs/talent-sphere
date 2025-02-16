import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-blue-500 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">Employee Management System</h1>
                <nav>
                    <Link to="/" className="px-4 py-2 bg-white text-blue-500 rounded">Home</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;