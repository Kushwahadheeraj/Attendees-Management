import mongoose from "mongoose";
 

const connectTODataBase = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
    } catch (error) {
        console.log(error)        
    }
}

export default connectTODataBase