import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI as string);
    console.log("Connected to Database");
  } catch (error) {
    console.log("Failed to connect to the Database, ", error);
  }
};

export default connectDB;