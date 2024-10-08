import mongoose from "mongoose";
import { JOB_SEEKER, BASIC_PLAN } from '../constants'
import { jobSchema } from '../models/job.model'
const Schema = mongoose.Schema;

export const userSchema = new Schema({
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
    plan: {
        type: String,
        default: BASIC_PLAN,
    },
    experience: {
        type: String
    },
    jobs_applied: {
        type: [mongoose.Schema.Types.ObjectId],
    },

    employment:
        [{
            company: String,
            job_role: { type: String },
            annual_salary: String,
            notice_period: String,
            total_experience: String,
            currently_employed: Boolean
        }],
    education: [
        {
            name: String,
            course: String,
            specialization: String,
            institute: String,
            course_type: String,
            passedout_year: String,
            marks: String
        }
    ],
    skills: [
        String
    ]

});

export const User = mongoose.model("users", userSchema);
