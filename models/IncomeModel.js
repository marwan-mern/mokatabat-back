import mongoose from 'mongoose';

const IncomeSchema = mongoose.Schema({
    Income_No: String,
    Income_Subject: String,
    Income_Date: String,
    degree_Of_Security: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "secrets",
    },
    degree_Of_Priority: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "priorities",
    },
    from_depart:String,
    from_user_id:String,
    Income_Document:String
})

const incomes = mongoose.model('incomes', IncomeSchema);

export default incomes;