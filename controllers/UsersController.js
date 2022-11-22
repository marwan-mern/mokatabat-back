import UsersModel from "../models/UsersModel"
import CurrentUserModel from "../models/CurrentUserModel"


export const GetUser = async (req, res) => {
    try {
        const User = await UsersModel.find().populate({ path: "Depart", model: "departments" });
        res.status(200).json(User)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}



export const SetCurrentUser = async (req, res) => {
    const { Depart,Pass,Unique_User_Id,User_Name,User_Temp_Id,role } = req.body;
    const CurrentUserResponse = new CurrentUserModel({Depart,Pass,Unique_User_Id,User_Name,User_Temp_Id,role});
    try {
        await CurrentUserResponse.save()
        res.status(200).json(CurrentUserResponse)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


export const GetCurrentUser = async (req, res) => {
    try {
        const CurrentUser = await CurrentUserModel.find().populate({ path: "Depart", model: "departments" });
        res.status(200).json(CurrentUser)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const DeleteCurrentUser = async (req, res) => {
    try {
        await CurrentUserModel.deleteMany();
        res.status(200).json(`All Data Deleted `)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


export const GiveTemp = async (req, res) => {
    const { UserId, TempUserId} = req.body;
    try {
        const UpdatedUSer = await UsersModel.findOneAndUpdate({_id:TempUserId},{ User_Temp_Id:UserId }, { new: true });
        res.status(201).json(UpdatedUSer)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const HasMyAuth = async (req, res) => {
    const {CurrentUser} = req.query;
    try {
        const User = await UsersModel.find({User_Temp_Id:CurrentUser});

        res.status(200).json(User)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const UpdateCurrentUser = async (req, res) => {
    const {UniqueUserId, TempUserData} = req.body;
    try {
        const UpdatedUser = await CurrentUserModel.findOneAndUpdate({Unique_User_Id:UniqueUserId},{ Unique_User_Id:TempUserData.Unique_User_Id,User_Name:TempUserData.User_Name,Pass:TempUserData.Pass,User_Temp_Id:TempUserData.User_Temp_Id,Depart:TempUserData.Depart,role:TempUserData.role }, { new: true });
        res.status(201).json(UpdatedUser)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

