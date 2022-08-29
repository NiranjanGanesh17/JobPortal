import mongoose from "mongoose";
import {userSchema} from '../models/user.model'
const Schema = mongoose.Schema;

export const jobSchema = new Schema({
    job_role: {
        type: String,
        // required: true,
        // unique: true,
    },
    company: {
        type: String
    },
    minExperience: {
        type: String,
    },
    maxExperience: {
        type: String,
    },
    requirements: {
        type: String,
    },
    experience: {
        type: String,
    },
    work_location: {
        type: String
    },
    job_seniority: {
        type: String
    },
    education: {
        type: String
    },
    state: {
        type: String,
    },
    city: {
        type: String
    },
    rating: {
        type: String,
    },
    salary: {
        type: Number,
    },
    keywords: {
        type: String,
    },
    location: {
        type: String,
    },
    applications:{
        type: [mongoose.Schema.Types.ObjectId],
    }
});

export const Job = mongoose.model("jobs", jobSchema);
