import mongoose from 'mongoose';

const ManagerAsignedIncomeSchema = mongoose.Schema({
    Income_ID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "incomes",
    },
    Assignment_Date: String,
    Assigned_From: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "departments",
    },
    Assigned_To: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "departments",
    },
    Action_Type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "actionTypes",
    },
    Action_text:String,
    manager_assigned_text:String,
})

const asignedIncomes = mongoose.model('asignedIncomes', ManagerAsignedIncomeSchema);

export default asignedIncomes;