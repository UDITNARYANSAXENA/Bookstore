import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
const app = express();

dotenv.config();

const PORT = process.env.PORT || 4000
const URI= process.env.MongoDB_URI

//connect to mongo db

try {
    mongoose.connect(URI,{
        useNewUrlparser:true,
        useUnifiedTopology:true
    });
    console.log("connected to MongoDB");
} catch (error) {
    console.log("error:",error)
}



app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})