import bcrypt, { hashSync } from 'bcrypt';
import User from '../models/user.model.js';

export const signUp = async(req,res)=>{
    const {username, email, password} = req.body;
    const hashPassword = hashSync(password, 10);
    if(username!==null && email!==null&&password!==null){
        const newUser = new User({username, email, password : hashPassword});
        newUser.save().then(()=>{
            res.status(201).json({message : "user is Created successfully"});
        }).catch((err)=>{res.status(400).json(err)});
    }else{
        res.status(400).json({message: "Something went wrong..."})
    }
}