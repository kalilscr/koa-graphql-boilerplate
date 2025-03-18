import mongoose from "mongoose";

export const connectDatabase = () => {
  mongoose.connect(String(process.env.MONGO_URI));
  mongoose.connection.once("open", () => {
    console.log("connected to database");
  });
};
