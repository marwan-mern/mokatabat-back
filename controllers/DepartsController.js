import DepartmentsModel from "../models/DepartmentsModel"


export const GetDeparts =async (req, res) => {
    try {
        const Departs = await DepartmentsModel.find();
        res.status(200).json(Departs)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

