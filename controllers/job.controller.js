import { Job } from '../models/job.model'
import { JOB_FILTER } from '../constants'

export const searchJobs = async (req, res) => {


// to do : have to implement autocomplete and search seperately from this


    try {
        const autocomplete = await Job.aggregate([
            {
                $search: {
                    index: JOB_FILTER, compound: {
                        should: [
                            {
                                autocomplete: { query: req.body.keyword, path: "city" }
                            },
                            {
                                autocomplete: { query: req.body.keyword, path: "state" }
                            },
                            {
                                autocomplete: { query: req.body.keyword, path: "job_role" }
                            }
                        ]
                    }
                }
            },
            { $limit: 1 },
            { $project: { _id: 0, state: 1, city: 1,job_role:1 } }
        ])
        const search = await Job.aggregate([
            { $match: { city: req.body.keyword } },
            { $limit: 10 },
        ])
        console.log(search, autocomplete)
        search.length == 0 ? res.send({ success: false }) : res.send({ success: true, data: search })
    }
    catch (error) {
        console.log(error)
    }

} 
