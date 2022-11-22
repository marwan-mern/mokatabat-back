import mongoose from 'mongoose';

const CurrentUserSchema = mongoose.Schema({
    Unique_User_Id: String,
    User_Name: String,
    Pass: String,
    User_Temp_Id: String,
    Depart: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "departments",
    },
    role:String
})

const current_user = mongoose.model('current_user', CurrentUserSchema);

export default current_user;