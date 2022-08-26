import mongoose from "mongoose";
import {JOB_SEEKER} from '../constants'
import {jobSchema} from '../models/job.model'
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    mobile_number: {
        type: String
    },
    uid: {
        type: String
    },
    full_name: {
        type: String
    },
    role: {
        type: String,
        default: JOB_SEEKER
    },
    state: {
        type: String
    },
    city: {
        type: String
    },
    Zip: {
        type: Number
    },
    experience:{
        type:String
    },
    jobs_applied:{
        type:[
            jobSchema
        ]
    },
    employment:
        [{
            company:String,
            job_role:{type:String},
            annual_salary:String,
            notice_period:String,
            total_experience:String,
            currently_employed:Boolean
        }]
    
});

export const User = mongoose.model("users", userSchema);
