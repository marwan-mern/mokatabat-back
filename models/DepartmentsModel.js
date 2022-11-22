import mongoose from 'mongoose';

const DepartSchema = mongoose.Schema({
    department: String,
    depart_parent_id: String,
    for_drop_box:String,
})

const departments = mongoose.model('departments', DepartSchema);

export default departments;