import mongoose from "mongoose";

 const connectDB = async () => {

mongoose.connection.on('connected', ()=>{
    console.log("Mongoose connected ")
  
})
    
    await mongoose.connect(`${process.env.MONGO_URI}ecommerce`)
 }
export default connectDB;