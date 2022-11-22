import mongoose from 'mongoose';

const ActionTypeSchema = mongoose.Schema({
    Action_Type_Name: String,
})

const PrioritySchema = mongoose.Schema({
    priority_desc: String,
})

const SecretSchema = mongoose.Schema({
    Secret_degree: String,
})

export const actionTypes = mongoose.model('actionTypes', ActionTypeSchema);
export const priorities = mongoose.model('priorities', PrioritySchema);
export const secrets = mongoose.model('secrets', SecretSchema);
