import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
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

const users = mongoose.model('users', UserSchema);

export default users;