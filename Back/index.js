import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";


import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000
const URI = process.env.MongoURI;

//connect to mongo db
try {
    mongoose.connect(URI, {
        useNewUrlparser: true,
        useUnifiedTopology: true
    });
    console.log("connected to MongoDB");
} catch (error) {
    console.log("error:", error)
}


//define the route 
app.use("/book", bookRoute);
app.use("/user", userRoute);


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});