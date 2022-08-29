import { User } from '../models/user.model'

export const appliedJobs = async (req, res) => {

    try {
       
        const search = await User.aggregate([
            { $lookup: { from: 'applications', localField: 'jobs_applied',foreignField:'_id',as:'appliedJobs' } },
            { $lookup: { from: 'jobs', localField: 'appliedJobs.job',foreignField:'_id',as:'jobs' } },
        ])
        search.length == 0 ? res.send({ success: false, message: 'No such jobs are available' }) : res.send({ success: true, total: search.length, data: search })
    }
    catch (error) {
        console.log(error)
        res.send({ success: false, message: 'No such jobs are available' })
    }

} 
