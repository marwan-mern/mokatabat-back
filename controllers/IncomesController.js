import IncomeModel from "../models/IncomeModel"
import AssignedIncomeModel from "../models/ManagerAsignedIncomeModel"


export const SetIncome = async (req, res) => {
    const { Income_No, Income_Subject, Income_Date, degree_Of_Security, degree_Of_Priority, from_depart, from_user_id, Income_Document } = req.body;

    const newIncome = new IncomeModel({ Income_No, Income_Subject, Income_Date, degree_Of_Security, degree_Of_Priority, from_depart, from_user_id, Income_Document })
    try {
        await newIncome.save()
        res.status(201).json(newIncome)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const SetAssignedIncome = async (req, res) => {
    const { Income_ID, Assigned_From, Assigned_To, Action_Type, manager_assigned_text } = req.body;
    const newAssignedIncome = new AssignedIncomeModel({ Income_ID, Assignment_Date:Date.now(), Assigned_From, Assigned_To, Action_Type, manager_assigned_text ,Action_text:null})
    try {
        await newAssignedIncome.save()
        res.status(201).json(newAssignedIncome)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}



export const CheckIncomeNo = async (req, res) => {
    const {Income_No} = req.query;
    try {
        const Income = await IncomeModel.find({ Income_No : Income_No }).select('Income_No');
        res.status(201).json(Income)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const GetIncomes = async (req, res) => {
    const Incomes = await IncomeModel.find().select('-Income_Document').populate('degree_Of_Security').populate('degree_Of_Priority');
    try {
        res.status(201).json(Incomes)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const GetAssignedIncome = async (req, res) => {
    const {Income_Id} = req.query;
    try {
        const AssignedIncome = await AssignedIncomeModel.find({Income_ID:Income_Id}).populate('Assigned_To').populate('Action_Type');
        res.status(201).json(AssignedIncome)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}


export const GetPdf = async (req, res) => {
    const {ProcessNum} = req.query;
    try {
        const Pdf = await IncomeModel.find({Income_No:ProcessNum});
        res.status(201).json(Pdf)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const GetConsumerIncome = async (req, res) => {
    const {Assigned_To} = req.query;
    try {
        const AssignedIncome = await AssignedIncomeModel.find({Assigned_To:Assigned_To}).populate('Assigned_To').populate('Action_Type').populate({path:'Income_ID',select:'-Income_Document'});
        res.status(201).json(AssignedIncome)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const UpdateConsumerIncome = async (req, res) => {
    const { IncomeId,textArea} = req.body;
    try {
        const AssignedIncome = await AssignedIncomeModel.findOneAndUpdate({_id:IncomeId},{ Action_text:textArea }, { new: true });
        res.status(201).json(AssignedIncome)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

