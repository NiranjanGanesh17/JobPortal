import { Job } from '../models/job.model'
import { JOB_FILTER } from '../constants'

export const searchJobs = async (req, res) => {


    // to do : have to implement autocomplete and search seperately from this


    try {
        // const autocomplete = await Job.aggregate([
        //     {
        //         $search: {
        //             index: JOB_FILTER, compound: {
        //                 should: [
        //                     {
        //                         autocomplete: { query: req.body.city, path: "city" }
        //                     },
        //                     {
        //                         autocomplete: { query: req.body.city, path: "state" }
        //                     },
        //                     {
        //                         autocomplete: { query: req.body.role, path: "job_role" }
        //                     }
        //                 ]
        //             }
        //         }
        //     },
        //     { $limit: 1 },
        //     { $project: { _id: 0, state: 1, city: 1,job_role:1 } }
        // ])
        const search = await Job.aggregate([
            { $match: { city: req.body.city, "job_role": req.body.role } },
            { $limit: 20 },
        ])
        search.length == 0 ? res.send({ success: false, message: 'No such jobs are available' }) : res.send({ success: true, total: search.length, data: search })
    }
    catch (error) {
        console.log(error)
        res.send({ success: false, message: 'No such jobs are available' })
    }

} 
