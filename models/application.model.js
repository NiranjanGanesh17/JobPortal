import mongoose from "mongoose";
import { JOB_SEEKER, BASIC_PLAN } from '../constants'
import { jobSchema } from './job.model'
const Schema = mongoose.Schema;

export const applicationSchema = new Schema({
    job: {
        type: mongoose.Schema.Types.ObjectId,
    },
    jobseeker: {
        type: mongoose.Schema.Types.ObjectId,
    },
    status: {
        type: String,
        default:'applied'
    }

});

export const Application = mongoose.model("applications", applicationSchema);
