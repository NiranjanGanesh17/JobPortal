import admin from "firebase-admin"
import credentials from "../firebaseConfig.json"


admin.initializeApp({
    credential: admin.credential.cert(credentials)
});


export const signup = async (req, res) => {
    try{
        const userResponse = await admin.auth().createUser({
            email: req.body.email,
            password: req.body.password,
            emailVerified: false,
            disabled: false
        });
        res.json(userResponse);
    }
    catch(err){
        res.json({success:false,error:'Error while creating the user'});
    }
    
}