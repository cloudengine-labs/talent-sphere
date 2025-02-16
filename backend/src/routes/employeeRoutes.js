import { Router } from 'express';
import mongoose from 'mongoose';
import Employee from '../models/employee.js';

const router = Router();

// View all employees
router.get('/view', async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Add employee
router.post('/add', async (req, res) => {
    try {
        const employee = new Employee(req.body);
        await employee.save();
        res.status(201).json({ message: 'Employee added successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a single employee by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid employee ID' });
    }

    try {
        const employee = await Employee.findById(id);
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.json(employee);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update employee
router.put('/update/:id', async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid employee ID' });
    }

    try {
        const updatedEmployee = await Employee.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedEmployee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.status(200).json(updatedEmployee);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;