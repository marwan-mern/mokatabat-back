import {actionTypes,priorities,secrets} from "../models/Action_Priority_Secret_Model"


export const GetAPS =async (req, res) => {
    try {
        const actionTypesData = await actionTypes.find();
        const prioritiesData = await priorities.find();
        const secretsData = await secrets.find();
        res.status(200).json({actionTypesData,prioritiesData,secretsData})
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

