import mongoose from 'mongoose';
import dotenv from 'dotenv';


dotenv.config();


const uri = process.env.MONGO_URI;

if (!uri) {
  throw new Error('Please define the MONGO_URI environment variable inside .env');
}


const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("MongoDB is connected");
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); 
  }
};

export default connectDB;