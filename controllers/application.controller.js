import admin from "firebase-admin"
import { JOB_SEEKER } from "../constants";
import { Application } from '../models/application.model'
import { Job } from '../models/job.model'
import { User } from '../models/user.model'
import mongoose from "mongoose";


export const apply = async (req, res) => {
    try {
        const ObjectId = mongoose.Types.ObjectId;
        const search = await Application.aggregate([
            { $match: { job: ObjectId(req.body.job), jobseeker: ObjectId(req.body.jobseeker) } },
            { $limit: 5 },
        ])
        if (search.length == 0) {
            const applyJob = await new Application(req.body)
            applyJob.save()
                .then(async (result) => {
                    await Job.updateOne(
                        { _id: req.body.job },
                        {
                            $push: { applications: applyJob._id }
                        },
                        {
                            upsert: true
                        }
                    )
                })
                .then(async (res) => {
                    await User.updateOne(
                        { _id: req.body.jobseeker },
                        {
                            $push: { jobs_applied: applyJob._id }
                        },

                        {
                            upsert: true
                        }
                    )
                })
                .then((response) => {
                    res.json({ success: true, result: applyJob })
                }).catch((error) => {
                    res.json({ success: false, result: 'Application submission failed' })
                })
        }

        else {
            res.json({ success: false, result: 'Application already exists' })

        }
    }
    catch (err) {
        res.json({ success: false, error: 'Application submission failed' });
    }

}