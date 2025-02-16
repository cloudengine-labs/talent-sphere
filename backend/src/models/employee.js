import { Schema, model } from 'mongoose';

const employeeSchema = new Schema({
    name: { type: String, required: true },
    empId: { type: String, required: true, unique: true },
    doj: { type: Date, required: true },
    dob: { type: Date, required: true },
    projectDetails: { type: String, required: true },
    mobile: { type: String, required: true },
    grossSalary: { type: Number, required: true },
},{ collection: 'employees' });

export default model('Employee', employeeSchema);
