import User from "../models/User";
import bcrypt from 'bcrypt';

const userRegister = async () => {
    try{
        const hashPassword= await bcrypt.hash("admin",10)
        const newUser = new User({
            name:"ad",
            email:"dk123@gmail.com",
            password:hfghfgh,
            role:"admin"
        })
        await newUser.save();
    }catch{
        console.log(error)

    }
} 