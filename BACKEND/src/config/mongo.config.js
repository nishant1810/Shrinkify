import mongoose from "mongoose";

// console Logging the MongoDB URL
console.log(process.env.MONGO_URL);

// defining the connectDB function
const connectDB=async()=>{
  try{
    const conn=await mongoose.connect(process.env.MONGO_URL,{
      useNewUrlParser:true,
      useUnifiedTopology:true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  }
  catch(error){
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

// Exporting the connectDB function
export default connectDB;

  