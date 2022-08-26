import admin from "firebase-admin"
import { JOB_SEEKER } from "../constants";
import credentials from "../firebaseConfig.json"
import { User } from '../models/user.model'

admin.initializeApp({
    credential: admin.credential.cert(credentials)
});


export const signup = async (req, res) => {
    try {
        const check =  await User.find({email:req.body.email})
        if(check.length==0){
            admin.auth().createUser({
                email: req.body.email,
                password: req.body.password,
                emailVerified: false,
                disabled: false
            }).then((value) => {
                const{email,mobile_number,full_name,state,city,zip,experience,role}=req.body
                const data={
                    email,
                    mobile_number,
                    full_name,
                    role,
                    state,city,zip,experience,uid:value.uid.toString(),
                    ...req.body
                }
                const saveUser = new User(data)
                saveUser.save().then(() => res.json({ success: true, data: value })).catch((err) => res.json({ success: false, message: 'Error while creating the user' }))
            }).catch((err) => { res.json({ success: false, message: 'Error while creating the user' }) })
        }
        else{
            res.json({ success: false, message: 'User Already exists' }) 
        }
  
    }
    catch (err) {
        res.json({ success: false, error: 'Error while creating the user' });
    }

}