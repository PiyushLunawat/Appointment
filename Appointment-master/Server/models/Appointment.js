import mongoose from 'mongoose';

const appSchema  = mongoose.Schema({
    title:String,
    content:String,
    email:{type:String,required:true},
});

const appoint = mongoose.model('Appointment',appSchema);

export default appoint;